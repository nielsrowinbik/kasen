import Link from 'next/link';
import { ReactNode } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

type Props = {
  activeClassName?: string;
  children?: ReactNode;
  className?: string;
  locale: string;
};

const LocaleLink = ({
  activeClassName,
  children,
  className,
  locale,
}: Props) => {
  const { asPath, locale: currentLocale } = useRouter();
  const isActive = currentLocale === locale;

  return (
    <Link href={asPath} locale={locale}>
      <a className={cn(className, isActive && activeClassName)}>
        {children || locale.toUpperCase()}
      </a>
    </Link>
  );
};

export default LocaleLink;
