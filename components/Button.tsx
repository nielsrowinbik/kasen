import Link from 'next/link';

const Button = ({ children, href }) => (
  <Link href={href} passHref>
    <a className="bg-red-200 px-4 py-3 no-underline">{children}</a>
  </Link>
);

export default Button;
