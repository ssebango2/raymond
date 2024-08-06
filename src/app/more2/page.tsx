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
