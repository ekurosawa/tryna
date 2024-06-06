// lig/api.js
export function getAllTags() {
    return getAllPosts(['tags'])
      .map(post => post.tags)
      .flat()
      .filter((e, i, a) => a.indexOf(e) === i)
  }