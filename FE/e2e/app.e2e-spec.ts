import { FEPage } from './app.po';

describe('fe App', function() {
  let page: FEPage;

  beforeEach(() => {
    page = new FEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
