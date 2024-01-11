'use client'
import Link from 'next/link';
import { getHref } from '../lib/helpers';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

function CustomLink({ title, key }: { title: string, key: string }) {

    const href = getHref(title);
    const path = usePathname();
    if (href.startsWith('/')) {
        return (
            <Link key={title} href={href} className={clsx('hover:bg-sky-100', { 'bg-sky-50': path === href })}>
                {title}
            </Link>
        );
    }
    else {
        return (
            <Link key={title} href={href} rel="noopener noreferrer" target="_blank" className={clsx('cursor-alias hover:bg-sky-100', { 'bg-sky-50': path === href})}>
                {title}
            </Link>
        )
    }
}

export default CustomLink;
