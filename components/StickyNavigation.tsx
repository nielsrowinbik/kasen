import Link from 'next/link';
import { useRouter } from 'next/router';
import LocaleLink from './LocaleLink';

const StickyNavigation = () => {
  const { locales } = useRouter();

  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center z-10 py-4 px-6 text-white sm:m-5">
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
      <Link href="/" passHref>
        <a className="font-playfair">Kasen</a>
      </Link>
      <ul className="flex space-x-3">
        {locales.sort().map((locale) => (
          <li key={locale}>
            <LocaleLink
              activeClassName="opacity-100 hover:opacity-100"
              className="opacity-50 hover:opacity-80 transition-opacity"
              locale={locale}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StickyNavigation;
