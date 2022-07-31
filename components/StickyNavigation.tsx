import Link from 'next/link';

const StickyNavigation = () => (
  <nav className="absolute top-0 left-0 right-0 flex justify-between items-center z-10 py-4 text-white sm:m-5">
    {/* TODO: Refactor to Radix Popover https://www.radix-ui.com/docs/primitives/components/popover */}
    <button className="aspect-square p-4">
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
    </button>
    <span className="font-playfair">Kasen</span>
    <ul className="flex space-x-3">
      <li>
        <Link href="/" locale="en">
          EN
        </Link>
      </li>
      <li>
        <Link href="/" locale="nl">
          NL
        </Link>
      </li>
    </ul>
  </nav>
);

export default StickyNavigation;
