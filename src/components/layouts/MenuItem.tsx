import Link from 'next/link';

type MenuItemProps = {
  href: string;
  label: string;
};

export default function MenuItem({ href, label }: MenuItemProps) {
  return <Link href={href}>{label}</Link>;
}
