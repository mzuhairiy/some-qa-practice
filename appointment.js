Feature('Make Appointment');

Scenario('User want to make an appointment', ({ I }) => {
    I.amOnPage('https://katalon-demo-cura.herokuapp.com/');

    I.waitForElement('.text-vertical-center', 20);

    I.click('#menu-toggle');

    /* Login */
    I.click('Login');

    I.waitForElement('.text-vertical-center', 20);

    I.see('CURA Healthcare Service', 'h1');

    I.fillField('input[type=text][name=username]', 'John Doe');

    I.fillField('input[type=password][name=password]','ThisIsNotAPassword');

    I.click('#btn-login');

    I.waitForText('Make Appointment', 'h2');

    /* Make an Appointment */
    I.waitForText('Facility', 20);

    I.selectOption('facility', 'Seoul CURA Healthcare Center');

    I.checkOption('Apply');

    I.checkOption('Medicaid');

    I.click('.input-group-addon');

    I.waitForElement('.datepicker');

    I.click('tr:nth-child(3) > .day:nth-child(4)');

    // I.fillField('input[type=text][name=visit_date]', '25/11/2022'); //input manual from keyboard

    I.click('Comment');

    I.fillField('#txt_comment', 'I want to make an appointment for my cat.');

    I.click('#btn-book-appointment');

    I.waitForText('Appointment Confirmation', 'h2');

    I.click('.btn-default');

    /* History */

    I.see('CURA Healthcare Service', 'h1')

    I.click('#menu-toggle');

    I.click('History');

    I.see('History', 'h2');

    I.see('I want to make an appointment for my cat.')

    I.click('.btn-default');

    I.click('#menu-toggle');

    I.click('Profile');

    I.waitForText('Under construction.');

    I.click('.btn-default');

    I.see('CURA Healthcare Service', 'h1');
}); 