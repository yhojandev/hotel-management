import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/ui/logo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 space-y-5 md:px-2">
      <Link
        className="flex justify-center bg-gray-100 rounded-md py-5"
        href="/"
      >
        <Logo />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-100 md:block"></div>
      </div>
    </div>
  );
}
