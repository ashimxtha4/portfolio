import Link from 'next/link';
import { getPosts } from '@/app/lib/blog';
import { deleteBlogPost } from '@/app/actions/blog';
import './admin.scss';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
    const posts = await getPosts();

    return (
        <div className="container adminPage">
            <header>
                <h1>Blog Admin</h1>
                <Link href="/admin/new" className="newPostBtn">
                    + New Post
                </Link>
            </header>

            <div className="adminGrid">
                {posts.map((post) => (
                    <div key={post.id} className="adminCard">
                        <div className="info">
                            <h3>{post.title}</h3>
                            <span>{post.date}</span>
                        </div>
                        <div className="actions">
                            <Link href={`/admin/edit/${post.id}`}>
                                <button className="edit">Edit</button>
                            </Link>
                            <form action={deleteBlogPost.bind(null, post.id)}>
                                <button className="delete" type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
