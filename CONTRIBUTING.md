# Contributing to R E S U M E

First off, thanks for taking the time to contribute! :tada: :heart:

The following is a set of guidelines for contributing to **R E S U M E** project, which is hosted on GitHub. These are mostly guidelines, not rules. Use your best judgement, and feel free to propose changes to this document in a pull request.

#### Table Of Contents
- [Code of Conduct](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#books-code-of-conduct)
- [How Can I Contribute?](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#how-can-i-contribute)
  - [Reporting Bugs](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#snail-reporting-bugs)
  - [Suggesting Features](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#point_up-suggesting-features)
  - [Opening a Pull Request](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#rocket-opening-a-pull-request)
- [Styleguides](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#styleguides)
  - [Git Commits](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#git-commits)
  - [Issues and Pull Requests Labels](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#issues-and-pull-requests-labels)
  - [Tests](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#tests)
  - [GitHub Actions](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#github-actions)
  - [JavaScript and React Guidelines](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#javascript-and-react-guidelines)
  - [Sass Guidelines](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#sass-guidelines)

## :books: Code of Conduct

This project and everyone participating in it is governed by the project [Code of Conduct](https://github.com/LucaPipolo/resume/blob/master/CODE_OF_CONDUCT). By participating, you are expected to uphold this code. Please report unacceptable behaviour to [dev@lucapipolo.com](mailto:dev@lucapipolo.com).

## How Can I Contribute?

### :snail: Reporting Bugs

Before creating bug reports, please check [this list](https://github.com/LucaPipolo/resume/issues?q=is%3Aissue+is%3Aopen+label%3Abug) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible. Fill out [the required template](https://github.com/LucaPipolo/resume/blob/master/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

:warning: If you find a closed issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

Explain the problem and include additional details to help maintainers reproduce the problem:
- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. When listing steps, don't just say what you did, but explain how you did it.
- **Provide specific examples to demonstrate the steps.** Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Code Pen](https://codepen.io/) links or [Markdown code blocks](https://help.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github#multiple-lines).
- **Describe the behaviour you observed after following the steps** and point out what exactly is the problem with that behaviour.
- **Explain which behaviour you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://github.com/colinkeenan/silentcast) to record GIFs on macOS and Windows.

Include details about your configuration and environment:
- **What's the name and version of the Browser you're using?**
- **What's the name and version of the OS you're using?**
- **Which is the screen resolution you are experiencing the issue with?**

### :point_up: Suggesting Features

Before creating feature suggestions, please check [this list](https://github.com/LucaPipolo/resume/issues?q=is%3Aissue+is%3Aopen+label%3Afeature) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please include as many details as possible. Fill in [the template](https://github.com/LucaPipolo/porfolio-website/blob/master/.github/ISSUE_TEMPLATE/feature-request.md), including the steps that you imagine you would take if the feature you're requesting existed.

Provide the following information:
- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested feature** in as many details as possible.
- **Provide specific examples to demonstrate the steps.** Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Code Pen](https://codepen.io/) links or [Markdown code blocks](https://help.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github#multiple-lines).
- **Describe the current behaviour** and **explain which behaviour you expected to see instead** and why.
- **Explain why this enhancement would be useful**.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Atom which the suggestion is related to. You can use [this tool](https://github.com/colinkeenan/silentcast) to record GIFs on macOS and Windows.

### :rocket: Opening a Pull Request

We use Pull Reques to maintain the project quality, fix issues and engage the community.

Please follow these steps to have your contribution considered by the maintainers:
- Follow [our styleguides](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#issues-and-pull-requests-labels)
- Follow all instructions in [the template](https://github.com/LucaPipolo/resume/blob/master/.github/PULL_REQUEST_TEMPLATE.md).
- Create a related [feature/bug issue](https://github.com/LucaPipolo/resume/issues).
- Apply one of the [pre-defined labels](https://github.com/LucaPipolo/resume/blob/master/CONTRIBUTING.md#issues-and-pull-requests-labels).
- After you submit your pull request, verify that all status checks are passing. If not, please fix the error reported by them. If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated.

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commits

Let's define some basic rules for commits:
- Only keep commits that are worth to keep for forensics.
- Do atomic commits; i.e., one functional topic is one commit.
- When committing external library files, commit them in a separate commit, so that the commits with your own changes can be reviewed separately.

What about commit messages? Please strictly follow these rules:
- Use proper English; i.e., sentence begins with uppercase letter and ends in a period.
- Start with third person verb in past tense choosing between:
  - Added... • For new features and functionality.
  - Fixed... • For any kind of fix, including UX problems.
  - Removed... • For maintenance work.
  - Changed... • For optimization jobs.
- Do NOT state what the technical change in the code is. That's irrelevant.
- Step back and think back: What was the very original cause for a change?
- Include sufficient keywords to describe the change. State which part of the code is affected (react, storybook, test, dependency, etc.) and which files, so that the context is clear when scanning through the global log; e.g.: `"Added hollow variation for button React Component."`
- For follow-up commits that will only exist temporarily for peer-review purposes, use git's built-in fixup commit feature (i.e., `git commit --fixup <commit-hash>`). With the `--fixup` option, Git will automatically move the commit right after the commit that has been specified with `<commit-hash>` and automatically use the command fixup instead of pick when you do a `git rebase --interactive`. This feature is called __autosquash__; if it does not already work by default, enable it once with: `git config --global rebase.autosquash true`.

### Issues and Pull Requests labels

| Label name | Search | Description |
| --- | --- | --- |
| `feature` | [:mag:](https://github.com/LucaPipolo/resume/labels/feature) | For new shiny features. |
| `bug` | [:mag:](https://github.com/LucaPipolo/resume/labels/bug) | For pest control operations! |
| `documentation` | [:mag:](https://github.com/LucaPipolo/resume/labels/documentation) | To add or improve documentation. |
| `question` | [:mag:](https://github.com/LucaPipolo/resume/labels/question) | Further information is requested. |
| `duplicate` | [:mag:](https://github.com/LucaPipolo/resume/labels/duplicate) | This issue or pull request already exists. |
| `invalid` | [:mag:](https://github.com/LucaPipolo/resume/labels/invalid) | Something seems to be wrong here. |
| `wontfix` | [:mag:](https://github.com/LucaPipolo/resume/labels/wontfix) | This will not be worked on. |

### Tests

All React components needs to have a test written using [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
Please, always try to follow a [Test Driven Development (TDD) approach](https://www.agilealliance.org/glossary/tdd/) when creating or modifying a component.

Our goal is to keep the [Code Coverage](https://www.atlassian.com/continuous-delivery/software-testing/code-coverage) stable or, even better, increase it. To check the Code Coverage, run `yarn test --coverage`.

Here some suggestions about how to write good tests:
- **Always remind that tests are for users.** Our users are the website visitors and the developers working on the source code. Tests needs to be useful for at least one of the two groups. For example, you might check if component props are correctly received or if the component works as the website visitor expect.
- **Do not rely on small markup pieces for testing your component.** We do not want our test to fail for small markup changes. For example, if your component is outputting some data, we do not really care if this is wrapped into an `h1` or a `span` element. What matters for our users, is that the data is displayed.
- After previous point, it might sounds redundant to you but it's super important: please, **only test things that matter**. Write and maintain tests is a time consuming operation. We want to spend this time when tests are really useful!

### GitHub Actions

- **Test** • Runs on every Pull Request opened against `master` branch. It executes `yarn test` and `yarn test --coverage` to push coverage results to [Codecov.io](https://codecov.io/).
- **Stage** • Deploys latest `master` status branch to Heroku stage environment. It's automatically executed every time `master` branch is updated.
- **Deploy** • Deploys latest published GitHub release to Heroku production environment.

### JavaScript and React Guidelines

All JavaScript code and React components are following the ESLint/Prettier React recommended rules. The only difference from default React rules is that we prefer single quote instead of double (not for JSX attributes).

[Husky](https://github.com/typicode/husky) is taking care of automatically format your code when commit new changes. If some code style issues can not be automatically fixed, the CLI will report it and you will need to manually fix it.

### Sass Guidelines

Sass is written following custom rules in [the Stylelint configuration file](https://github.com/LucaPipolo/resume/blob/master/.stylelintrc).

[Husky](https://github.com/typicode/husky) is taking care of automatically format your code when commit new changes. If some code style issues can not be automatically fixed, the CLI will report it and you will need to manually fix it.

We expect Rect component style to be added into a separate Sass file (e.g. `Button.scss`) in the related `components` folder (e.g. `components/Button`).
These files are included in the React component using [CSS Modules technique](https://github.com/css-modules/css-modules).
