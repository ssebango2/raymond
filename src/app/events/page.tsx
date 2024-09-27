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
  padding: 0; /* Remove padding */
`;

const Header = styled.header`
  width: 100%;
  background-color: #0a2b61;
  padding: 2rem 0;
  text-align: center;
  color: white;
  margin: 0; /* Ensure no extra margin */
`;

const HeaderText = styled.h1`
  font-size: 2.5rem;
  margin: 0; /* Ensure no extra margin */
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;
  align-items: center;
  justify-content: center; /* Horizontally centers the items if needed */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  width: auto; /* Adjust width to be flexible */
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left;
  margin: 0 3rem 0rem 0; /* Add margin for spacing between items */
  display: inline-block; /* Allow it to take up only as much space as needed */
  vertical-align: top; /* Align container to the top */
  max-width: 600px; /* You can adjust this value based on your layout */

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const ContentContainer2 = styled.div`
  width: 100%; /* Adjust the width as needed */
  background-color: #0a2b61;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left; /* Left-align text */
  display: flex;
`;

const ContentContainer3 = styled.div`
  width: 50%; /* Adjust the width as needed */
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  padding-top: 
  height: 288px;
  text-align: left; /* Left-align text */
  display: flex;
`;

const ContentContainer4 = styled.div`
  width: 50%; /* Adjust the width as needed */
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  padding-top: 
  height: 10;
  text-align: left; /* Left-align text */
  display: flex;
`;

const BoldText = styled.span`
  font-weight: bold;
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

const Subtitle1 = styled.p`
  font-size: 1.2rem;
  color: #666;
  width: 100%;
  text-align: left;
  line-height: 1.6;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  padding-left: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center; /* Center the image */
    margin-bottom: 1rem; /* Adjust margin as needed */
    padding-left: 0; /* Remove padding */
  }
`;

const ImageWrapper1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  padding-left: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center; /* Center the image */
    margin-bottom: 1rem; /* Adjust margin as needed */
    padding-left: 0; /* Remove padding */
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
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 50%;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 2rem;
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
        <HeaderText>UPCOMING EVENTS</HeaderText>
      </Header>
      <ImageContainer>
        <Image src="/event.jpg" alt="event image" width={595} height={842} />
      </ImageContainer>
      <Footer>
        <FooterContent>
          <Image
            src="/logo2.jpg"
            alt="Campaign Logo"
            width={450}
            height={100}
            priority={false}
          />
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
