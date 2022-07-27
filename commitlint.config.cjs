module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Blow lines are optional.
    'header-max-length': [2, 'always', 100], // Level [0..2]: 0 disables the rule. For 1 it will be considered a warning for 2 an error. refs: https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
    'body-max-line-length': [0, 'always', 100],
    'footer-max-line-length': [0, 'always', 100],
  },
}
