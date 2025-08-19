# VSCode Setup Guide

To ensure a consistent development experience, please follow these steps to configure your VSCode editor:

## Recommended Extensions

Install the following extensions for the best development experience:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "aaron-bond.better-comments",
    "streetsidesoftware.code-spell-checker",
    "eamodio.gitlens",
    "mikestead.dotenv",
    "mrmlnc.vscode-scss",
    "naumovs.color-highlight",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.js-debug-companion",
    "sonarsource.sonarlint-vscode"
  ]
}
```

## Workspace Settings

Add these settings to your workspace settings (`.vscode/settings.json`):

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": true
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.rulers": [80, 100],
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.packageManager": "npm",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "typescript.suggest.autoImports": true,
  "typescript.preferences.importModuleSpecifier": "relative",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.suggest.autoImports": true,
  "javascript.preferences.importModuleSpecifier": "relative",
  "files.autoSave": "onFocusChange",
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "tailwindCSS.includeLanguages": {
    "typescript": "typescriptreact",
    "javascript": "javascriptreact"
  },
  "tailwindCSS.emmetCompletions": true,
  "tailwindCSS.validate": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "workbench.colorCustomizations": {
    "statusBar.background": "#1a1a1a",
    "statusBar.foreground": "#ffffff",
    "titleBar.activeBackground": "#1a1a1a",
    "titleBar.activeForeground": "#ffffff"
  },
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.enablePreview": false,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.autofetch": true,
  "gitlens.codeLens.enabled": false,
  "gitlens.hovers.currentLine.over": "line",
  "gitlens.advanced.messages": {
    "suppressShowKeyBindingsNotice": true
  },
  "diffEditor.ignoreTrimWhitespace": false,
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/*.code-search": true,
    "**/dist": true,
    "**/build": true,
    "**/.next": true,
    "**/.vercel": true,
    "**/.git": true
  },
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": true,
    "**/dist": true,
    "**/build": true,
    "**/.next": true,
    "**/.vercel": true
  },
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/dist/**": true,
    "**/build/**": true,
    "**/.next/**": true,
    "**/.vercel/**": true
  }
}
```

## Keybindings

For better productivity, consider adding these keybindings to your `keybindings.json`:

```json
[
  {
    "key": "shift+alt+f",
    "command": "editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },
  {
    "key": "ctrl+shift+l",
    "command": "editor.action.selectHighlights",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+shift+o",
    "command": "workbench.action.gotoSymbol"
  },
  {
    "key": "ctrl+shift+r",
    "command": "workbench.action.quickOpenNavigateNextInViewlet",
    "when": "inFilesPicker && inFilesPicker"
  }
]
```

## Debug Configuration

Add this configuration to `.vscode/launch.json` for debugging:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/src/*"
      }
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Tests",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

## Recommended Extensions Settings

For the best experience, configure these extensions with these settings:

1. **ESLint**:
   - Enable "ESLint: Enable"
   - Set "ESLint: Package Manager" to "npm"
   - Enable "ESLint: Auto Fix On Save"

2. **Prettier**:
   - Set as default formatter
   - Enable "Format On Save"
   - Enable "Require Config"

3. **Tailwind CSS**:
   - Enable "Tailwind CSS: Emmet Completions"
   - Enable "Tailwind CSS: Validate"

4. **GitLens**:
   - Disable code lens by default
   - Enable hover annotations
   - Show blame annotations on the line

## Workspace Trust

For security, VSCode will ask you to trust the workspace. You can trust this workspace as it only contains your project files and dependencies.

## Troubleshooting

If you encounter any issues:
1. Make sure all dependencies are installed: `npm install`
2. Restart VSCode after installing extensions
3. Check the output panel (View > Output) for any error messages
4. Ensure your Node.js version matches the one specified in `.nvmrc`

Happy coding!
