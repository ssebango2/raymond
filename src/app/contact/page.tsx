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
        <h1 className="text-blue-900 text-9xl font-bold">CONTACT</h1>
      </div>
      
      {/* Content Section with Background Image */}

      <div
        className="w-full flex flex-col items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/cliff.jpg)', padding: '2rem' }}
      >
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md text-left border-4 border-blue-900">
          <p className="text-gray-600 text-3xl font-bold mb-4">
          Feel free to contact me via my campaign email:
          admin@raymondliu4CASenate.com
          I look through the email every single day, and I personally will respond to every single one of my future constituents.
          </p>
          <p className="text-gray-800 text-lg">
            For more information, visit <Link href="raymondliucampaign.com" legacyBehavior><a className="text-blue-600 underline">www.reallygreatsite.com</a></Link>.
          </p>
        </div>
      </div>

   {/* Footer Section */}
   <footer className="w-full bg-blue-900 py-8 mt-8">
        <div className="flex justify-center items-center space-x-8">
          <Image src="/Logo.jpg" alt="Raymond Liu Logo" width={100} height={100} />
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white w-8 h-8" />
              </a>
            </Link>
            <Link href="https://www.instagram.com" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white w-8 h-8" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white w-8 h-8" />
              </a>
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
