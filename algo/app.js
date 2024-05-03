const searchClient = algoliasearch(
    "HRST160B7P", // APP ID
    "ce9fc76ff0661c1d8a523e4d26a97e66" // Search Only API Key
  );
  
  const search = instantsearch({
    indexName: "demo_ecommerce",
    searchClient
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: "#searchbox",
      placeholder: "検索してみましょう"
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: "#hits",
      templates: {
        item: data => `
        <img src="${data.image}"/>
          <div>
            <div class="hit-title">
              <h4>${instantsearch.highlight({
                attribute: "title",
                hit: data
              })}</h4>
              <div class="price">$${data.price}</div>
            </div>
          <p>${instantsearch.highlight({
            attribute: "description",
            hit: data
          })}</p>
        </div>
        `,
        empty: "<h1>ヒット無し</h1>"
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: "#title",
      attribute: "title",
      searchable: true,
      searchablePlaceholder: "記事名で検索"
    })
  );

  search.addWidget(
    instantsearch.widgets.rangeInput({
      container: "#tag",
      attribute: "tag"
    })
  );

  search.start();