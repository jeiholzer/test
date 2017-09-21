/*
 * Copyright (c) 2015-2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
const database = require('bedrock-mongodb');

console.log('Got to 0');

// custom atabase configuration
bedrock.config.mongodb.name = 'mongodb-minimal'; // default: bedrock_dev
bedrock.config.mongodb.host = 'localhost';      // default: localhost
bedrock.config.mongodb.port = 27017;            // default: 27017
bedrock.config.mongodb.username = 'bedrock'; // default: bedrock
bedrock.config.mongodb.password = 'password';   // default: password

// enable local collection if a local database is available
bedrock.config.mongodb.local.enable = true;

console.log('Got to 1');

// open some collections once the database is ready
bedrock.events.on('bedrock-mongodb.ready', function(callback) {
  database.openCollections(['collection1', 'collection2'], function(err) {
    console.log('Got to 2');
    if(err) {
      console.log('Got to 3');
      return callback(err);
    }
    console.log('Got to 4');
    // do something with the open collection(s)
    database.collections.collection1.find({id: 'foo'}, function(err, result) {
      if(err) {
        console.log('Got to 5');
        return callback(err);
      }
      console.log('result', result);
      callback();
    });
  });
});
