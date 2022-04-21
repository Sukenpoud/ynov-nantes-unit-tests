
const { expect } = require('@jest/globals');

const Item = require('./Item');
const db = require('../setup/db');
const mongoose = require('mongoose');


const itemData = {
  name: "testitem",
  date: "2022-04-21",
};

beforeAll(async () => {
  await db.setUp();
});

afterEach(async () => {
  await db.dropCollections();
});

afterAll(async () => {
  await db.dropDatabase();
});

describe("Item model", () => {
  it("create & save item successfully", async () => {
    const validItem = new Item(itemData);
    const savedItem = await validItem.save();
    // Object Name should be defined when successfully saved to MongoDB.
    expect(savedItem.name).toBeDefined();
    expect(savedItem.name).toBe(itemData.name);
    expect(savedItem.date).toBe(itemData.date);
  });

});
