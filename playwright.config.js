// eslint-disable-next-line import/no-extraneous-dependencies
const { devices } = require("@playwright/test");

const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  testMatch: ["**/src/**/*.spec.js"],
  use: {
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // globalSetup: require.resolve('./global_setup')
};

module.exports = config;
