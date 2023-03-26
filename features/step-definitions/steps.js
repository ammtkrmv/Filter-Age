const { Given, When, Then, And } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const ClientPage = require('../pageobjects/client.page');
const faker = require('@faker-js/faker');

Given("Users have accessed the login page", async () => {
    await browser.reloadSession();
    await LoginPage.open();
})

When("Users authenticate using the username {string} and password {string}", async (username, password) => {
    await LoginPage.inputUsername.waitForDisplayed();
    await LoginPage.inputUsername.setValue(username);
    await LoginPage.inputPassword.waitForDisplayed();
    await LoginPage.inputPassword.setValue(password);
    await LoginPage.btnSubmit.click();
})

Then("Users should access the dashboard page after logging in", async () => {
    await expect( ClientPage.logoutIcon).toBeDisplayed();
})

//Client Page Steps
Given("Users have accessed the client page", async () => {
    await browser.reloadSession();
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi')
    await expect( ClientPage.logoutIcon).toBeDisplayed();
    // await ClientPage.open();
})

When("Users click add client", async () => {
    await ClientPage.clickAddClient();
})

When("Users input client data", async () => {
    await ClientPage.inputSurname('surname');
    await ClientPage.inputUserName('username');
    await ClientPage.chooseGender('Мужской');
    await ClientPage.inputUserEmail(faker.faker.internet.email());
    await ClientPage.inputUserTelephone('88' + faker.faker.random.numeric(10));
    await ClientPage.inputUserBirth('2/2/1990');
})

When("Users click save button", async () => {
    await ClientPage.clickSaveButton();
})

When("Users click client data", async () => {
    await ClientPage.clickClientData();
})

When("Users change client data", async () => {
    await ClientPage.editUserSurname('UpdatedSurname')
})

Then("Users should see create success message", async () => {
    await browser.pause(2000);
    await expect(browser.getAlertText()).toHaveTextContaining('Пользователь успешно добавлен');
})

Then("Users should see update success message", async () => {
    await browser.pause(5000)
    await expect(browser.getAlertText()).toHaveTextContaining('Данные обновлены');
})

Then("Users should see client detail data", async () => {
    const text = $(`//*[contains(text(), 'Информация')]`);
    await text.waitForDisplayed();
    await expect(text).toHaveTextContaining('Информация');
})

Then("the website display client age", async () => {
    await expect(ClientPage.dataAgeClient).toBeDisplayed();
})