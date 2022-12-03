import { FullScreenMenu } from './FullScreenMenu';
import LocaleLink from './LocaleLink';
import { useRouter } from 'next/router';

const StickyNavigation = () => {
  const { locales } = useRouter();

  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center z-10 py-4 px-6 text-white sm:m-5 bg-gradient-to-b from-black/30 to-transparent">
      <FullScreenMenu />
      <ul className="flex space-x-3">
        {locales.sort().map((locale) => (
          <li key={locale}>
            <LocaleLink
              activeClassName="!opacity-100 !hover:opacity-100"
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
