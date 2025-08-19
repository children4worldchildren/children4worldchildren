# Contributing to Children 4 World Children

Thank you for considering contributing to Children 4 World Children! We appreciate your time and effort in helping us improve this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Reporting Issues](#reporting-issues)
- [License](#license)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.17.1 or higher)
- npm (v9.6.7 or higher) or yarn (v1.22.19 or higher)
- Git

### Installation

1. Fork the repository on GitHub
2. Clone your fork locally
   ```bash
   git clone https://github.com/your-username/children4worldchildren.git
   cd children4worldchildren
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
4. Set up pre-commit hooks
   ```bash
   npx husky install
   ```

## 🔄 Development Workflow

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. **Make your changes**
   - Follow the [Code Style](#code-style) guidelines
   - Write tests for your changes
   - Update documentation as needed

3. **Run tests**
   ```bash
   npm test
   # or
   yarn test
   ```

4. **Run linter and formatter**
   ```bash
   npm run lint
   npm run format
   # or
   yarn lint
   yarn format
   ```

5. **Commit your changes**
   Follow the [Commit Message Guidelines](#commit-message-guidelines)

6. **Push your changes**
   ```bash
   git push origin your-branch-name
   ```

7. **Open a Pull Request**
   - Go to the [repository](https://github.com/Ikenna-Brendan/children4worldchildren)
   - Click on "Compare & pull request"
   - Fill in the PR template
   - Submit the PR

## 🔄 Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters.
3. Increase the version numbers in any example files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## 🎨 Code Style

### General Guidelines

- Use TypeScript for all new code
- Follow the Airbnb JavaScript/TypeScript Style Guide
- Use functional components with React Hooks
- Prefer named exports over default exports
- Keep components small and focused on a single responsibility
- Write tests for all new features and bug fixes

### Naming Conventions

- **Files**: Use `kebab-case` for file names (e.g., `my-component.tsx`)
- **Components**: Use `PascalCase` for component names (e.g., `MyComponent`)
- **Variables/Functions**: Use `camelCase`
- **Constants**: Use `UPPER_SNAKE_CASE`
- **Interfaces/Types**: Use `PascalCase` with an `I` prefix for interfaces (e.g., `IUser`)

### TypeScript

- Always provide types for function parameters and return values
- Use interfaces for object types and type aliases for union/intersection types
- Avoid using `any` type
- Use `readonly` for immutable properties

### Styling

- Use Tailwind CSS for styling
- Keep styles scoped to components
- Avoid inline styles when possible
- Use CSS variables for theming

## ✍️ Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages. This allows us to automatically generate changelogs and determine semantic version numbers.

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Examples

```
feat: add user authentication

Add JWT-based authentication with login and registration forms.

Closes #123
```

```
fix: correct button click handler

Fix issue where the submit button was not triggering the form submission.

Fixes #456
```

## 🐛 Reporting Issues

Before submitting an issue, please check if it has already been reported.

### Bug Reports

1. Use a clear and descriptive title
2. Describe the exact steps to reproduce the issue
3. Include any relevant code snippets or error messages
4. Specify which version of the project you're using
5. Describe the expected behavior

### Feature Requests

1. Use a clear and descriptive title
2. Describe the problem you're trying to solve
3. Explain why this feature would be useful
4. Provide examples of how the feature would be used

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## 🙏 Thank You!

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to contribute.
