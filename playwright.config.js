// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
testDir: './tests',
use: {
  headless: false,
  timeout: 30*1000, // 30 seconds
  expect:{
    timeout: 50*1000 // 5 seconds
  }
},
});

