import Date from '../components/date';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Tag({ allTags }) {
  return (
    <Layout home>
      <Head>
        <title>ã¿ã°ä¸è¦§</title>
      </Head>

      <h2>ã¿ã°ä¸è¦§</h2>

      {allTags.map((tag) => (

        <Link key={Link} href={`/tag/${encodeURIComponent(tag)}`}>
          <a>{tag}</a>
        </Link>
      ))}

    </Layout>
  )
}

export async function getStaticProps() {
  // Add the "await" keyword like this:
  const allTags = getAllTags();
  return {
    props: {
      allTags,
    },
  };
}