'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    // Hardcoded credentials for now
    // In a real app, check against a database or environment variables
    if (username === 'admin' && password === 'admin123') {
        const cookieStore = await cookies();

        // Set a session cookie
        cookieStore.set('admin_session', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });

        redirect('/admin');
    }

    return { error: 'Invalid username or password' };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('admin_session');
    redirect('/login');
}
