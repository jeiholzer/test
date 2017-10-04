/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
const async = require('async');
const bedrock = require('bedrock');
const database = require('bedrock-mongodb');
const uuid = require('uuid/v4');

// load config
require('./config');

console.log('hey there');
console.log('writeoptions' + JSON.stringify(database.writeOptions));

// open some collections once the database is ready
bedrock.events.on('bedrock-mongodb.ready', callback => async.auto({
  openCollections: callback =>
    database.openCollections(['mongodb_minimal'], callback)
}, err => callback(err)));

bedrock.events.on('bedrock.started', () => {
  const databaseEntryId = uuid();
  const databaseEntryData = 'This will work';
  const query = {databaseEntryId};
  async.auto({
    insert: callback =>
      database.collections.mongodb_minimal.insert({databaseEntryId,
        databaseEntryData}, callback),
    find: ['insert', (results, callback) => database.collections.mongodb_minimal
      .find(query).toArray((err, result) => {
        console.log('LOCAL-FIND', JSON.stringify(result, null, 2));
        callback();
      })]
  }, err => {
    console.log('An error occurred', err);
    bedrock.exit(err);
  });
});

bedrock.start();
