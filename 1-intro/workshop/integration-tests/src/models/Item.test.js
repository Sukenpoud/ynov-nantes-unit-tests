const { expect } = require('@jest/globals');
const Item = require('./Item.js');
const mongoose = require('mongoose');

describe("Test Item model", () => {

  beforeAll(async () => {
    await mongoose.connect('mongodb://mongo:27017/docker-node-mongo-test', { useNewUrlParser: true });
    return Item.deleteMany({});
  });
  
  afterEach(() => {
    return Item.deleteMany({});
  });
  
  afterAll(() => {
    return mongoose.connection.close({});
  });

  it("create & save item successfully", async () => {
    const validItem = new Item({name: 'patoche'});

    const savedItem = await validItem.save();

    const findItem = await Item.findOne({name: 'patoche'});

    expect(savedItem.name).toBeDefined();

    expect(savedItem.name).toBe(validItem.name);
  });

});