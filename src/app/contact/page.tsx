import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Page() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-6"
      style={{ backgroundColor: '#EFE8DC' }}
    >
      {/* Header Section */}
      <div className="mb-8 w-full text-center">
        <h1 className="text-9xl font-bold text-blue-900">CONTACT</h1>
      </div>

      {/* Content Section with Background Image */}

      <div
        className="flex w-full flex-col items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/cliff.jpg)', padding: '2rem' }}
      >
        <div className="w-full max-w-4xl rounded-lg border-4 border-blue-900 bg-white p-8 text-left shadow-md">
          <p className="mb-4 text-3xl font-bold text-gray-600">
            Feel free to contact me via my campaign email:
            admin@raymondliu4CASenate.com I look through the email every single
            day, and I personally will respond to every single one of my future
            constituents.
          </p>
          <p className="text-lg text-gray-800">
            For more information, visit{' '}
            <Link href="raymondliucampaign.com" legacyBehavior>
              <a className="text-blue-600 underline">www.reallygreatsite.com</a>
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-8 w-full bg-blue-900 py-8">
        <div className="flex items-center justify-center space-x-8">
          <Image
            src="/Logo.jpg"
            alt="Raymond Liu Logo"
            width={100}
            height={100}
          />
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-8 w-8 text-white" />
              </a>
            </Link>
            <Link href="https://www.instagram.com" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-8 w-8 text-white" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-8 w-8 text-white" />
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
