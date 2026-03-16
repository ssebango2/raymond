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
    </PageContainer>
  );
}
