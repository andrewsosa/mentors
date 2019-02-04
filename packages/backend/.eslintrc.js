module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        // devDependencies: ['**/*.test.js', '**/*.spec.js'],
        packageDir: ['./', 'packages/backend/'],
      },
    ],
  },
};
