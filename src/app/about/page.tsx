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

const ContentContainer = styled.div`
  width: 100%; /* Take full width */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  padding: 2rem;
  text-align: center;
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
  margin: 2rem 0; /* Add margin to separate the image from other content */
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
        <HeaderText>ABOUT RAYMOND</HeaderText>
      </Header>
      <ImageContainer>
        <Image src="/placeholder.jpg" alt="About Raymond" width={975} height={650} />
      </ImageContainer>
      <ContentContainer>
        <Subtitle>
          <BoldText>As a proud longtime resident and product of Fremont's public school system, 
          I, Raymond Liu, am running for Fremont City Council to restore integrity and accountability 
          to our local government.</BoldText> <br></br><br></br>
          Our city has been rocked by scandals, most notably the{' '}
          <Link href="https://www.mercurynews.com/2022/03/30/former-fremont-city-manager-mark-danaj-charged-with-embezzlement/" passHref>
            former City Manager's fraud
          </Link>
          {' '}conviction due to misuse of public funds, highlighting a deep-rooted culture 
          of corruption that has taken place. Additionally, the rising homeless population is a stark 
          indictment of the current council’s failed policies and lack of effective leadership. 
          Fremont deserves better. I am committed to transparency, ethical governance, and implementing 
          practical solutions to address homelessness. Together, we can reclaim our city’s promise and 
          build a better future for all residents. Vote for Raymond Liu for Fremont City Council.
        </Subtitle>
      </ContentContainer>
      <Footer>
        <FooterContent>
          <Image src="/newLogo.jpg" alt="Campaign Logo" width={180} height={40} />
          <SocialLinks>
            <Link href="https://www.facebook.com" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </Link>
            <Link href="https://www.instagram.com" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </Link>
            <Link href="https://www.linkedin.com" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </Link>
          </SocialLinks>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
