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
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  gap: 4rem; // Increase the gap between children
  padding: 0 2rem; // Add some horizontal padding

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left;
  max-width: 50%;

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
        <HeaderText>ABOUT RAYMOND</HeaderText>
      </Header>
      <ContentWrapper>
        <ImageContainer>
          <Image
            src="/aboutraymond.jpg"
            alt="endorsement image"
            width={633}
            height={950}
          />
        </ImageContainer>
        <ContentContainer>
          <Subtitle1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was born and
            raised in the Bay Area, and my journey began right here in Fremont,
            where I attended our very own public schools, first junior high and
            later Irvington High School. Like many others, I found the cost of a
            4-year university daunting, and so after graduating high school, I
            enrolled at Ohlone College in Fremont, where I earned three
            associate degrees in Math, Natural Sciences, and Computer Science.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seeking to further
            my education, I then transferred to UC Davis, where I completed my
            Bachelor of Science&apos;s degree in Computer Science, graduating in
            the spring of 2019. Since then, I&apos;ve been working as a Software
            Engineer, applying my skills and knowledge to solve complex problems
            and contribute to innovative projects.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout my life,
            Fremont has been my home, and it&apos;s where I&apos;ve grown both
            personally and professionally. Now, I&apos;m running for City
            Council because I&apos;m committed to giving back to the community
            that has given me so much. I&apos;m dedicated to ensuring that
            Fremont continues to thrive and that all residents have the
            opportunity to succeed.
          </Subtitle1>
        </ContentContainer>
      </ContentWrapper>
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
