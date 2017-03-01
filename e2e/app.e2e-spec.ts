import { NgUnivPage } from './app.po';

describe('ng-univ App', () => {
  let page: NgUnivPage;

  beforeEach(() => {
    page = new NgUnivPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
