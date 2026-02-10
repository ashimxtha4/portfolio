'use client';

import { useActionState } from 'react';
import { login } from '@/app/actions/auth';
import './login.scss';

export default function LoginPage() {
    const [state, action, isPending] = useActionState(login, undefined);

    return (
        <div className="container loginPage">
            <div className="loginCard">
                <h1>Admin Login</h1>
                <form action={action}>
                    <div className="formGroup">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    {state?.error && <p className="error">{state.error}</p>}
                    <button type="submit" disabled={isPending}>
                        {isPending ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}
