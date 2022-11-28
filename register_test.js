Feature('As a user, I want create a new account');

Scenario('User create an account with male gender', ({ I }) => {
    I.amOnPage('https://en-gb.facebook.com/reg/');
    I.fillField('input[type=text][name=firstname]', 'Muhammad');
    I.fillField('input[type=text][name=lastname]', 'Zuhairi');
    I.fillField('input[type=text][name=reg_email__]', 'atasnamazuhair@gmail.com');
    I.wait('input[type=text][name=reg_email_confirmation__]');
    I.fillField('input[type=text][name=reg_email_confirmation__]', 'atasnamazuhair@gmail.com');
    I.fillField('input[type=password][name=reg_passwd__]', '@ayam234');
    I.click('#day');
    I.selectOption('#day', '15');
    I.click('#month');
    I.selectOption('#month', 'Mar');
    I.click('#year');
    I.selectOption('#year', '2000');
    I.click('xpath=//span[2]/label');
    I.click('._6j');
    I.waitForText('Enter the code from your email', 20);
});

Scenario('User create an account with female gender', ({ I }) => {
    I.amOnPage('https://en-gb.facebook.com/reg/');
    I.fillField('input[type=text][name=firstname]', 'Weni');
    I.fillField('input[type=text][name=lastname]', 'Tasya');
    I.fillField('input[type=text][name=reg_email__]', 'atasnamazuhair@weni.com');
    I.wait('input[type=text][name=reg_email_confirmation__]');
    I.fillField('input[type=text][name=reg_email_confirmation__]', 'atasnamazuhair@weni.com');
    I.fillField('input[type=password][name=reg_passwd__]', '@ayam234');
    I.click('#day');
    I.selectOption('#day', '15');
    I.click('#month');
    I.selectOption('#month', 'Mar');
    I.click('#year');
    I.selectOption('#year', '2000');
    I.click('xpath=//label');
    I.click('._6j');
    I.waitForText('Enter the code from your email', 20);
});

Scenario('User create an account with custom gender', ({ I }) => {
    I.amOnPage('https://en-gb.facebook.com/reg/');
    I.fillField('input[type=text][name=firstname]', 'Poespa');
    I.fillField('input[type=text][name=lastname]', 'Mayang');
    I.fillField('input[type=text][name=reg_email__]', 'atasnamazuhair@weni.com');
    I.wait('input[type=text][name=reg_email_confirmation__]');
    I.fillField('input[type=text][name=reg_email_confirmation__]', 'atasnamazuhair@weni.com');
    I.fillField('input[type=password][name=reg_passwd__]', '@ayam234');
    I.click('#day');
    I.selectOption('#day', '15');
    I.click('#month');
    I.selectOption('#month', 'Mar');
    I.click('#year');
    I.selectOption('#year', '2000');
    I.click('xpath=//span[3]/label');
    I.click('._7-16');
    I.selectOption('._7-16', '1');
    I.fillField('custom_gender', 'Cat');
    I.click('._6j');
    I.waitForText('Enter the code from your email', 20);
});
