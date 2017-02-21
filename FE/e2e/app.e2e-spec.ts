import { FE1Page } from './app.po';

describe('fe1 App', function() {
  let page: FE1Page;

  beforeEach(() => {
    page = new FE1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
