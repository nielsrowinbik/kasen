import Link from 'next/link';
import { Popover } from '@headlessui/react';

export const FullScreenMenu = () => {
  return (
    <Popover>
      <Popover.Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Popover.Button>

      <Popover.Panel className="fixed z-10 inset-0 bg-white flex items-center justify-center">
        <Popover.Button className="fixed top-4 left-6 md:top-9 md:left-11 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Popover.Button>
        <nav className="prose prose-a:font-playfair prose-a:text-3xl grid gap-8 text-center prose-a:no-underline hover:prose-a:underline">
          <Link href="/">Home</Link>
          <Link href="/over">Over</Link>
          <Link href="/bekijk">Bekijk</Link>
          <Link href="/ruimten">Ruimten</Link>
          <Link href="/omgeving">Omgeving</Link>
        </nav>
      </Popover.Panel>
    </Popover>
  );
};
