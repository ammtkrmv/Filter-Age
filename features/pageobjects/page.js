module.exports = class Page {

    get buttonYes (){
        return $('//button//span[contains(text(), "Да")]')
    }

    get buttonNo (){
        return $('//button//span[contains(text(), "Нет")]')
    }

    async expectAlert(message){
        expect(await browser.getAlertText()).toHaveTextContaining(message);
    }

    async expectText(message){
        const text = $(`//*[contains(text(), '${message}')]`);
        await text.waitForDisplayed();
        expect(await text).toHaveTextContaining(message);
    }

    async expectTextNotDisplayed(message){
        const text = $(`//*[contains(text(), '${message}')]`);
        expect(await text).not.toBeDisplayed()
    }

    open (path) {
        return browser.url(`http://167.114.201.175:5000/${path}`)
    }
}
