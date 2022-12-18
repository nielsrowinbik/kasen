import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from 'react';

import Image from 'next/image';
import type { ImageProps } from 'next/image';
import Link from 'next/link';

const CustomImage = ({
  alt = '',
  src,
}: DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  return (
    <div>
      <Image
        alt={alt}
        aria-hidden
        fill
        // placeholder="blur"
        sizes="(min-width: 1024px) 50vw, 100vw"
        src={src!}
      />
    </div>
  );
};

const CustomLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  const isInternalLink =
    props.href &&
    (props.href.startsWith('/') || props.href.startsWith('#')) &&
    !props.href.startsWith('/assets');

  if (isInternalLink) {
    return <Link href={props.href!}>{props.children}</Link>;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export const MDXComponents = {
  a: CustomLink,
  img: CustomImage,
};
