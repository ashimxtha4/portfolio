'use server';

import { createPost, deletePost, updatePost } from '@/app/lib/blog';
import { NewBlogPost } from '@/types/blog';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBlogPost(formData: FormData) {
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const image = formData.get('image') as string;
    const tagsString = formData.get('tags') as string;

    const tags = tagsString ? tagsString.split(',').map(t => t.trim()) : [];

    const newPost: NewBlogPost = {
        title,
        slug,
        excerpt,
        content,
        image,
        tags
    };

    await createPost(newPost);
    revalidatePath('/blog');
    revalidatePath('/admin');
    redirect('/admin');
}

export async function updateBlogPost(id: string, formData: FormData) {
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const image = formData.get('image') as string;
    const tagsString = formData.get('tags') as string;

    const tags = tagsString ? tagsString.split(',').map(t => t.trim()) : [];

    await updatePost(id, {
        title,
        slug,
        excerpt,
        content,
        image,
        tags
    });

    revalidatePath('/blog');
    revalidatePath('/admin');
    redirect('/admin');
}

export async function deleteBlogPost(id: string) {
    await deletePost(id);
    revalidatePath('/blog');
    revalidatePath('/admin');
}
