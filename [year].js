import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAllPosts, getAllTags, getAllYears } from '~/lib/api'
import Layout from '~/components/Layout'

export default function YearlyPosts({ allPosts, allTags, allYears }) {
  const router = useRouter()
  return (
    <Layout tags={allTags} years={allYears}>
      <Head>
        <title>{router.query.year} | 110chang.com</title>
      </Head>
      <h1>{router.query.year}</h1>
      {allPosts.length > 0 && allPosts.map((post) => (
        <div key={post.date}>
          <h1><Link href={`/posts/${post.category}/${post.slug}`}>{post.title}</Link></h1>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
    'categories',
  ])

  return {
    props: {
      allPosts: allPosts.map(post => ({
        ...post,
        category: post.categories ? post.categories[0] : 'diary',
      })),
      allTags: getAllTags(),
      allYears: getAllYears(),
    },
  }
}


export async function getStaticPaths() {
  const years = getAllYears()
  return {
    paths: years.map(year => {
      return {
        params: {
          year: year.id,
        },
      }
    }),
    fallback: false,
  }
}