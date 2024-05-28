
const { test, expect } = require('@playwright/test');
const path = require('path');
const HomePage = require('../pages/HomePage.js');

test('Verificar el titulo de HomePage', async ({ page }) => {
  // Crear una instancia de la página principal
  const homePage = new HomePage(page);

  // Navegar a la página principal
  await homePage.goto();

  // Obtener el título de la página
  const title = await homePage.getTitle();

  // Verificar que el título sea el esperado
  expect(title).toContain('Your Store'); // Actualiza esto con el título esperado de tu página

  // Captura de pantalla

  await page.screenshot({path: '/Users/laclavees12345/Documentos/Projects/eC-Playwright/reports/screenshots/HomePage.jpg'});
});
