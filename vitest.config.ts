import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    root: 'test',
    globalSetup: './setup.ts',
  },
});
