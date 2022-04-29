const { expect } = require('@jest/globals');
const mongoose = require('mongoose');
const ToDo = require('../toDoModel.js').ToDo;
const bodyParser = require("body-parser");
const express = require("express");


beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/toDoApp', { useNewUrlParser: true });
  return ToDo.deleteMany({});
});

afterEach(() => {
  return ToDo.deleteMany({});
});

afterAll(() => {
  return mongoose.connection.close({});
});

// TESTS D'INTEGRATION
describe("Test ToDo model", () => {

  it("Create & save ToDo successfully", async () => {
    const validTodo = new ToDo({
      text: 'Test on ToDo Model'
    });
    const savedTodo = await validTodo.save();
    const findTodo = await ToDo.findOne({text: 'Test on ToDo Model'});

    expect(savedTodo.text).toBeDefined();
    expect(savedTodo.text).toBe(validTodo.text);
  });

  it('Update ToDo successfully', async () => {
    const todo = new ToDo({
      text: 'COUCOU'
    });

    let savedTodo = await todo.save();
    const findTodo = await ToDo.findOne({text: 'COUCOU'});
    findTodo.done = true;
    savedTodo = await findTodo.save();

    expect(findTodo.done).toBe(true);
});

});