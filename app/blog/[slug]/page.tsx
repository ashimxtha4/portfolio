import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '@/app/lib/blog';
import '../blog.scss';
import DOMPurify from 'isomorphic-dompurify';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container blogPage">
            <article className="singlePost">
                <header className="postHeader">
                    <span className="postDate">{post.date}</span>
                    <h1>{post.title}</h1>
                    {post.tags && (
                        <div className="tags">
                            {post.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                {post.image && (
                    <div className="featuredImage">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={800}
                            height={450}
                            priority
                        />
                    </div>
                )}

                <div
                    className="postContent"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                />

                <Link href="/blog" className="backLink">
                    ← Back to Blog
                </Link>
            </article>
        </div>
    );
}
