'use client';

import { useState } from 'react';
import { createBlogPost, updateBlogPost } from '@/app/actions/blog';
import { BlogPost } from '@/types/blog';
import Link from 'next/link';
import '@/app/admin/admin.scss';
import RichTextEditor from './RichTextEditor';

interface PostFormProps {
    post?: BlogPost;
}

export default function PostForm({ post }: PostFormProps) {
    const isEditing = !!post;
    const action = isEditing ? updateBlogPost.bind(null, post.id) : createBlogPost;
    const [content, setContent] = useState(post?.content || '');

    return (
        <div className="container adminPage">
            <div className="editorForm">
                <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <h2>{isEditing ? 'Edit Post' : 'New Post'}</h2>
                </header>

                <form action={action}>
                    <div className="formGroup">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            defaultValue={post?.title}
                            required
                            placeholder="Post Title"
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="slug">Slug</label>
                        <input
                            type="text"
                            name="slug"
                            id="slug"
                            defaultValue={post?.slug}
                            required
                            placeholder="url-friendly-slug"
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            id="image"
                            defaultValue={post?.image}
                            placeholder="/images/example.jpg"
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="excerpt">Excerpt</label>
                        <textarea
                            name="excerpt"
                            id="excerpt"
                            defaultValue={post?.excerpt}
                            required
                            style={{ minHeight: '100px' }}
                            placeholder="Short summary..."
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="content">Content</label>
                        <RichTextEditor value={content} onChange={setContent} />
                        <input type="hidden" name="content" value={content} />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="tags">Tags (comma separated)</label>
                        <input
                            type="text"
                            name="tags"
                            id="tags"
                            defaultValue={post?.tags?.join(', ')}
                            placeholder="react, nextjs, design"
                        />
                    </div>

                    <div className="formActions">
                        <button type="submit">
                            {isEditing ? 'Update Post' : 'Create Post'}
                        </button>
                        <Link href="/admin">
                            <button type="button">Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
