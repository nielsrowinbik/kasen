import cn from 'classnames';
import NextImage from 'next/image';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Section = ({ children }) => (
  <section className="sm:m-5 h-screen sm:h-[calc(100vh-2.5rem)] relative ">
    {children}
  </section>
);

const Img = ({ src }) => (
  <NextImage
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    src={src}
  />
);

const Content = ({ children, className }: Props) => (
  <div
    className={cn(
      'absolute inset-0 flex items-center justify-center',
      className
    )}
  >
    <div className="prose prose-headings:font-playfair !prose-invert">
      {children}
    </div>
  </div>
);

const Header = ({ children, className }: Props) => (
  <header className={cn('text-center', className)}>{children}</header>
);

const Title = ({ children, className }: Props) => (
  <h2 className={cn('text-8xl font-bold mb-5 mt-0', className)}>{children}</h2>
);

const Subtitle = ({ children, className }: Props) => (
  <p className={cn('text-5xl mt-0 font-playfair italic text-white', className)}>
    {children}
  </p>
);

export default Object.assign(Section, {
  Img,
  Content,
  Header,
  Title,
  Subtitle,
});
