import { browser, by, element } from 'protractor';

export class ComputerPage {
  sleep() {
    browser.driver.sleep(5000);
  }
  completeForm() {
    let modele = element.all(by.id('modele'));
    let marque = element.all(by.id('inputRadio1-Dell'));
    let type = element.all(by.id('type'));
    let category = element.all(by.id('inputRadio2-Gaming'));
    let prixAchat = element.all(by.name('achat'));
    let prixVente = element.all(by.name('vente'));

    modele.sendKeys('e2e ADD TEST');
    marque.click();
    type.sendKeys('Portable');
    category.click();
    prixAchat.sendKeys('666');
    prixVente.sendKeys('666');
  }
}
