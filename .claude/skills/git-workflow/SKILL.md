---
name: git-workflow
description: Git workflow rules for commit messages and branch naming. Use when creating commits, branches, or bookmarks in this project. Enforces Angular-style commit message conventions and feature branch naming. Applies to both git and jj (Jujutsu) operations.
---

# Git Workflow Rules

## Commit Message Format

Follow the Angular commit message convention.
Reference: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- Header is mandatory. Scope is optional.
- All lines must be within **100 characters**.

### Type

Must be one of:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

### Subject

- Use imperative, present tense: "change" not "changed" nor "changes"
- Do not capitalize the first letter
- No period (.) at the end

### Body (optional)

- Use imperative, present tense
- Explain the motivation for the change and contrast with previous behavior

### Footer (optional)

- **Breaking changes**: Start with `BREAKING CHANGE:`
- **Issue references**: e.g., `Closes #123`

### Examples

```
feat(auth): add login with OAuth2

docs: add API usage examples to README

fix(parser): handle null values in JSON input

Null values caused a NullPointerException when parsing
nested objects.

Closes #42

refactor(core): extract validation logic into separate module
```

## Branch Naming

All branches must start with `feature/`.

```
feature/<short-description>
```

- Use kebab-case for the description
- Keep it concise and descriptive

### Examples

```
feature/add-login
feature/fix-parser-null-handling
feature/update-readme
```

### Jujutsu (jj)

When using jj, apply the same naming to bookmarks:

```bash
jj bookmark create feature/<short-description>
```
