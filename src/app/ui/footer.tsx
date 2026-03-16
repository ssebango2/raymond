 'use client';
 
 import Image from 'next/image';
 import styled from 'styled-components';
 
 const FooterRoot = styled.footer`
   width: 100%;
   background-color: #0a2b61;
   padding: 2rem 0;
   text-align: center;
   color: white;
   margin-top: 2rem;
 `;
 
 const FooterContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 2rem;
 `;
 
 const LogoRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   width: 100%;
 `;
 
 const SocialIcon = styled.a`
   color: white;
   font-size: 1.5rem;
   transition: color 0.3s ease;
 
   &:hover {
     color: #1877f2;
   }
 
   svg {
     width: 24px;
     height: 24px;
   }
 `;
 
 export default function Footer() {
   return (
     <FooterRoot>
       <FooterContent>
         <LogoRow>
           <Image
             src="/logo2.jpg"
             alt="Campaign Logo"
             width={450}
             height={100}
             priority={false}
           />
           <SocialIcon
             href="https://www.facebook.com/profile.php?id=61567076660493&mibextid=LQQJ4d"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Facebook"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
             >
               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
             </svg>
           </SocialIcon>
         </LogoRow>
         <p>Paid for by Raymond Liu for State Senate, District 10, 2026 FPPC# pending</p>
       </FooterContent>
     </FooterRoot>
   );
 }
