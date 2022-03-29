import * as newman from 'newman';
// call newman.run to pass `options` object and wait for callback
newman.run(
  {
    collection: require('./postman_collection.json'),
    reporters: 'cli',
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log('collection run complete!');
  }
);
