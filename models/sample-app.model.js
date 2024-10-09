// @ts-check
const{expect} = require('@playwright/test');

exports.sampleAppPage = class sampleAppPage{
    constructor(page){
    this.page = page
    this.sampleAppURL = page.goto('./sampleapp')
    //this.inputTextURL = page.goto('./textinput')
    this.userNameField = page.getByPlaceholder('User Name')
    this.passwordField = page.getByPlaceholder('********')
    this.loginButton = page.getByRole('button', { name: 'Log In' })
    this.logoutButton = page.getByRole('button', { name: 'Log out' })
    this.loginText = page.locator("#loginstatus")
    this.fieldText = page.locator("#newButtonName")
    this.buttonText = page.locator("#updatingButton")
    }

    async navvigatetoSampleApp(){
       await this.sampleAppURL
    }

    async navigatetoTextInput(){
        //await this.inputTextURL
    }

    async fillUsernameField(username){
        await this.userNameField.fill(username)
    }

    async fillPasswordField(password){
        await this.passwordField.fill(password)
    }

    async clickLogoutbutton(){
        await this.logoutButton.click();
    }

    async clickLoginbutto(){
        await this.loginButton.click();
    }

    async expectedLoginText(text){
        await expect(this.loginText).toHaveText(text)
    }

    async inputText(textdata){
        await this.fieldText.fill(textdata)
    }

   /* async buttonUpdate(){
        await this.buttonText.click();
    }*/

    async expectedButtonText(textbutton){
        await this.buttonText.click();
        await expect(this.buttonText).toHaveText(textbutton)
    }
    
}