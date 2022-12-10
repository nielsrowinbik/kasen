import Image from 'next/image';
import type { ImageProps } from 'next/image';
import Link from 'next/link';

const CustomImage = (props: ImageProps) => {
  return (
    <div>
      <Image fill {...props} />
    </div>
  );
};

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink =
    href &&
    (href.startsWith('/') || href.startsWith('#')) &&
    !href.startsWith('/assets');

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export const MDXComponents = {
  a: CustomLink,
  img: CustomImage,
};
