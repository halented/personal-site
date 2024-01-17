'use client'
import Link from 'next/link';
import { getHref } from '../lib/helpers';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { navButtonStyle } from '../lib/styles';
import { useUrl } from 'nextjs-current-url';
import { useEffect } from 'react';

function CustomLink({ title, key }: { title: string, key: string }) {

    const href = getHref(title);
    // const path = usePathname();  <--this doesn't work to check which link should be highlighted because we are using hash-links to navigate within the page
    const { href: currentUrl } = useUrl() ?? {};

    const isActive = () => {
        // this logic is sound BUT, isActive is not triggered to run again unless the page is hard-refreshed, so whatever we load into evaluates as the active link regardless of if you click around
        if (currentUrl) {
            const segments = currentUrl.split('/')
            const compareUrl = segments[segments.length-1]

            if (compareUrl === '' && href === '/') {
                return true
            }
            else if (`/${compareUrl}` === href) {
                return true
            }
        }
        else if(href === '/') {
            return true;
        }
        else return false
    }
    //isActive() 

    useEffect(() => {
        console.log('currentUrl changed: ', currentUrl);
        // currentUrl does not get updated when user clicks a new link, only on hard refresh
    }, [currentUrl])

    if (href.startsWith('/')) {
        return (
            <Link key={title} href={href} className={clsx(navButtonStyle, { 'text-sky-300': isActive()})}>
                {title}
            </Link>
        );
    }
    else {
        return (
            <Link key={title} href={href} rel="noopener noreferrer" target="_blank" className={`cursor-alias ${navButtonStyle}`}>
                {title}
            </Link>
        )
    }
}

export default CustomLink;
