import NextImage from 'next/image';

import BaseSection from './BaseSection';

const Section = ({ children }) => (
  <BaseSection className="min-h-screen sm:min-h-[calc(100vh-2.5rem)]">
    {children}
  </BaseSection>
);

const Img = ({ src }) => (
  <div className="min-h-[50vh] bg-blue-100 flex-auto relative">
    <NextImage
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      src={src}
    />
  </div>
);

export default Object.assign(Section, {
  ...BaseSection,
  Img,
});
