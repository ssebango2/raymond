import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6" style={{ backgroundColor: '#EFE8DC' }}>   
       {/* Header Section */}
      <div className="w-full text-center mb-8">
        <div className="bg-red-600 text-white text-6xl font-bold py-2 mt-4 inline-block px-8">
          CAMPAIGN POLICIES
        </div>
      </div>

      {/* Content Section with Background Image */}

      <div
        className="flex w-full flex-col items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/cliff.jpg)', padding: '2rem' }}
      >
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md text-left border-4 border-blue-900">
          <p className="text-gray-600 text-3xl font-bold mb-4">
          As the only private citizen running for District 10, Raymond Liu offers a unique perspective that isn’t 
          bogged down in corruption or special interests.
          He has pledged to not accept a single penny from any special interest groups and is proud to announce that 
          he is solely funded entirely through small donors who live and reside in District 10.
              </p>
          <p className="text-gray-800 text-lg">
            For more information, visit <Link href="raymondliucampaign.com" legacyBehavior><a className="text-blue-600 underline">www.reallygreatsite.com</a></Link>.
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
