Feature('Login');

Scenario('Login with Correct Credential', ({ I }) => {
    
    I.amOnPage('https://katalon-demo-cura.herokuapp.com/');

    I.waitForElement('.text-vertical-center', 20);
    
    I.click('#menu-toggle');
    
    I.click('Login');
    
    I.waitForElement('.text-vertical-center', 20);
    
    I.see('CURA Healthcare Service', 'h1');
    
    I.fillField('input[type=text][name=username]', 'John Doe');
    
    I.fillField('input[type=password][name=password]', 'ThisIsNotAPassword');
    
    I.click('#btn-login');
    
    I.waitForText('Make Appointment', 'h2');

});
