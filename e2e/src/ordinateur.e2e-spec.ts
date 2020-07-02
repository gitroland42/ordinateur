import {browser, element, logging, by} from 'protractor';
import {OrdinateurPage} from './ordinateur.po';

describe('test des ordinateurs', () => {
  let nbOrdinateur:number;
  let page:OrdinateurPage;

  beforeEach(() => {
    page = new OrdinateurPage();
    browser.get('/ordinateur');
    });


    it('Recherche le lien d\'ajout et clique dessus', () => {
      // on compte le nombre de tr  (ligne de tableau)
        element.all(by.css('tr')).then(totalRows => {
        nbOrdinateur = totalRows.length;
        
        element(by.css('.addordi')).click();
        expect(browser.driver.getCurrentUrl()).toContain('/ordinateur/add');
        });
      });



  it('En tant qu\'utilisateur: je remplis le formulaire d\'ajout', () => {
   
    
      browser.get('/ordinateur/add');
      page.sleep();
      
      page.remplirFormulaire();
      page.sleep();
      
      let submitBtn = element.all(by.css('#submitBtn'));
      // On clique sur le bouton submit
      submitBtn.click().then(fn => {
      
      element.all(by.css('tr')).then(totalNewRows => {
      
      nbOrdinateur += 1;
     
      
      expect(totalNewRows.length).toEqual(nbOrdinateur);
      // page.sleep();
      });
      });
    });


});