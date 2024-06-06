// lig/api.js
export function getAllTags() {
    return getAllPosts(['tags'])
      .map(post => post.tags)
      .flat()
      .filter((e, i, a) => a.indexOf(e) === i)
  }

  // lig/api.js
export function getPostsByTag(tag, fields = []) {
    const posts = getAllPosts(fields).filter((post) => {
      return post.tags.map(t => t.toLowerCase()).indexOf(tag.toLowerCase()) > -1
    })
    return posts
  }