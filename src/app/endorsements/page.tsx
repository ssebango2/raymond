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
  height: 300px; /* Set the desired height */
  background-image: url('/wasdc-modified.jpg'); 
  background-size: cover;
  background-position: center; /* Align the image to the center */
  background-repeat: no-repeat;
  text-align: center;
  color: white;
  margin: 0; /* Ensure no extra margin */
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: #0a2b61;
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
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%;
  margin: 2rem 0; /* Add margin to separate images */
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
        <HeaderText>ENDORSEMENTS<br></br></HeaderText>
      </Header>
      <ContentContainer2>
      <ImageContainer>
        <Image src="/raymondsenatepic.jpg" alt="endorsement page" width={806} height={605} />
      </ImageContainer>
      </ContentContainer2>
      <ContentWrapper>
        <ContentContainer>
          <Subtitle>
          Ray has always been a fighter for the economic and social rights of Undocumented citizens like myself. 
          That's why I trust him to be District 10's next state Senator, I know he'll continue to do the good work he's
          always done and be on the right side of justice.
            <br /><br />
            <i>- Flavio Arechiga </i>
          </Subtitle>
        </ContentContainer>
        <ImageWrapper>
          <ImageContainer>
            <Image src="/flavio.jpg" alt="Raymond with Supporters" width={151} height={206} />
          </ImageContainer>
          {/* Add more images here if needed */}
        </ImageWrapper>
      </ContentWrapper>
      <ContentWrapper>
      <ImageWrapper>
          <ImageContainer>
            <Image src="/flavio.jpg" alt="Raymond with Supporters" width={151} height={206} />
          </ImageContainer>
          {/* Add more images here if needed */}
        </ImageWrapper>
        <ContentContainer>
          <Subtitle>
          Ray has always been a fighter for the economic and social rights of Undocumented citizens like myself. 
          That's why I trust him to be District 10's next state Senator, I know he'll continue to do the good work he's
          always done and be on the right side of justice.
            <br /><br />
            <i>- Flavio Arechiga </i>
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
      <Footer>
        <FooterContent>
          <Image src="/newLogo.jpg" alt="Campaign Logo" width={180} height={40} />
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
