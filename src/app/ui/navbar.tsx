import NavLinks from '@/app/ui/navlinks';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          <Link href="/">Vote for Raymond</Link>
        </div>
        <NavLinks />
      </div>
    </nav>
  );
}
