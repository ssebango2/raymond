'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

/* ─── Base ─────────────────────────────────────────── */

const Page = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  background: #f3f6fb;
`;

const Section = styled.section`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

/* ─── Hero ─────────────────────────────────────────── */

const Hero = styled(Section)`
  background: linear-gradient(155deg, #0e3374 0%, #0a2b61 55%, #061e47 100%);
  padding: 3.5rem 0 3.25rem;
`;

const HeroInner = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const HeroEyebrow = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: 2.75rem;
  line-height: 1.08;
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.01em;

  @media (max-width: 680px) {
    font-size: 2.1rem;
  }

  @media (max-width: 440px) {
    font-size: 1.85rem;
  }
`;

const HeroSubtitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.2rem;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.28rem 0.75rem;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

/* ─── Endorsements Section ──────────────────────────── */

const EndorsementsSection = styled(Section)`
  padding: 2.75rem 0 3rem;
  background: #f3f6fb;
`;

const SectionHeader = styled(Container)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
`;

const Accent = styled.div`
  width: 4px;
  height: 2.2rem;
  border-radius: 2px;
  background: #0a2b61;
  flex-shrink: 0;
`;

const SectionLabel = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(10, 43, 97, 0.48);
  margin-bottom: 0.2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.65rem;
  font-weight: 800;
  color: #0a2b61;
  margin: 0;
  line-height: 1.2;
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

/* ─── Endorsement Card ──────────────────────────────── */

const EndorseCard = styled.div`
  background: #fff;
  border-radius: 16px;
  border: 1px solid rgba(10, 43, 97, 0.1);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.05);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition:
    box-shadow 160ms ease,
    transform 160ms ease;

  &:hover {
    box-shadow: 0 14px 38px rgba(10, 43, 97, 0.11);
    transform: translateY(-2px);
  }
`;

const QuoteBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const QuoteMark = styled.div`
  font-size: 3.5rem;
  line-height: 0.7;
  font-family: Georgia, serif;
  color: rgba(10, 43, 97, 0.15);
  user-select: none;
`;

const QuoteText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.65;
  color: #2f3640;
  font-style: italic;
`;

const CardDivider = styled.div`
  height: 1px;
  background: rgba(10, 43, 97, 0.08);
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(10, 43, 97, 0.12);
  flex-shrink: 0;
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const PersonName = styled.div`
  font-size: 0.9rem;
  font-weight: 800;
  color: #0a2b61;
  line-height: 1.3;
`;

const PersonTitle = styled.div`
  font-size: 0.8rem;
  color: rgba(10, 43, 97, 0.55);
  font-weight: 500;
  line-height: 1.3;
`;

/* ─── Endorsers Data ─────────────────────────────────── */

const endorsers = [
  {
    photo: '/flavio.jpg',
    width: 400,
    height: 400,
    name: 'Flavio Arechiga',
    title: 'Non-Profit Organization Worker',
    quote:
      'I first met Ray as a fellow student at UC Davis, where his dedication and passion for community service were immediately evident. Now, as a Grant Program Assistant with the Fresno Area Hispanic Foundation, I see those same qualities in his run for California State Senate. Ray\u2019s commitment to transparency, inclusivity, and ethical leadership is exactly what our communities need. I am proud to endorse Raymond Liu, knowing he will bring positive change to California.',
  },
  {
    photo: '/kam-ray.jpg',
    width: 384,
    height: 288,
    name: 'Kameron Pollard',
    title: 'Engineer',
    quote:
      'Raymond is one of the smartest people I know. He\u2019ll bring a level of transparency and honesty to Sacramento that\u2019s sorely needed. His brilliance will be a welcome addition to the State Senate, and that\u2019s why I fully endorse him for California State Senate.',
  },
  {
    photo: '/kian.jpg',
    width: 384,
    height: 288,
    name: 'Kian Amini',
    title: 'Public School Teacher',
    quote:
      'As a teacher, I always tell my students that integrity is one of the most important values you can have. With the recent scandals marring our political institutions, Raymond\u2019s honesty and his willingness to do the right thing sets him apart. His commitment to ethical governance and genuine care for our community make him the clear choice for California State Senate. I fully endorse Raymond Liu, knowing he will bring the honesty and transparency Sacramento desperately needs.',
  },
  {
    photo: '/stover.jpg',
    width: 360,
    height: 480,
    name: 'Jon Stover',
    title: 'Software Engineer',
    quote:
      'As an engineer, I value intelligence, critical thinking, and problem-solving skills\u2014qualities that Raymond Liu embodies in spades. His sharp mind and ability to analyze complex issues make him the ideal candidate for California State Senate. In a time when Sacramento needs smart, effective leadership more than ever, Raymond\u2019s intellect and dedication stand out. I fully endorse Raymond Liu, confident that his intelligence and vision will guide California to a brighter future.',
  },
  {
    photo: '/ferrer.jpg',
    width: 440,
    height: 330,
    name: 'Aidan Ferrer',
    title: 'Teacher, Notre Dame High School',
    quote:
      'As a teacher, I take the education of our children seriously. That\u2019s why I\u2019m endorsing Raymond for California State Senate. His dedication to improving our education is unparalleled, and his commitment to ethical governance is desperately needed. I fully back Raymond for California State Senate and know he\u2019ll bring the change that families need.',
  },
  {
    photo: '/geo.jpg',
    width: 440,
    height: 330,
    name: 'Geovany Ramirez',
    title: 'Graduate Student, San Jose State University',
    quote:
      'As a Master\u2019s student at San Jose State University, I know the importance of having leaders who are not only intelligent but also genuinely care about the community. Raymond Liu is exactly that kind of leader. His focus on transparency and ethical governance is a breath of fresh air. I fully endorse Raymond Liu for California State Senate, confident that he will bring the positive change California needs.',
  },
  {
    photo: '/rapha.jpg',
    width: 480,
    height: 320,
    name: 'Raphael Barrera',
    title: 'Student, Ohlone College',
    quote:
      'As a student at Ohlone College, and a long-time Fremont resident, I\u2019m deeply concerned about the direction our state is headed. Raymond understands the challenges young people face, from affordable housing to quality education. His commitment to fighting corruption and improving our community makes him the candidate we need. I support Raymond Liu for California State Senate because he\u2019s dedicated to creating a better future for all of us.',
  },
  {
    photo: '/mcgrath.jpg',
    width: 405,
    height: 300,
    name: 'Rev. Matthew McGrath',
    title: 'Community Leader',
    quote:
      'I believe in leaders who serve with integrity, compassion, and a genuine commitment to the well-being of their community. Raymond Liu embodies these values in his run for California State Senate. His dedication to addressing corruption, supporting those in need, and restoring trust in our government is exactly what California requires. I wholeheartedly endorse Raymond Liu, knowing he will lead with the moral clarity and ethical conviction that California deserves.',
  },
  {
    photo: '/ryan.jpg',
    width: 375,
    height: 500,
    name: 'Ryan Sixberry',
    title: 'Small Business Owner, Card Art',
    quote:
      'As the owner of a small hobby store in the Bay, I\u2019ve seen firsthand how challenging it can be to run a small business. Raymond understands the struggles we face and is committed to supporting local businesses by promoting a fair and honest government. His focus on tackling corruption and improving the local economy makes him the right choice for California State Senate. I fully endorse Raymond Liu, confident that he will help small businesses like mine thrive.',
  },
];

/* ─── Page Component ─────────────────────────────────── */

export default function EndorsementsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Page>
      {/* ── Hero ── */}
      <Hero>
        <HeroInner>
          <HeroEyebrow>CA State Senate · District 10</HeroEyebrow>
          <HeroTitle>Endorsements</HeroTitle>
          <HeroSubtitle>
            Support from educators, engineers, students, and community leaders
            across the Bay Area.
          </HeroSubtitle>
          <BadgeRow>
            <Badge>Teachers</Badge>
            <Badge>Engineers</Badge>
            <Badge>Students</Badge>
            <Badge>Community Leaders</Badge>
          </BadgeRow>
        </HeroInner>
      </Hero>

      {/* ── Endorsements Grid ── */}
      <EndorsementsSection>
        <SectionHeader>
          <Accent aria-hidden="true" />
          <div>
            <SectionLabel>Voices of Support</SectionLabel>
            <SectionTitle>Why People Endorse Raymond</SectionTitle>
          </div>
        </SectionHeader>
        <Grid>
          {endorsers.map((e) => (
            <EndorseCard key={e.name}>
              <QuoteBody>
                <QuoteMark aria-hidden="true">&ldquo;</QuoteMark>
                <QuoteText>{e.quote}</QuoteText>
              </QuoteBody>
              <CardDivider />
              <CardFooter>
                <Avatar
                  src={e.photo}
                  alt={`Photo of ${e.name}`}
                  width={52}
                  height={52}
                />
                <PersonInfo>
                  <PersonName>{e.name}</PersonName>
                  <PersonTitle>{e.title}</PersonTitle>
                </PersonInfo>
              </CardFooter>
            </EndorseCard>
          ))}
        </Grid>
      </EndorsementsSection>
    </Page>
  );
}
