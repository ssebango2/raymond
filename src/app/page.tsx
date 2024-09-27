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
  margin: 2rem 0 0 0;
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
  color: #48494b;
  margin-bottom: 2rem;
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
  margin-top: 0rem;
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
  margin: 2rem; /* Add margin to separate the image from other content */
  width: 100%; /* Make container full width */
  max-width: 100%; /* Limit the container's width to 100% */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
`;

const StyledImage = styled.img`
  width: 50%; /* Image takes up 100% of the container width */
  height: auto; /* Maintain aspect ratio */
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
      <Header></Header>
      <ImageContainer>
        <StyledImage
          src="/cover-photo.jpg"
          alt="About Raymond"
          width={975}
          height={650}
        />
      </ImageContainer>
      <ContentContainer>
        <Subtitle>
          <BoldText>
            As a proud longtime resident and product of Fremont&apos;s public
            school system, I, Raymond Liu, <br></br>am running for Fremont City
            Council to restore integrity and accountability to our local
            government.
          </BoldText>
        </Subtitle>
        <Subtitle1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our city deserves
          leaders who prioritize the well-being of the community over personal
          gain. Unfortunately, that hasn&apos;t been the case in Fremont. The
          recent&nbsp;
          <StyledLink href="https://www.mercurynews.com/2022/03/30/former-fremont-city-manager-mark-danaj-charged-with-embezzlement/">
            felony conviction of our former City Manager
          </StyledLink>
          &nbsp;for fraud is a glaring example of corruption that has shaken our
          community&apos;s trust in local government. Even more shocking is
          that, despite his past misconduct, the current City Council approved
          more than $300,000 as a severance package for him—a decision that
          raises serious questions about their commitment to accountability and
          transparency. Furthermore, it&apos;s increasingly unlikely that
          Fremont will ever obtain our missing funds back, as according to
          Danaj&apos;s lawyer,&nbsp;
          <StyledLink href="https://www.siliconvalley.com/2024/07/18/disgraced-former-fremont-city-manager-kicked-out-of-government-association/">
            it is unlikely he&apos;ll pay this back as he is an
            &quot;indigent&quot; college student.{' '}
          </StyledLink>
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Additionally, the
          rising crime rate is a sharp indictment on the current council&apos;s
          failed policies. Since 2019,{' '}
          <StyledLink href="https://www.fremontpolice.gov/home/showpublisheddocument/646/637817280148230000/">
            the crime rate has risen sharply
          </StyledLink>{' '}
          and the current council&apos;s inability to address these critical
          issues has left our community vulnerable and struggling. Fremont
          deserves better.
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m running for
          Fremont City Council because I believe our city needs a fresh start.
          It&apos;s time for leadership that values integrity and puts the
          interests of residents first. My campaign is focused on restoring
          trust in our local government by holding those in power accountable
          and ensuring that public funds are used responsibly. Fremont deserves
          better, and together, we can build a more honest, transparent, and
          vibrant future for our city.
        </Subtitle1>
      </ContentContainer>
      <Footer>
        <FooterContent>
          <Image
            src="/logo2.jpg"
            alt="Campaign Logo"
            width={450}
            height={100}
            priority={false} // Lazy loads the image
          />
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
