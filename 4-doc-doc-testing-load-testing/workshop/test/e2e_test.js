const URL = `http://localhost:3333/`;

Feature('ToDo App');

Scenario('Test to create a ToDo', ({ I }) => {
    I.amOnPage(URL);
    I.click('#newTODO');
    I.appendField('#newTODO', 'Blo');
    I.click('#create-todo');
    I.waitForText('Blo', 5);
});

Scenario('Test to delete a ToDo', ({ I }) => {
    I.amOnPage(URL);
    I.see('Blo', '#todo-body');
    I.click('Done');
    I.wait(2);
    I.see('Blo', '#done-body');
});
