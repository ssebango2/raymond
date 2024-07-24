import NavLinks from '@/app/ui/navlinks';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Vote for Raymond</Link>
        </div>
        <NavLinks />
      </div>
    </nav>
  );
}
