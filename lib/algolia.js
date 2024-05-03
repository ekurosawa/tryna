const client = algoliasearch('HRST160B7P', 'ce9fc76ff0661c1d8a523e4d26a97e66');
const index = client.initIndex('contacts');

// Search for "query string" in the index "contacts"
index.search('query string').then(({ hits }) => {
  console.log(hits);
});

// Perform the same search, but only retrieve 50 results
// Return only the attributes "firstname" and "lastname"
index.search('query string', {
  attributesToRetrieve: ['firstname', 'lastname'],
  hitsPerPage: 50,
}).then(({ hits }) => {
  console.log(hits);
});