// src/pages/donate.tsx

'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 0;
`;

const Header = styled.header`
  width: 100%;
  height: 300px; /* Set the desired height */
  background-image: url('/nat.jpg');
  background-size: cover;
  background-position: center; /* Align the image to the center */
  background-repeat: no-repeat;
  text-align: center;
  color: white;
  margin: 0; /* Ensure no extra margin */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Adjust width if needed */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  padding: 2rem;
  text-align: center;
`;

const ContentContainer2 = styled.div`
  width: 100%; /* Adjust the width as needed */
  background-color: #0a2b61;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left; /* Left-align text */
  display: flex;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #003f91;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const DonateButton = styled.a`
  display: inline-block;
  background-color: #d32f2f;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b22a25;
  }
`;

const Footer = styled.footer`
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

const PayPalContainer = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #e7f3fe;
  border-radius: 8px;
  border: 1px solid #cfdfe3;
  text-align: center;
`;

const PayPalText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #333;
`;

const PayPalLink = styled.a`
  color: #0070ba;
  text-decoration: none;
  font-weight: bold;
  font-size: 3rem;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #1877f2; /* Facebook blue color on hover */
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default function DonatePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <PageContainer>
      <Header>
        <HeaderText>
          DONATE<br></br>
        </HeaderText>
      </Header>
      <ContentContainer2></ContentContainer2>
      <ContentContainer>
        <Title>Your Support Makes a Difference</Title>
        <Subtitle>
          Join us in making a positive impact in our community by contributing
          to our campaign. Every donation helps us get closer to our goals.
          Please use either the button below or the PayPal link. Please include
          your name, address, occupation and current employer.
        </Subtitle>
        <Link
          href="https://www.efundraisingconnections.com/c/RaymondLiu"
          passHref
        >
          <DonateButton>Donate Now</DonateButton>
        </Link>
      </ContentContainer>

      {/* PayPal Section */}
      <PayPalContainer>
        <Image
          src="/paypal.jpg"
          alt="Campaign Logo"
          width={146}
          height={180}
          priority={false}
        />
        <PayPalText></PayPalText>
        <PayPalLink
          href="https://paypal.me/ElectRaymondLiu?country.x=US&locale.x=en_US"
          target="_blank"
        >
          Pay via PayPal
        </PayPalLink>
        <br />
      </PayPalContainer>

      <Footer>
        <FooterContent>
          <LogoContainer>
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
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialIcon>
          </LogoContainer>
          <p>
            Paid for by RAYMOND LIU FREMONT CITY COUNCIL DISTRICT 6 CANDIDATE
            2024, FPPC #: 1475266
          </p>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
