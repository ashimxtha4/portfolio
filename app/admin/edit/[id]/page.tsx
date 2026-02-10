import { getPosts } from '@/app/lib/blog';
import PostForm from '@/component/PostForm';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: PageProps) {
    const { id } = await params;
    const posts = await getPosts();
    const post = posts.find(p => p.id === id);

    if (!post) {
        notFound();
    }

    return <PostForm post={post} />;
}
