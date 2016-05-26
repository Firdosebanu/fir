export class PPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('p-app h1')).getText();
  }
}
