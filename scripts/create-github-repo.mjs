#!/usr/bin/env node

import { Octokit } from '@octokit/rest';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface({ input, output });

async function ask(question, { defaultValue, required = false } = {}) {
  const suffix = defaultValue ? ` (${defaultValue})` : '';
  const answer = (await rl.question(`${question}${suffix ? suffix : ''}: `)).trim();
  if (!answer && defaultValue) {
    return defaultValue;
  }
  if (required && !answer) {
    console.log('  Value required. Please try again.');
    return ask(question, { defaultValue, required });
  }
  return answer;
}

function parseBoolean(inputValue, fallback) {
  if (!inputValue) return fallback;
  const normalized = inputValue.toLowerCase();
  if (['y', 'yes', 'true', 't', '1'].includes(normalized)) return true;
  if (['n', 'no', 'false', 'f', '0'].includes(normalized)) return false;
  return fallback;
}

async function main() {
  try {
    console.log('\nGitHub Repository & Branch Automation');
    console.log('--------------------------------------');

    let token = process.env.GITHUB_TOKEN?.trim();
    if (!token) {
      const warning = 'Enter a GitHub personal access token with at least "repo" scope.';
      console.log(`\n${warning}`);
      console.log('WARNING: Input will be echoed; press Ctrl+C to abort if you prefer to set GITHUB_TOKEN.');
      token = await ask('GitHub personal access token', { required: true });
    }

    const octokit = new Octokit({ auth: token });
    const { data: authUser } = await octokit.rest.users.getAuthenticated();
    console.log(`\nAuthenticated as ${authUser.login}`);

    const ownerChoice = (await ask('Create repo under your personal account? (y/n)', { defaultValue: 'y' })).toLowerCase();
    const usePersonal = parseBoolean(ownerChoice, true);

    let owner = authUser.login;
    if (!usePersonal) {
      owner = await ask('Organization login', { required: true });
    }

    const repoName = await ask('Repository name', { required: true });
    const description = await ask('Repository description');

    const privateChoice = await ask('Make repository private? (y/n)', { defaultValue: 'n' });
    const isPrivate = parseBoolean(privateChoice, false);

    const autoInitChoice = await ask('Initialize with README? (y/n)', { defaultValue: 'y' });
    const autoInit = parseBoolean(autoInitChoice, true);

    if (!autoInit) {
      console.log('\nWARNING: Without an initial commit, new branches cannot be created automatically.');
      console.log('         Continue only if you plan to push an initial commit manually.');
    }

    const additionalBranchesRaw = await ask('Additional branches (comma separated, leave blank for none)');
    const additionalBranches = additionalBranchesRaw
      .split(',')
      .map((branch) => branch.trim())
      .filter((branch) => branch.length > 0);

    console.log('\nCreating repository...');

    const repoPayload = {
      name: repoName,
      description: description || undefined,
      private: isPrivate,
      auto_init: autoInit,
    };

    let repoData;
    if (usePersonal) {
      ({ data: repoData } = await octokit.rest.repos.createForAuthenticatedUser(repoPayload));
    } else {
      ({ data: repoData } = await octokit.rest.repos.createInOrg({ org: owner, ...repoPayload }));
    }

    console.log(`Repository created: ${repoData.html_url}`);

    if (autoInit && additionalBranches.length > 0) {
      const defaultBranch = repoData.default_branch;
      console.log(`\nPreparing to create branches from ${defaultBranch}...`);

      const { data: branchInfo } = await octokit.rest.repos.getBranch({
        owner: repoData.owner.login,
        repo: repoName,
        branch: defaultBranch,
      });

      const sourceSha = branchInfo.commit.sha;

      for (const branch of additionalBranches) {
        if (branch === defaultBranch) {
          console.log(`- Skipping branch "${branch}" (already the default branch).`);
          continue;
        }

        try {
          await octokit.rest.git.createRef({
            owner: repoData.owner.login,
            repo: repoName,
            ref: `refs/heads/${branch}`,
            sha: sourceSha,
          });
          console.log(`- Created branch ${branch}`);
        } catch (error) {
          if (error.status === 422) {
            console.log(`- Branch ${branch} already exists or is invalid.`);
          } else {
            console.log(`- Failed to create branch ${branch}: ${error.message}`);
          }
        }
      }
    } else if (additionalBranches.length > 0) {
      console.log('\nWARNING: Additional branches were requested, but the repo was not auto-initialized.');
      console.log('         Create the initial commit first, then rerun the branch creation or add them manually.');
    }

    console.log('\nAll done. Happy coding!');
  } catch (error) {
    console.error('\nERROR: Operation failed.');
    if (error.request && error.response) {
      console.error(`Status: ${error.status}`);
      console.error(`Response: ${error.response?.data?.message ?? error.message}`);
    } else {
      console.error(error.message ?? error);
    }
    process.exitCode = 1;
  } finally {
    rl.close();
  }
}

await main();
