import { test } from '@playwright/test';
const{sampleAppPage} = require('../models/sample-app.model')

test.describe.parallel('alltest', () => {

  test('login', async ({ page }) => {
    const app = new sampleAppPage(page)
    await app.navvigatetoSampleApp()
    await app.fillUsernameField("Jon")
    await app.fillPasswordField('pwd')
    await app.clickLoginbutto()
    await app.expectedLoginText("Welcome, Jon!")
  });

  test('logout', async({page}) =>
  {
    const app = new sampleAppPage(page)
    await app.navvigatetoSampleApp()
    await app.fillUsernameField("Jon")
    await app.fillPasswordField('pwd')
    await app.clickLoginbutto()
    await app.expectedLoginText("Welcome, Jon!")
    await app.clickLogoutbutton()
    await app.expectedLoginText("User logged out.")
  });

  test('wrongPass', async({page}) =>
    {
      const app = new sampleAppPage(page)
      await app.navvigatetoSampleApp()
      await app.fillUsernameField("Jon")
      await app.fillPasswordField('ee')
      await app.clickLoginbutto()
      await app.expectedLoginText("Invalid username/password")
    });

    test('noUname', async({page}) =>
      {
        const app = new sampleAppPage(page)
        await app.navvigatetoSampleApp()
        await app.fillUsernameField("")
        await app.fillPasswordField('ee')
        await app.clickLoginbutto()
        await app.expectedLoginText("Invalid username/password")
      });
  });