import { browser, element, by, Key } from 'protractor';
import {} from 'jasmine';

export class NgHomePage {
  navigateTo() {
    // Navigate to the home page of the app
    return browser.get('localhost:4200');
  }

  getHeadingText() {
    // Get the home page heading element reference
    return element(by.css('app-root h1')).getText();
  }
  
}

