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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
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
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
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
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%;
  max-width: 100%;
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
        <HeaderText>
          ENDORSEMENTS<br></br>
        </HeaderText>
      </Header>
      <ContentContainer2>
      </ContentContainer2>
      <ContentWrapper>
      <ImageContainer>
            <Image
              src="/flavio.jpg"
              alt="endorsement image"
              width={400}
              height={400}
              priority={false} // Lazy loads the image
            />
          </ImageContainer>
        <ContentContainer>
          <Subtitle>
            &quot;Through my career at the Fresno Area Hispanic Foundation, I
            have seen the impact of strong, community-focused leadership
            firsthand. Raymond Liu exemplifies the qualities of a leader who
            truly cares about the people he serves. His commitment to
            inclusivity, transparency, and ethical governance resonates deeply
            with the values of Fremont&apos;s diverse community. Raymond&apos;s
            proactive approach to addressing the issues that matter most, from
            combating corruption to supporting underrepresented groups, makes
            him an outstanding candidate for Fremont City Council. I am proud to
            endorse Raymond Liu, confident that he will bring positive change to
            Fremont.&quot;
            <br></br>
            <br></br>
            <i>- Flavio Arechiga, Non Profit Organization Worker </i>
          </Subtitle>
        </ContentContainer>
        {/* Add more images here if needed */}
      </ContentWrapper>
      <ContentWrapper>
          <ImageContainer>
            <Image
              src="/kam-ray.jpg"
              alt="endorsement image"
              width={384}
              height={288}
              priority={false} // Lazy loads the image
            />
          </ImageContainer>
          {/* Add more images here if needed */}
        <ContentContainer>
          <Subtitle>
            &quot;Raymond is one of the smartest people I know. He&apos;ll bring
            a level of transparency and honestly to Fremont that&apos;s sorely
            needed. His brilliance will be a welcome addition to Fremont, and
            that&apos;s why I fully endorse him for Fremont City Council&quot;
            <br />
            <br />
            <i>- Kameron Pollard, Engineer </i>
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
      <ContentWrapper>
        <ImageContainer>
          <Image src="/kian.jpg" alt="endorsement image" width={384} height={288}  priority={false} />
        </ImageContainer>
        <ContentContainer>
          <Subtitle>
            &quot;As a teacher, I always tell my students that integrity is one
            of the most important values you can have. With the recent scandals
            marring the city, Raymond&apos;s honesty and his willingness to do
            the right thing sets him apart. His commitment to ethical governance
            and genuine care for our community make him the clear choice for
            Fremont City Council. I fully endorse Raymond Liu, knowing he will
            bring the honesty and transparency Fremont desperately needs.&quot;
            <br></br>
            <br></br>
            <i>- Kian Amini, public school teacher </i>
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
      <ContentWrapper>
          <ImageContainer>
            <Image
              src="/stover.jpg"
              alt="endorsement image"
              width={360}
              height={480}
              priority={false} // Lazy loads the image
            />
          </ImageContainer>
          {/* Add more images here if needed */}
        <ContentContainer>
          <Subtitle>
            &quot;As an engineer, I value intelligence, critical thinking, and
            problem-solving skills—qualities that Raymond Liu embodies in
            spades. His sharp mind and ability to analyze complex issues make
            him the ideal candidate for Fremont City Council. In a time when our
            city needs smart, effective leadership more than ever,
            Raymond&apos;s intellect and dedication stand out. I fully endorse
            Raymond Liu, confident that his intelligence and vision will guide
            Fremont to a brighter future.&quot;
            <br />
            <br />
            <i>- Jon Stover, Software Engineer </i>
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
      <ContentWrapper>
          <ImageContainer>
            <Image
              src="/ferrer.jpg"
              alt="endorsement image"
              width={440}
              height={330}
              priority={false} // Lazy loads the image
            />
          </ImageContainer>
          {/* Add more images here if needed */}
        <ContentContainer>
          <Subtitle>
            &quot;As a teacher, I take the education of our children seriously.
            That&apos;s why I&apos;m endorsing Raymond for Fremont City Council.
            He&apos;s dedication to improving our education is unparalleled, and
            his commitment to ethical governance is desperately needed after the
            corruption scandals plaguing Fremont. I fully back Raymond for
            Fremont&apos;s City Council and know he&apos;ll bring change that
            Fremont needs.&quot;
            <br />
            <br />
            <i>- Aidan Ferrer - Teacher at Notre Dame High School </i>
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
      <ContentWrapper>
          <ImageContainer>
            <Image
              src="/geo.jpg"
              alt="endorsement image"
              width={440}
              height={330}
              priority={false} // Lazy loads the image
            />
          </ImageContainer>
          {/* Add more images here if needed */}
        <ContentContainer>
          <Subtitle>
            &quot;As a Master&apos;s student at San Jose State University, I
            know the importance of having leaders who are not only intelligent
            but also genuinely care about the community. Raymond Liu is exactly
            that kind of leader. His focus on transparency and ethical
            governance is a breath of fresh air. I fully endorse Raymond Liu for
            Fremont City Council, confident that he will bring the positive
            change Fremont needs.&quot;
            <br />
            <br />
            <i>- Geovany Ramirez, student at SJSU </i>
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
      <ContentWrapper>
          <ImageContainer>
            <Image
              src="/rapha.jpg"
              alt="endorsement image"
              width={480}
              height={320}
              priority={false} // Lazy loads the image
            />
          </ImageContainer>
          {/* Add more images here if needed */}
        <ContentContainer>
          <Subtitle>
            &quot;As a student at Ohlone College, and a long time resident in
            Fremont, I&apos;m deeply concerned about the direction our city is
            headed. Raymond understands the challenges young people face, from
            affordable housing to quality education. His commitment to fighting
            corruption and improving our community makes him the candidate we
            need. I support Raymond Liu for Fremont City Council because
            he&apos;s dedicated to creating a better future for all of us.&quot;
            <br />
            <br />
            <i>- Raphael Barrera, Student at Ohlone College</i>
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
      <Footer>
        <FooterContent>
          <Image
            src="/newLogo.jpg"
            alt="Campaign Logo"
            width={180}
            height={40}
            priority={false} // Lazy loads the image
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
