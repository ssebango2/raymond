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
  color: #000328;
  margin-bottom: 2rem;
  text-align: left;
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
  background-color: #0a2b61;
  padding: 2rem 0;
  text-align: center;
  color: white;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #007bff; /* Default link color */
  font-weight: bold;
  position: relative;

  &:hover {
    color: #0056b3; /* Hover color */
    text-decoration: underline;
  }
`;

const StyledImage = styled.img`
  width: 60%; /* Image takes up 100% of the container width */
  height: auto; /* Maintain aspect ratio */
`;

const ImageContainer = styled.div`
  margin: 2rem 0 0rem 0; /* 2rem margin above, 0rem margin below */
  width: 80%;
  display: flex;
  justify-content: center; /* Centers the image horizontally */
  align-items: center; /* Centers the image vertically */
  height: 100%; /* Ensures the container has height for vertical centering */
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
          WHERE IS DISTRICT 6?<br></br>
        </HeaderText>
      </Header>
      <ImageContainer>
        <StyledImage
          src="/district6.jpg"
          alt="endorsement image"
          width={633}
          height={950}
        />
      </ImageContainer>
      <ContentWrapper>
        <ContentContainer>
          <Subtitle>
            Fremont&apos;s District 6 includes the area within the blue lines.
            Check this{' '}
            <StyledLink href="https://www.arcgis.com/apps/webappviewer/index.html?id=039f67a84c074c089e1f98739f8c39b3&extent=-13608799.4331%2C4496614.1707%2C-13550707.2916%2C4529023.4707%2C102100">
              link
            </StyledLink>{' '}
            to see if you are in District 6!
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
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
