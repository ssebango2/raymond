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
  justify-content: flex-start; /* Align children to the start (left) */
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;
`;

const ContentContainer = styled.div`
  width: 100%; /* Adjust the width as needed */
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left; /* Left-align text */
  margin-right: 2rem; /* Add space between content and image */
  margin-top: 2rem;
`;

const ContentContainer2 = styled.div`
  width: 100%; /* Adjust the width as needed */
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left; /* Left-align text */
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

const ImageWrapper = styled.div`
  width: 40%; /* Take the remaining space */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align images to the start (left) */
  padding-left: 1rem; /* Add padding to separate the image from the content */
`;
const Footer = styled.footer`
  width: 100%;
  background-color: #003f91;
  padding: 2rem 0;
  text-align: center;
  color: white;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin: 2rem 0 0rem 0; /* 2rem margin above, 0rem margin below */
  width: 80%;
  display: flex;
  justify-content: center; /* Centers the image horizontally */
  align-items: center; /* Centers the image vertically */
  height: 100%; /* Ensures the container has height for vertical centering */
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
          WHERE IS DISTRICT 6?<br></br>
        </HeaderText>
      </Header>
      <ImageContainer>
        <Image
          src="/district6.jpg"
          alt="endorsement page"
          width={655}
          height={680}
        />
      </ImageContainer>
      <ContentWrapper>
        <ContentContainer>
          <Subtitle>
            Fremont&apos;s district 6 includes the area within the blue lines
            above
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
      <Footer>
        <FooterContent>
          <Image
            src="/newLogo.jpg"
            alt="Campaign Logo"
            width={180}
            height={40}
            priority={false} // Lazy loads the image
          />
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
