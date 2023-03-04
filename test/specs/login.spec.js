const loginPage = require("../pages/login.page");

describe('Demo app', () => {

    it('Login Test', async()=>{
        browser.url('https://the-internet.herokuapp.com/login');
        await loginPage.loginG('tomsmith', 'SuperSecretPassword!')
        await loginPage.checkLoginMessage('You logged into a secure area!')

    })
});