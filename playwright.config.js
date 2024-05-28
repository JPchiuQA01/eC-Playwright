// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

// Configuraciones ----------------
module.exports = defineConfig({
  // Dirección de la carpeta de los test
  testDir: './tests',
  /* Paralelismo */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,


  //Reportes: 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  //Configuraciones previas para la url y navegadores
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'http://opencart.abstracta.us/index.php?route=common/home',
     // Página principal del eCommerce Web.

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false,
    // Configuración de video
    video: 'on',
    videoOptions: {
      // Ruta personalizada para los videos
      //storageState: 'path-to-storage.json', // Optional: if you want to save some storage state
      outputDir: path.join(__dirname, 'reports/videos') // Ruta donde se guardarán los videos
    },
    viewport: null,  // Maximizar la pantalla
    launchOptions: {
      args: ['--start-maximized']  // Opcional: maximizar ventana para navegadores basados en Chromium
    }
  },

  /* Configuración de los navegadores */
  projects: [
    /*
    // Chromiun
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    */

    
    // Mozila Firefox
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
      viewport:{width: 1440, height: 813}
    },
    },
    
    /*
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

