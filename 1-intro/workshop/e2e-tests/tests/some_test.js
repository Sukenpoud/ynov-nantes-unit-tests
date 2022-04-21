Feature('Ynov Nantes');

Scenario('Test Ynov Nantes Land Page', ({ I }) => {
    I.amOnPage('https://www.ynov-nantes.com/');
    I.amOnPage('https://www.ynov-nantes.com/recherche/');
    I.click('#s');
    I.appendField('#s', 'info');
    I.waitForText('Bachelor Informatique');
});
