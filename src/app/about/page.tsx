'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {
  ShieldCheckIcon,
  HomeIcon,
  ScaleIcon,
  MegaphoneIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

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

/* ─── Bio Split ─────────────────────────────────────── */

const Split = styled(Section)`
  padding: 3rem 0;
  background: #f3f6fb;
`;

const SplitGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 2.25rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const PhotoWrap = styled.div`
  position: relative;
`;

const Photo = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 22px 54px rgba(10, 43, 97, 0.22);
  border: 1px solid rgba(10, 43, 97, 0.1);
  display: block;
`;

const PhotoCaption = styled.div`
  margin-top: 0.7rem;
  text-align: center;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(10, 43, 97, 0.45);
`;

const BioCard = styled.div`
  background: #fff;
  border-radius: 16px;
  border: 1px solid rgba(10, 43, 97, 0.1);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.06);
  padding: 2rem;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.22rem 0.65rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(10, 43, 97, 0.07);
  color: #0a2b61;
  border: 1px solid rgba(10, 43, 97, 0.13);
`;

const H2 = styled.h2`
  font-size: 1.75rem;
  line-height: 1.14;
  margin: 0 0 0.9rem;
  color: #0a2b61;
  font-weight: 800;
`;

const P = styled.p`
  margin: 0 0 0.9rem;
  color: #2f3640;
  line-height: 1.62;

  &:last-child {
    margin-bottom: 0;
  }
`;

/* ─── Background / Credentials ──────────────────────── */

const BgSection = styled(Section)`
  background: #fff;
  padding: 2.75rem 0;
  border-top: 1px solid rgba(10, 43, 97, 0.08);
  border-bottom: 1px solid rgba(10, 43, 97, 0.08);
`;

const SectionHeader = styled(Container)`
  margin-bottom: 1.5rem;
`;

const SectionLabel = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(10, 43, 97, 0.48);
  margin-bottom: 0.35rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.65rem;
  font-weight: 800;
  color: #0a2b61;
  margin: 0;
  line-height: 1.2;
`;

const BgGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.15rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const BgCard = styled.div`
  padding: 1.5rem;
  border-radius: 14px;
  border: 1px solid rgba(10, 43, 97, 0.1);
  background: #f8fafd;
`;

const BgIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(10, 43, 97, 0.09);
  display: grid;
  place-items: center;
  color: #0a2b61;
  margin-bottom: 0.9rem;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const BgCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #0a2b61;
  margin: 0 0 0.65rem;
`;

const BgList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const BgListItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
  color: #2f3640;
  font-size: 0.9rem;
  line-height: 1.5;

  &::before {
    content: '·';
    font-size: 1.3rem;
    color: #0a2b61;
    line-height: 0.9;
    flex-shrink: 0;
  }
`;

/* ─── Delivering for Fremont ─────────────────────────── */

const Delivering = styled(Section)`
  padding: 2.75rem 0 2.5rem;
  background: #f3f6fb;
`;

const DeliveringHeader = styled(Container)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Accent = styled.div`
  width: 4px;
  height: 2.2rem;
  border-radius: 2px;
  background: #0a2b61;
  flex-shrink: 0;
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const PriorityCard = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(10, 43, 97, 0.1);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.05);
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition:
    box-shadow 160ms ease,
    transform 160ms ease;

  &:hover {
    box-shadow: 0 14px 38px rgba(10, 43, 97, 0.13);
    transform: translateY(-2px);
  }
`;

const PriorityIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(10, 43, 97, 0.08);
  display: grid;
  place-items: center;
  color: #0a2b61;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const PriorityTitle = styled.div`
  font-weight: 800;
  font-size: 0.95rem;
  color: #0a2b61;
  line-height: 1.3;
`;

const PriorityText = styled.div`
  color: #2f3640;
  line-height: 1.5;
  font-size: 0.9rem;
`;

const PullQuoteWrap = styled(Container)`
  margin-top: 1.5rem;
`;

const QuoteCard = styled.div`
  background: #0a2b61;
  border-radius: 16px;
  padding: 1.6rem 2rem;
  color: #fff;
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const QuoteMark = styled.div`
  font-size: 4rem;
  line-height: 0.7;
  font-family: Georgia, serif;
  color: rgba(255, 255, 255, 0.22);
  flex-shrink: 0;
  margin-top: 0.2rem;
  user-select: none;
`;

const QuoteText = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.58;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
`;

/* ─── Why I'm Running (Senate) ───────────────────────── */

const Senate = styled(Section)`
  background: linear-gradient(155deg, #0e3374 0%, #061e47 100%);
  padding: 3.25rem 0;
`;

const SenateSplitGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.75rem;
  align-items: start;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SenateLabel = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 0.6rem;
`;

const SenateH2 = styled.h2`
  font-size: 1.85rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 1.1rem;
  line-height: 1.14;

  @media (max-width: 540px) {
    font-size: 1.55rem;
  }
`;

const SenateP = styled.p`
  margin: 0 0 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.62;
  font-size: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const PriorityListHeader = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 0.75rem;
`;

const PriorityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const PriorityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CheckIconWrap = styled.div`
  flex-shrink: 0;
  color: #f4c542;
  margin-top: 0.05rem;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const PriorityItemText = styled.div`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.48;
  font-weight: 500;
`;

/* ─── Page Component ─────────────────────────────────── */

const senateItems = [
  'Addressing homelessness with effective, measurable solutions',
  'Improving public safety across California communities',
  'Holding government accountable for how taxpayer dollars are spent',
  'Supporting working families facing rising costs of living',
];

export default function AboutPage() {
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
          <HeroTitle>About Raymond Liu</HeroTitle>
          <HeroSubtitle>
            Fremont City Councilmember, District 6 · Lifelong Fremont Resident ·
            Software Engineer
          </HeroSubtitle>
          <BadgeRow>
            <Badge>District 6 Representative</Badge>
            <Badge>Youngest Elected to Fremont City Council</Badge>
            <Badge>UC Davis Computer Science</Badge>
            <Badge>Software Engineer</Badge>
          </BadgeRow>
        </HeroInner>
      </Hero>

      {/* ── Bio Intro Split ── */}
      <Split>
        <SplitGrid>
          <PhotoWrap>
            <Photo
              src="/aboutraymond.jpg"
              alt="Raymond Liu, Fremont City Councilmember and CA State Senate District 10 candidate"
              width={633}
              height={950}
              sizes="(max-width: 900px) 100vw, 42vw"
              priority
            />
            <PhotoCaption>Raymond Liu · District 6 Councilmember</PhotoCaption>
          </PhotoWrap>

          <BioCard>
            <TagRow>
              <Tag>Fremont Native</Tag>
              <Tag>UC Davis Grad</Tag>
              <Tag>Public Servant</Tag>
              <Tag>Software Engineer</Tag>
            </TagRow>
            <H2>Rooted in Fremont. Ready to Lead.</H2>
            <P>
              Raymond Liu is a proud Fremont resident, public servant, and the{' '}
              <strong>
                youngest person ever elected to the Fremont City Council
              </strong>
              . Representing District 6—the community where he grew up—Raymond
              brings a fresh, results-driven perspective focused on
              accountability, public safety, and putting residents first.
            </P>
            <P>
              A product of Fremont&apos;s public schools, Raymond attended
              Horner Jr. High and Irvington High School before earning three
              Associate Degrees at Ohlone College in Math, Natural Sciences, and
              Computer Science. He went on to graduate from{' '}
              <strong>
                UC Davis with a Bachelor&apos;s in Computer Science
              </strong>{' '}
              and has worked professionally as a software engineer since 2019.
            </P>
            <P>
              From a young age, Raymond has been committed to service—whether
              volunteering at community events, organizing Thanksgiving meal
              drives, or serving on nonprofit boards. His work has always
              centered on giving back to the community that shaped him.
            </P>
          </BioCard>
        </SplitGrid>
      </Split>

      {/* ── Background & Credentials ── */}
      <BgSection>
        <SectionHeader>
          <SectionLabel>Background &amp; Credentials</SectionLabel>
          <SectionTitle>Education, Career &amp; Community</SectionTitle>
        </SectionHeader>
        <BgGrid>
          <BgCard>
            <BgIcon aria-hidden="true">
              <AcademicCapIcon />
            </BgIcon>
            <BgCardTitle>Education</BgCardTitle>
            <BgList>
              <BgListItem>Horner Jr. High School</BgListItem>
              <BgListItem>Irvington High School</BgListItem>
              <BgListItem>
                Ohlone College — A.S. in Math, Natural Sciences &amp; Computer
                Science
              </BgListItem>
              <BgListItem>UC Davis — B.S. Computer Science</BgListItem>
            </BgList>
          </BgCard>

          <BgCard>
            <BgIcon aria-hidden="true">
              <BriefcaseIcon />
            </BgIcon>
            <BgCardTitle>Professional Career</BgCardTitle>
            <BgList>
              <BgListItem>Software Engineer (2019 – present)</BgListItem>
              <BgListItem>Fremont City Councilmember, District 6</BgListItem>
              <BgListItem>
                Youngest ever elected to Fremont City Council
              </BgListItem>
            </BgList>
          </BgCard>

          <BgCard>
            <BgIcon aria-hidden="true">
              <HeartIcon />
            </BgIcon>
            <BgCardTitle>Community Service</BgCardTitle>
            <BgList>
              <BgListItem>Community event volunteer</BgListItem>
              <BgListItem>Thanksgiving meal drive organizer</BgListItem>
              <BgListItem>Nonprofit board service</BgListItem>
              <BgListItem>
                Lifelong advocate for District 6 residents
              </BgListItem>
            </BgList>
          </BgCard>
        </BgGrid>
      </BgSection>

      {/* ── Delivering for Fremont ── */}
      <Delivering>
        <DeliveringHeader>
          <Accent aria-hidden="true" />
          <div>
            <SectionLabel style={{ marginBottom: '0.2rem' }}>
              Track Record
            </SectionLabel>
            <SectionTitle>Delivering for Fremont</SectionTitle>
          </div>
        </DeliveringHeader>

        <Grid>
          <PriorityCard>
            <PriorityIcon aria-hidden="true">
              <ShieldCheckIcon />
            </PriorityIcon>
            <PriorityTitle>Public Safety</PriorityTitle>
            <PriorityText>
              Advocating for stronger policies to address rising crime and
              ensure neighborhoods feel safe.
            </PriorityText>
          </PriorityCard>

          <PriorityCard>
            <PriorityIcon aria-hidden="true">
              <HomeIcon />
            </PriorityIcon>
            <PriorityTitle>Homelessness</PriorityTitle>
            <PriorityText>
              Pushing for practical, results-oriented solutions to address the
              growing homelessness crisis.
            </PriorityText>
          </PriorityCard>

          <PriorityCard>
            <PriorityIcon aria-hidden="true">
              <ScaleIcon />
            </PriorityIcon>
            <PriorityTitle>Government Accountability</PriorityTitle>
            <PriorityText>
              Fighting for transparency and reform in the wake of corruption
              scandals and mismanagement at City Hall.
            </PriorityText>
          </PriorityCard>

          <PriorityCard>
            <PriorityIcon aria-hidden="true">
              <MegaphoneIcon />
            </PriorityIcon>
            <PriorityTitle>Community Engagement</PriorityTitle>
            <PriorityText>
              Ensuring that every resident&apos;s voice is heard and represented
              in local decision-making.
            </PriorityText>
          </PriorityCard>
        </Grid>

        <PullQuoteWrap>
          <QuoteCard>
            <QuoteMark aria-hidden="true">&ldquo;</QuoteMark>
            <QuoteText>
              Raymond has built a reputation as an independent voice willing to
              speak up, ask tough questions, and challenge the status quo when
              it fails the people of Fremont.
            </QuoteText>
          </QuoteCard>
        </PullQuoteWrap>
      </Delivering>

      {/* ── Why I'm Running ── */}
      <Senate>
        <SenateSplitGrid>
          <div>
            <SenateLabel>State Senate · District 10</SenateLabel>
            <SenateH2>Why I&apos;m Running for State Senate</SenateH2>
            <SenateP>
              Raymond is running for State Senate because the challenges facing
              Fremont and the broader Bay Area cannot be solved at the local
              level alone.
            </SenateP>
            <SenateP>
              Families across California are struggling with rising costs,
              increasing crime, and a growing homelessness crisis. Yet too
              often, state leadership has failed to deliver real solutions or
              accountability.
            </SenateP>
            <SenateP>
              Raymond is stepping up to bring a new generation of leadership to
              Sacramento—one focused on results, transparency, and{' '}
              <strong style={{ color: '#fff' }}>
                putting people over politics
              </strong>
              .
            </SenateP>
          </div>

          <div>
            <PriorityListHeader>State Senate Priorities</PriorityListHeader>
            <PriorityList>
              {senateItems.map((item) => (
                <PriorityItem key={item}>
                  <CheckIconWrap aria-hidden="true">
                    <CheckCircleIcon />
                  </CheckIconWrap>
                  <PriorityItemText>{item}</PriorityItemText>
                </PriorityItem>
              ))}
            </PriorityList>
          </div>
        </SenateSplitGrid>
      </Senate>
    </Page>
  );
}
