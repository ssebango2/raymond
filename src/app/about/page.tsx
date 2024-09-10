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

const Subtitle1 = styled.p`
  font-size: 1.2rem;
  color: #000328;
  margin-bottom: 2rem;
  text-align: left;
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

const ImageContainer = styled.div`
  margin: 2rem; /* Add margin to separate the image from other content */
  width: 50%;
  max-width: 50%;
  display: grid;
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
        <Image
          src="/aboutraymond.jpg"
          alt="About Raymond"
          width={1000}
          height={1500}
          layout="responsive"
        />
      </ImageContainer>
      <ContentContainer>
        <Subtitle1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was born and raised
          in the Bay Area, and my journey began right here in Fremont, where I
          attended our very own public schools, first junior high and later
          Irvington High School. Like many others, I found the cost of a 4-year
          university daunting, and so after graduating high school, I enrolled
          at Ohlone College in Fremont, where I earned three associate degrees
          in Math, Natural Sciences, and Computer Science.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seeking to further my
          education, I then transferred to UC Davis, where I completed my
          Bachelor of Science&apos;s degree in Computer Science, graduating in
          the spring of 2019. Since then, I&apos;ve been working as a Software
          Engineer, applying my skills and knowledge to solve complex problems
          and contribute to innovative projects.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout my life,
          Fremont has been my home, and it&apos;s where I&apos;ve grown both
          personally and professionally. Now, I&apos;m running for City Council
          because I&apos;m committed to giving back to the community that has
          given me so much. I&apos;m dedicated to ensuring that Fremont
          continues to thrive and that all residents have the opportunity to
          succeed.
        </Subtitle1>
      </ContentContainer>
      <Footer>
        <FooterContent>
          <Image
            src="/newLogo.jpg"
            alt="Campaign Logo"
            width={180}
            height={40}
          />
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
