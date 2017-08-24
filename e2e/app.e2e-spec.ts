import { CloudAppPage } from './app.po';

describe('cloud-app App', function() {
  let page: CloudAppPage;

  beforeEach(() => {
    page = new CloudAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
