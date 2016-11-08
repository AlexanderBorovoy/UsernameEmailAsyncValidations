import { UsernameEmailAsyncValidationsPage } from './app.po';

describe('username-email-async-validations App', function() {
  let page: UsernameEmailAsyncValidationsPage;

  beforeEach(() => {
    page = new UsernameEmailAsyncValidationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
