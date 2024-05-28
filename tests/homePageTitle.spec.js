// test/homePageTitle.spec.js
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Verify home page title', async ({ page }) => {
  // Crear una instancia de la página principal
  const homePage = new HomePage(page);

  // Navegar a la página principal
  await homePage.goto();

  // Obtener el título de la página
  const title = await homePage.getTitle();

  // Verificar que el título sea el esperado
  expect(title).toContain('Your Store'); // Actualiza esto con el título esperado de tu página
});
