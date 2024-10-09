const{test} = require('@playwright/test');
const {HomePage} = require('../models/home-page-model.js')

test('Navigate to Home Page', async({page}) => {
    const homepage = new HomePage(page)
    await homepage.navigateToHomePage();
}

)
