import { GreatThingsPage } from './app.po';

describe('great-things App', () => {
  let page: GreatThingsPage;

  beforeEach(() => {
    page = new GreatThingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
