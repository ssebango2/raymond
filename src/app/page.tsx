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
        <HeaderText>RAYMOND LIU FOR FREMONT CITY COUNCIL</HeaderText>
      </Header>
      <ImageContainer>
        <Image
          src="/Fremont.jpg"
          alt="About Raymond"
          width={975}
          height={650}
        />
      </ImageContainer>
      <ContentContainer>
        <Subtitle>
          <BoldText>
            Hello, my name is Raymond Liu. Thank you for visiting my website.
          </BoldText>
          <br></br>
          <br></br>I was born and raised in the Bay Area, completing his K-12
          education in public schools right here in the Bay.
          <br></br>
          Like many others, I found the cost of a 4-year university daunting,
          and I instead went to Ohlone College. <br></br> I graduated with 3
          Associate of Science degrees in Math, Natural Sciences and Computer
          Science.
          <br></br>
          In 2017 I transferred to UC Davis, to complete my Bachelors of Science
          in Computer Science. <br></br>I graduated in the spring of 2019, and
          since then, I&apos;ve worked as an Engineer at various companies
          before <br></br>deciding to run for office in order to give back to
          the community who have helped me.
        </Subtitle>
      </ContentContainer>
      <Footer>
        <FooterContent>
          <Image
            src="/newLogo.jpg"
            alt="Campaign Logo"
            width={180}
            height={40}
          />
          <SocialLinks>
            <Link href="https://www.facebook.com" passHref>
              <SocialIcon target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <SocialIcon target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </SocialIcon>
            </Link>
            <Link href="https://www.linkedin.com" passHref>
              <SocialIcon target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </SocialIcon>
            </Link>
          </SocialLinks>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
