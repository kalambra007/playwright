const{expect} = require('@playwright/test');
const {HomePage} = require('../models/home-page-model')
exports.HomePage = class HomePage{
    constructor(page){
        this.page = page
        this.homePageURL = page.goto('./home')
    }
    async navigateToHomePage(){
        await this.homePageURL
    }
} 