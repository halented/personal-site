'use client'
import Link from 'next/link';
import { getHref } from '../lib/helpers';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { buttonStyle } from '../lib/styles';

function CustomLink({ title, key }: { title: string, key: string }) {

    const href = getHref(title);
    const path = usePathname();

    if (href.startsWith('/')) {
        return (
            <Link key={title} href={href} className={clsx(buttonStyle, { 'shadow shadow-black': path === href })}>
                {title}
            </Link>
        );
    }
    else {
        return (
            <Link key={title} href={href} rel="noopener noreferrer" target="_blank" className={`cursor-alias ${buttonStyle}`}>
                {title}
            </Link>
        )
    }
}

export default CustomLink;
