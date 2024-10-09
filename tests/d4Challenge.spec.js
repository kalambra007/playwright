import { test } from '@playwright/test';
const{sampleAppPage} = require('../models/sample-app.model')

test('buttonUpdate', async ({ page }) => {
    const app = new sampleAppPage(page)
    await app.navigatetoTextInput()
    await app.inputText("Babe")
    //await app.buttonUpdate()
    await app.expectedButtonText("Babe")
  });