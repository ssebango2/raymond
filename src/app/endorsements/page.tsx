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
        <h1 className="text-blue-900 text-9xl font-bold">ABOUT</h1>
        <div className="bg-red-600 text-white text-6xl font-bold py-2 mt-4 inline-block px-8">
          RAYMOND LIU
        </div>
      </div>
      
      {/* Content Section with Background Image */}

      <div
        className="w-full flex flex-col items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/cliff.jpg)', padding: '2rem' }}
      >
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md text-left border-4 border-blue-900">
          <p className="text-gray-600 text-3xl font-bold mb-4">
            Raymond Liu was born and raised in the Bay Area, completing his K-12 
            education in public schools right here in the Bay. Like many others, 
            he found the cost of a 4-year university daunting, and he instead 
            went to his local community college, Ohlone College. 
            
            He graduated with 3 Associate of Science degrees in Math, Natural Sciences 
            and Computer Science. In 2017 he transferred to UC Davis, to complete his 
            Bachelors of Science in Computer Science. He graduated in the spring of 2019, 
            and since then, he’s worked as an Engineer at various companies before deciding to run 
              for office in order to give back to the community who has helped him.
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
