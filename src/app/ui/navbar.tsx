import NavLinks from '@/app/ui/navlinks';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex flex-row bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex items-center">
        <Link href={'/'}>Vote for Raymond</Link>
      </div>
      <NavLinks />
    </div>
  );
}
