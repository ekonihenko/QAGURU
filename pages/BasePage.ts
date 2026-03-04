class BasePage {
  constructor(page) {
    this.page = page; //Сохр ссылку на стр PW
  }

  //Базовы простые методы которые исп PW
  //Ожидание полной загр стр , когда нет активных запросов)- мой собственный метод
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle'); //метод pw , строковый параметр
  }

  //Ожидание появления элемента на стр
  async waitForElement(selector, timeout = 10000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  //Click on element
  async clickElement(selector) {
    await this.page.click(selector);
  }

  //Fill input
  async fillInput(selector, text) {
    await this.page.fill(selector, text);
  }

  //Get text from elements
  async getText(selector) {
    return await this.page.textContent(selector);
  }

  //Check visible element
  async isElementVisible(selector) {
    return await this.page.isVisible(selector);
  }

  //Go to URL with waiting full load
  async goto(url) {
    await this.page.goto(url);
    await this.waitForPageLoad();
  }
}
