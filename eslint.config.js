import neostandard from 'neostandard';

export default neostandard({
  files: ['**/*.{js,mjs,cjs}'],
  env: ['browser', 'jest'],
  semi: true,
});
