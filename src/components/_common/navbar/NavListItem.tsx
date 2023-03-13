import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavListItem = ({ text, url }: { text: string; url: string }) => {
  const router = useRouter();
  console.log(router.pathname === url);
  return (
    <Link href={url} className="p-2.5 group hover-underline-animation-parent">
      <li
        className={`hover-underline-animation after:from-purple-medium after:to-purple-darker dark:after:from-gray-200 dark:after:to-gray-400 after:bg-gradient-to-r text-base relative font-bold bg-gradient-to-br from-purple-medium bg-clip-text text-transparent to-purple-darker dark:from-gray-200 dark:to-gray-400 ${
          router.pathname === url
            ? 'active-underline-animation before:from-purple-medium before:to-purple-darker dark:before:from-gray-200 dark:before:to-gray-400 before:bg-gradient-to-r'
            : ''
        }`}
      >
        {text}
      </li>
    </Link>
  );
};
export default NavListItem;