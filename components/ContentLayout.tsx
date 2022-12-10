import HeroSection from './HeroSection';
import type { ReactNode } from 'react';
import StickyNavigation from './StickyNavigation';

interface ContentLayoutProps {
  children?: ReactNode;
  meta: {
    title: string;
    subtitle: string;
    image: string;
    full?: boolean;
  };
}

export function ContentLayout({ children, meta }: ContentLayoutProps) {
  return (
    <>
      <StickyNavigation />
      <HeroSection center fullHeight={meta.full || false}>
        <HeroSection.Img src={meta.image} />
        <HeroSection.Content>
          <HeroSection.Header>
            <HeroSection.Title>{meta.title}</HeroSection.Title>
            <HeroSection.Subtitle>{meta.subtitle}</HeroSection.Subtitle>
          </HeroSection.Header>
        </HeroSection.Content>
      </HeroSection>
      <main className="content">{children}</main>
    </>
  );
}
