import BaseSection from './BaseSection';
import NextImage from 'next/image';

const Section = ({ children }) => (
  <BaseSection className="min-h-screen sm:min-h-[calc(100vh-2.5rem)]">
    {children}
  </BaseSection>
);

const Img = ({ src }) => (
  <div className="min-h-[50vh] flex-auto relative">
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
