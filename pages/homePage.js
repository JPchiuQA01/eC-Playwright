// pages/HomePage.js
class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('/');
    }
  
    async getTitle() {
      return await this.page.title();
    }
  
    async clickLoginLink() {
        // <a href="https://opencart.abstracta.us:443/index.php?route=account/login">Login</a>
        await this.page.click('a[href="https://opencart.abstracta.us:443/index.php?route=account/login"]');
    }
  
    // Puedes continuar agregando más métodos para interactuar con otros elementos de la página
  }
  
  module.exports = HomePage;
  