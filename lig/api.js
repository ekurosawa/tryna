// lib/api.js
export function getAllYears() {
  const allDates = getAllPosts(['date'])
  return allDates
    .map(post => post.date.split('.')[0])
    .filter((e, i, a) => a.indexOf(e) === i)　// [2005, 2006, 2007, ... 2016]
    .map((year) => {
      return {
        id: year,
        text: year,
        count: allDates.filter(post => post.date.match(new RegExp(`^${year}`))).length
      }
    })
}

// lib/api.js
export function getAllMonths() {
    const allDates = getAllPosts(['date'])
    return allDates
      .map(post => ({
        year: post.date.match(/^\d{4}/)[0],
        month: post.date.match(/^\d{4}\-(\d{1,2})/)[1],
      }))
      .filter((e, i, a) => a.indexOf(e) === i)
      .map((post) => {
        const id = `${post.year}-${post.month}`
        return {
          ...post,
          id,
          text: `${post.year}.${post.month}`,
          count: allDates.filter(post => post.date.match(new RegExp(`^${id}`))).length
        }
      })
  }
  
  export function getPostsByMonth(year, month, fields = []) {
    const posts = getAllPosts(fields).filter((post) => {
      return (new RegExp(`^${year}\-${month}`)).test(post.date)
    })
    return posts
  }
