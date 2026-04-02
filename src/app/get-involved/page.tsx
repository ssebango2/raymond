'use client';

import styled from 'styled-components';
import { HandRaisedIcon } from '@heroicons/react/24/outline';

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

/* ─── Form Section ──────────────────────────────────── */

const FormSection = styled(Section)`
  padding: 3.5rem 0 4rem;
`;

const FormHeader = styled(Container)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
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

const FormCard = styled(Container)``;

const FormWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  border: 1px solid rgba(10, 43, 97, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.07);
  overflow: hidden;
`;

const FormIframe = styled.iframe`
  width: 100%;
  min-height: 900px;
  border: none;
  display: block;
`;

/* ─── Ways to Help ──────────────────────────────────── */

const WaysSection = styled(Section)`
  padding: 0 0 4rem;
`;

const WaysGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const WayCard = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(10, 43, 97, 0.1);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.05);
  padding: 1.6rem 1.4rem;
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

const WayIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #0a2b61;
  display: grid;
  place-items: center;
  color: #fff;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const WayTitle = styled.div`
  font-weight: 800;
  font-size: 1rem;
  color: #0a2b61;
  line-height: 1.3;
`;

const WayText = styled.div`
  color: #2f3640;
  line-height: 1.55;
  font-size: 0.92rem;
`;

const WaysHeader = styled(Container)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export default function GetInvolvedPage() {
  return (
    <Page>
      {/* ── Hero ── */}
      <Hero>
        <HeroInner>
          <HeroEyebrow>Raymond Liu · CA State Senate District 10</HeroEyebrow>
          <HeroTitle>Get Involved</HeroTitle>
          <HeroSubtitle>
            Join our movement to build a stronger, more equitable District 10.
            Every volunteer, door knock, and phone call makes a difference.
          </HeroSubtitle>
        </HeroInner>
      </Hero>

      {/* ── Ways to Help ── */}
      <WaysSection style={{ paddingTop: '3rem' }}>
        <WaysHeader>
          <Accent aria-hidden="true" />
          <div>
            <SectionLabel>Make an Impact</SectionLabel>
            <SectionTitle>Ways to Help</SectionTitle>
          </div>
        </WaysHeader>
        <WaysGrid>
          <WayCard>
            <WayIcon aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </WayIcon>
            <WayTitle>Canvass the Neighborhood</WayTitle>
            <WayText>
              Go door-to-door with fellow volunteers to connect with voters and
              share Raymond&apos;s vision for District 10.
            </WayText>
          </WayCard>
          <WayCard>
            <WayIcon aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12.5 19.79 19.79 0 0 1 1.08 3.81 2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
            </WayIcon>
            <WayTitle>Phone Bank</WayTitle>
            <WayText>
              Call voters from the comfort of your home. We provide scripts,
              training, and all the tools you need to make an impact.
            </WayText>
          </WayCard>
          <WayCard>
            <WayIcon aria-hidden="true">
              <HandRaisedIcon />
            </WayIcon>
            <WayTitle>Volunteer at Events</WayTitle>
            <WayText>
              Help at rallies, town halls, and community outreach events
              throughout District 10 to build grassroots momentum.
            </WayText>
          </WayCard>
        </WaysGrid>
      </WaysSection>

      {/* ── Sign-Up Form ── */}
      <FormSection style={{ paddingTop: 0 }}>
        <FormHeader>
          <Accent aria-hidden="true" />
          <div>
            <SectionLabel>Join the Team</SectionLabel>
            <SectionTitle>Volunteer Sign-Up</SectionTitle>
          </div>
        </FormHeader>
        <FormCard>
          <FormWrapper>
            <FormIframe
              src="https://docs.google.com/forms/d/1H6mTxwnekVB2UjzrI5cqN5q0Wg8DfdkVlCbG9kE2Ssw/viewform?embedded=true"
              title="Volunteer Sign-Up Form"
              loading="lazy"
            >
              Loading form…
            </FormIframe>
          </FormWrapper>
        </FormCard>
      </FormSection>
    </Page>
  );
}
