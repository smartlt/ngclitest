import { NgclitestPage } from './app.po';

describe('ngclitest App', function() {
  let page: NgclitestPage;

  beforeEach(() => {
    page = new NgclitestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngclitest works!');
  });
});
