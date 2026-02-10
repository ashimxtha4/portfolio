import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/app/lib/blog';
import './blog.scss';

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic';

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="container blogPage">
            <header className="pageHeader">
                <span className="subHead">Latest Updates</span>
                <h1 className="title">My Thoughts & Writings</h1>
            </header>

            <div className="blogGrid">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <article key={post.id} className="blogCard">
                            <Link href={`/blog/${post.slug}`} className="imageWrapper">
                                <Image
                                    src={post.image || '/decor.svg'}
                                    alt={post.title}
                                    width={400}
                                    height={250}
                                    className="postImage"
                                />
                            </Link>
                            <div className="content">
                                <span className="date">{post.date}</span>
                                <h2 className="postTitle">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="excerpt">{post.excerpt}</p>
                                {post.tags && (
                                    <div className="tags">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))
                ) : (
                    <p className="noPosts">No posts found.</p>
                )}
            </div>
        </div>
    );
}
