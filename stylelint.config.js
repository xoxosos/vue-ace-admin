export default {
  root: true,
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  ignoreFiles: ['**/*', '!src/**/*', 'src/**/*.{js,jsx,ts,tsx}'],
  overrides: [
    {
      files: ['src/**/*.vue'],
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
      rules: {}
    }
  ]
}
