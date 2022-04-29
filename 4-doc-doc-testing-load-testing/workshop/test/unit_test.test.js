const { expect } = require('@jest/globals');
const mongoose = require('mongoose');
const ToDo = require('../toDoModel.js').ToDo;

// TESTS UNITAIRES
describe("Tests unitaires sur modèle ToDo", function() {
    it('Create a ToDo model', () => {
      const todo = new ToDo({
        text: 'Faire les courses'
      });
      expect(todo.text).toBe('Faire les courses');
      expect(todo.done).toBe(false);
    });
  
    it('Update done satus', async () => {
      const todo = new ToDo({
        text: 'Faire les courses'
      });
      todo.done = true;
      
      expect(todo.done).toBe(true);
    });
  });