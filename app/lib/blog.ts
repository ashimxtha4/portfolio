import fs from 'fs/promises';
import path from 'path';
import { BlogPost, NewBlogPost } from '@/types/blog';

const dataFile = path.join(process.cwd(), 'data', 'posts.json');

export async function getPosts(): Promise<BlogPost[]> {
    try {
        const data = await fs.readFile(dataFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await getPosts();
    return posts.find((post) => post.slug === slug);
}

export async function createPost(post: NewBlogPost): Promise<BlogPost> {
    const posts = await getPosts();
    const newPost: BlogPost = {
        ...post,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
    };
    posts.push(newPost);
    await fs.writeFile(dataFile, JSON.stringify(posts, null, 2));
    return newPost;
}

export async function updatePost(id: string, updatedPost: Partial<BlogPost>): Promise<BlogPost | null> {
    const posts = await getPosts();
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) return null;

    posts[index] = { ...posts[index], ...updatedPost };
    await fs.writeFile(dataFile, JSON.stringify(posts, null, 2));
    return posts[index];
}

export async function deletePost(id: string): Promise<void> {
    const posts = await getPosts();
    const filteredPosts = posts.filter((p) => p.id !== id);
    await fs.writeFile(dataFile, JSON.stringify(filteredPosts, null, 2));
}
