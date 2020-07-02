import { browser, by, element } from 'protractor';

export class OrdinateurPage{
  

  sleep() {
    browser.driver.sleep(5000);
    }

  remplirFormulaire() {
    
      let modele=element.all(by.id('modele'));
      let marque=element.all(by.className('marque'));
      let type=element.all(by.className('type'));
      let categorie=element.all(by.className('categ'));
      //let pachat=element.all(by.className('pachat'));
     // let pvente=element.all(by.className('pvente'));
  
      modele.sendKeys('ajout e2e');
      marque.sendKeys('Dell');
      type.sendKeys('Fixe');
      categorie.sendKeys('Bureautique');
      //pachat.sendkeys(600);
      //pvente.sendkeys(600);
      
    }
  

}