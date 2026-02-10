export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    image?: string;
    tags?: string[];
}

export type NewBlogPost = Omit<BlogPost, 'id' | 'date'>;
