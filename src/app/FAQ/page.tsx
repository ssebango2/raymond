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

const Subtitle1 = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: left;
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

const ImageContainer = styled.div`
  margin: 2rem 0; /* Add margin to separate the image from other content */
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
        <HeaderText>FAQ</HeaderText>
      </Header>
      <ContentContainer>
        <Subtitle>
          <BoldText> If elected, what are your top 3 priorities?</BoldText>
          <br></br>
        </Subtitle>
        <Subtitle1>
          <BoldText>1. Eliminating the Culture of Corruption: </BoldText>
          Fremont deserves leadership that is honest and accountable. I will
          work to restore transparency in local government and put an end to the
          misuse of public funds, ensuring that our city serves its
          residents—not personal interests.
          <br></br>
          <br></br>
          <BoldText>2. Addressing the Homelessness Crisis: </BoldText>While we
          must show compassion to those who need help, we cannot ignore the fact
          that many homeless individuals contribute to crime and make our public
          spaces unsafe. I will push for stronger enforcement to ensure that
          those who break the law are held accountable. We need a balanced
          approach that combines housing and services with firm action against
          those who threaten the safety of our community.
          <br></br>
          <br></br>
          <BoldText>3. Improving Our Public Schools: </BoldText> As a product of
          Fremont’s public school system, I am committed to supporting our
          schools. I will advocate for better funding and resources to ensure
          that every child has access to a high-quality education, preparing
          them for a brighter future.
        </Subtitle1>
      </ContentContainer>
      <ContentContainer>
        <Subtitle>
          <BoldText> Where can I learn more?</BoldText>
          <br></br>
        </Subtitle>
        <Subtitle1>
          Check out the events tab on this website for upcoming events. Also,
          please visit my{' '}
          <StyledLink href="https://www.facebook.com/profile.php?id=61567076660493&mibextid=LQQJ4d/">
            Facebook
          </StyledLink>{' '}
          page as well!
          <br></br>
        </Subtitle1>
      </ContentContainer>
      <ContentContainer>
        <Subtitle>
          <BoldText></BoldText>
          <br />
          <br />
        </Subtitle>
      </ContentContainer>
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
