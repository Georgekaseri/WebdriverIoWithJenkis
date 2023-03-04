describe('Demo', function () {

    it('My first test', async () => {

        browser.url('http://facebook.com');
        browser.pause(50000);

        await $('#email').setValue('anpch@example.com');
        await $('#pass').setValue('123456');
        browser.keys(['Enter']);

        // await $('[name="login"]').click();


    })

})
