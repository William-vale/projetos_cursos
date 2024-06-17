import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Home({ posts, globalData }) {
    return(
        <Layout>
            <SEO title={globalData.name} description={globalData.blogTitle} />
            <Header name={globalData.name}/>
            <main className="w-full">
                <h1 className="text-3xl lg:text-5xl text-center mb-12">
                    {globalData.blogTitle}
                </h1>
                <ul className="w-full">
                    {posts.map((posts) => (
                        <li key={posts.id} className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
                            <Link as={`/posts/${post.id}`} href={`/posts/${post.id}`}> 
                            
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </Layout>
    );
}

export async function getServerSideProps() {
    const posts = await getPosts();
    const globalData = getGlobalData()
  
  
    return { props: { posts, globalData } };
  }