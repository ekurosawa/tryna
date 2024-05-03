// generate_algolia_index.js
const contentful = require("contentful-management");
const removeMd = require("remove-markdown");

(async () => {
  const client = contentful.createClient({
    accessToken: process.env.ACCESS_TOKEN,
  });

  const space = await client.getSpace(process.env.SPACE_ID);
  const master = await space.getEnvironment("master");

  const entries = await master.getEntries({
    content_type: "blogPost",
    limit: 1000,
  });

  const algoliaIndexes = entries.items.map((entry) => {
    const indexFields = {
      url: `/posts/${entry.fields.slug["ja-JP"]}`,
      title: entry.fields.title["ja-JP"],
      content: removeMd(entry.fields.body["ja-JP"]),
      objectID: entry.sys.id,
    };

    if (entry.fields.description) {
      indexFields.description = entry.fields.description["ja-JP"];
    }
    return indexFields;
  });

  console.log(JSON.stringify(algoliaIndexes, null, 2));
})();