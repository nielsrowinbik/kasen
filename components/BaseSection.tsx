import cn from 'classnames';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Section = ({ children, className }: Props) => (
  <section
    className={cn(
      'lg:flex odd:lg:flex-row-reverse sm:mx-5 sm:mb-5 shadow-xl bg-white',
      className
    )}
  >
    {children}
  </section>
);

const Header = ({ children, className }: Props) => (
  <header className={cn(className)}>{children}</header>
);

const Title = ({ children, className }: Props) => (
  <h2 className={cn('text-5xl font-bold mb-5 mt-0', className)}>{children}</h2>
);

const Subtitle = ({ children, className }: Props) => (
  <p
    className={cn(
      'font-playfair italic text-xl text-gray-700 text-opacity-60',
      className
    )}
  >
    {children}
  </p>
);

// TODO: Accept a `className` prop
const Content = ({ children, className }: Props) => (
  <div className="w-full lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
    <div className="px-6 lg:px-16 py-16 prose prose-headings:font-playfair">
      {children}
    </div>
  </div>
);

type LinkProps = Props & { href: string };
const Button = ({ children, className, href }: LinkProps) => (
  <Link href={href} passHref>
    <a
      className={cn(
        'bg-green-500 no-underline py-3 px-4 uppercase text-white inline-block',
        className
      )}
    >
      {children}
    </a>
  </Link>
);

export default Object.assign(Section, {
  Header,
  Title,
  Subtitle,
  Content,
  Button,
});
