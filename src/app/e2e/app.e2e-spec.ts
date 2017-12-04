// app.e2e-spec.ts
import { NgHomePage } from './app.po';

describe('ng-HomePage App', function() {
  let page: NgHomePage;

  beforeEach(() => {
    page = new NgHomePage();
  });

  it('should display heading saying HFU Angular Projekt', () => {
    page.navigateTo();
    expect<any>(page.getHeadingText()).toEqual('HFU Angular Projekt');
  });
});