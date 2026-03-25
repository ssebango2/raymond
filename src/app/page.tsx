'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import {
  BuildingLibraryIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

const Page = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  background: #0a2b61;
`;

/* ─── Hero ─────────────────────────────────────────── */

const Hero = styled.section`
  width: 100%;
  background: #0a2b61;
  padding: 0;
`;

const HeroInner = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const HeroBannerImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const HeroActions = styled.div`
  background: linear-gradient(180deg, #0a2b61 0%, #061e47 100%);
  padding: 1rem 1.25rem 1.5rem;
  display: flex;
  justify-content: center;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const Button = styled(Link)<{ $variant?: 'volunteer' | 'ghost' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 1.25rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.85rem;
  transition:
    transform 140ms ease,
    box-shadow 140ms ease;

  ${({ $variant }) =>
    $variant === 'ghost'
      ? `
    background: rgba(255,255,255,0.1);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.22);
    box-shadow: 0 8px 20px rgba(0,0,0,0.16);
  `
      : `
    background: #c62828;
    color: #fff;
    box-shadow: 0 10px 24px rgba(0,0,0,0.22);
    border: 1px solid rgba(255,255,255,0.14);
  `}

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.26);
  }

  &:active {
    transform: translateY(0);
  }
`;

/* ─── Priorities ────────────────────────────────────── */

const Priorities = styled.section`
  width: 100%;
  padding: 2.75rem 0 2.5rem;
  background: #f3f6fb;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

const PrioritiesHeader = styled(Container)`
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
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #0a2b61;
  display: grid;
  place-items: center;
  color: #fff;
  flex-shrink: 0;

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

/* ─── Page Component ─────────────────────────────────── */

export default function HomePage() {
  return (
    <Page>
      {/* ── Hero ── */}
      <Hero>
        <HeroInner>
          <HeroBannerImage
            src="/home-hero-hd.jpg"
            alt="Raymond Liu — CA State Senate District 10"
            width={2048}
            height={1092}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </HeroInner>
        <HeroActions>
          <Actions>
            <Button href="/about" $variant="ghost">
              About Raymond
            </Button>
          </Actions>
        </HeroActions>
      </Hero>

      {/* ── Priorities ── */}
      <Priorities>
        <PrioritiesHeader>
          <Accent aria-hidden="true" />
          <div>
            <SectionLabel>State Senate · District 10</SectionLabel>
            <SectionTitle>Priorities for District 10</SectionTitle>
          </div>
        </PrioritiesHeader>
        <Grid>
          <PriorityCard>
            <PriorityIcon aria-hidden="true">
              <BuildingLibraryIcon />
            </PriorityIcon>
            <PriorityTitle>Affordable Housing</PriorityTitle>
            <PriorityText>
              Build more homes and stop speculation that drives up prices.
            </PriorityText>
          </PriorityCard>
          <PriorityCard>
            <PriorityIcon aria-hidden="true">
              <BriefcaseIcon />
            </PriorityIcon>
            <PriorityTitle>Small Businesses</PriorityTitle>
            <PriorityText>
              Cut red tape and support local entrepreneurs to grow.
            </PriorityText>
          </PriorityCard>
          <PriorityCard>
            <PriorityIcon aria-hidden="true">
              <ShieldCheckIcon />
            </PriorityIcon>
            <PriorityTitle>Public Safety</PriorityTitle>
            <PriorityText>
              Keep neighborhoods safe with smart, accountable solutions.
            </PriorityText>
          </PriorityCard>
          <PriorityCard>
            <PriorityIcon aria-hidden="true">
              <ChartBarIcon />
            </PriorityIcon>
            <PriorityTitle>Economic Opportunity</PriorityTitle>
            <PriorityText>
              Create pathways to good jobs and a stronger local economy.
            </PriorityText>
          </PriorityCard>
        </Grid>
      </Priorities>
    </Page>
  );
}
