import {browser, by, element, logging} from 'protractor';
import { ComputerPage } from './computer.po';

describe('computers test', () => {
  let page: ComputerPage;
  let nbLineInit: number;

  beforeEach(() => {
    page = new ComputerPage();
    browser.get('/dashboard');
  });

  it('add line through add link', () => {
    element.all(by.css('.computerRow')).then(totalRows => {
      this.nbLineInit = totalRows.length;
    });
    element.all(by.css('#addComputerBtn')).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('/dashboard/add');
  });

  it('completeForm then back to dashboard', () => {
    browser.get('/dashboard/add');
    page.completeForm();
    element.all(by.id('submitBtn')).click();
    page.sleep();
    expect(browser.driver.getCurrentUrl()).toContain('/dashboard');
  });


  it('check lines', () => {
    element.all(by.css('.computerRow')).then(totalRows => {
      this.nbLineInit += 1;
      expect(totalRows.length).toEqual(this.nbLineInit);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });


});
