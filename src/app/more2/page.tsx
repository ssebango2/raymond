'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

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
  background-color: #ffffff;
  padding: 1rem 0;
  text-align: center;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #b41539;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroSection1 = styled.section`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #0a2b61;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroText = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const HeroButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  background-color: #003f91;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    background-color: #002f72;
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #003f91;
  margin-bottom: 1rem;
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

export default function RegisterPage() {
  return (
    <PageContainer>
      <HeroSection>
        <HeroText>Learn How To Register Here</HeroText>
        <HeroButton href="https://registertovote.ca.gov">
          registertovote.ca.gov
        </HeroButton>
      </HeroSection>
      <HeroSection1>
        <HeroText>Official Ballot Box Locations</HeroText>
        <HeroButton href="https://acgov.org">acgov.org</HeroButton>
      </HeroSection1>
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
