'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

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
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;
  align-items: center;
  justify-content: center;

  /* Define grid layout for larger screens */
  grid-template-columns: repeat(2, 1fr); /* 2 items side by side */

  /* Make items stack on top of each other on smaller screens */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column layout on smaller screens */
    justify-items: center; /* Center items horizontally */
  }
`;

const ContentContainer = styled.div`
  width: auto; /* Adjust width to be flexible */
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: left;
  margin: 0 2rem 2rem 0; /* Add margin for spacing between items */
  display: inline-block; /* Allow it to take up only as much space as needed */
  vertical-align: top; /* Align container to the top */
  max-width: 600px; /* You can adjust this value based on your layout */

  @media (max-width: 768px) {
    margin: 0 0 2rem 0; /* Remove horizontal margin on smaller screens */
    width: 100%; /* Full width on smaller screens */
    max-width: 100%; /* Allow full width on smaller screens */
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
  font-size: 1.8rem;
  margin-top: 2rem;
  color: #666;
  width: 60%;
  text-align: center;
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%;
  max-width: 100%;
  margin: 2rem 0; /* Add margin to separate images */

  @media (max-width: 768px) {
    margin: 1rem 0; /* Reduce vertical margin on smaller screens */
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
        <HeaderText>
          ENDORSEMENTS<br></br>
        </HeaderText>
      </Header>
      <ContentContainer2></ContentContainer2>
      <Subtitle1>
        <BoldText>
          Why Do Teachers, Elected Officials, and District 6 Residents Endorse
          Raymond Liu?
        </BoldText>
        <br></br>
        <br></br>
        Discover the reasons behind the widespread support for Raymond Liu from
        educators, public servants, and your fellow community members.
      </Subtitle1>
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
            &quot;I first met Ray as a fellow student at UC Davis, where his
            dedication and passion for community service were immediately
            evident. Now, as a Grant Program Assistant with the Fresno Area
            Hispanic Foundation, I see those same qualities in his run for
            Fremont City Council. Ray&apos;s commitment to transparency,
            inclusivity, and ethical leadership is exactly what Fremont needs. I
            am proud to endorse Raymond Liu, knowing he will bring positive
            change to Fremont.&quot;
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
          <Image
            src="/kian.jpg"
            alt="endorsement image"
            width={384}
            height={288}
            priority={false}
          />
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
            <i>- Aidan Ferrer, Teacher at Notre Dame High School </i>
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
      <ContentWrapper>
        <ImageContainer>
          <Image
            src="/mcgrath.jpg"
            alt="endorsement image"
            width={405}
            height={300}
            priority={false} // Lazy loads the image
          />
        </ImageContainer>
        {/* Add more images here if needed */}
        <ContentContainer>
          <Subtitle>
            &quot;I believe in leaders who serve with integrity, compassion, and
            a genuine commitment to the well-being of their community. Raymond
            Liu embodies these values in his run for Fremont City Council. His
            dedication to addressing corruption, supporting those in need, and
            restoring trust in our local government is exactly what Fremont
            requires. I wholeheartedly endorse Raymond Liu, knowing he will lead
            with the moral clarity and ethical conviction that Fremont
            deserves.&quot;
            <br />
            <br />
            <i>- Rev. Matthew Mcgrath</i>
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
      <ContentWrapper>
        <ImageContainer>
          <Image
            src="/ryan.jpg"
            alt="endorsement image"
            width={375}
            height={500}
            priority={false} // Lazy loads the image
          />
        </ImageContainer>
        {/* Add more images here if needed */}
        <ContentContainer>
          <Subtitle>
            &quot;As the owner of a small hobby store in the Bay, I&apos;ve seen
            firsthand how challenging it can be to run a small business. Raymond
            understands the struggles we face and is committed to supporting
            local businesses by promoting a fair and honest government. His
            focus on tackling corruption and improving the local economy makes
            him the right choice for City Council. I fully endorse Raymond Liu,
            confident that he will help small businesses like mine thrive in a
            fairer, more transparent Fremont.&quot;
            <br />
            <br />
            <i>- Ryan Sixberry, owner of Card Art</i>
          </Subtitle>
        </ContentContainer>
      </ContentWrapper>
    </PageContainer>
  );
}
