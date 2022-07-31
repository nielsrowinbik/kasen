import cn from 'classnames';
import NextImage from 'next/image';
import type { ReactNode } from 'react';

import BaseSection from './BaseSection';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Section = ({ children }) => (
  <BaseSection className="sm:mt-5 h-screen sm:h-[calc(100vh-2.5rem)]">
    {children}
  </BaseSection>
);

const Img = ({ src }) => (
  <div className="h-full bg-blue-100 flex-auto relative">
    <NextImage
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      src={src}
    />
  </div>
);

const Title = ({ children, className }: Props) => (
  <h2 className={cn('text-5xl font-bold mb-5 mt-0', className)}>{children}</h2>
);

export default Object.assign(Section, {
  ...BaseSection,
  Img,
});
