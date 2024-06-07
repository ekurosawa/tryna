import Date from '../components/date';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Year({ allYears }) {
    return (
        <Layout home>
            <Head>
                <title>タグ一覧</title>
            </Head>

            <h2>タグ一覧</h2>

            {allYears.map((year) => (
                <Link key={Link} href={`/year/${encodeURIComponent(year)}`}>
                    <a>{year}</a>
                </Link>
            ))}

        </Layout>
    )
}

export async function getStaticProps() {
    // Add the "await" keyword like this:
    const allYears = getAllYears();
    return {
        props: {
            allYears,
        },
    };
}