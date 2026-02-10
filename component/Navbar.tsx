'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '@/public/ASHIM-remove.png';
import { Icon } from '@iconify/react';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Works', href: '/works' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="navigation">
            <div className="container">
                <div className="logo">
                    <Image className="logoImg" src={logo} alt="logo" />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobileToggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="28" height="28" />
                </button>

                {/* Navigation Links */}
                <div className={`routes ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`navLink ${isActive ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        className="letsTalk mobile-only"
                        href="./Ashim-resume.pdf"
                        target="_blank"
                        download=""
                        onClick={() => setIsOpen(false)}
                    >
                        {"Download Resume"}
                    </Link>
                </div>

                <Link className="letsTalk desktop-only" href="./Ashim-resume.pdf" target="_blank" download="">
                    {"Download Resume"}
                </Link>
            </div>
        </header>
    );
}
