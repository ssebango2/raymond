'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import {
  BuildingOffice2Icon,
  BriefcaseIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

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

const Hero = styled(Section)`
  background: #0a2b61;
  padding: 0;
`;

const HeroInner = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const HeroBanner = styled.div`
  width: 100%;
  background: #0a2b61;
`;

const HeroBannerImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const HeroActions = styled.div`
  background: #0a2b61;
  padding: 0.9rem 1.25rem 1.25rem;
  display: flex;
  justify-content: center;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Button = styled(Link)<{
  $variant?: 'donate' | 'volunteer' | 'neutral' | 'blue';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.85rem;
  transition:
    transform 140ms ease,
    box-shadow 140ms ease,
    background-color 140ms ease,
    color 140ms ease,
    border-color 140ms ease;

  ${({ $variant }) => {
    switch ($variant) {
      case 'volunteer':
        return `
          background: #c62828;
          color: #fff;
          box-shadow: 0 10px 24px rgba(0,0,0,0.22);
          border: 1px solid rgba(255,255,255,0.14);
        `;
      case 'neutral':
        return `
          background: #e6e9ef;
          color: #0a2b61;
          border: 1px solid rgba(10,43,97,0.18);
          box-shadow: 0 10px 24px rgba(0,0,0,0.14);
        `;
      case 'blue':
        return `
          background: #1f3f9a;
          color: #fff;
          box-shadow: 0 10px 24px rgba(0,0,0,0.18);
          border: 1px solid rgba(255,255,255,0.12);
        `;
      case 'donate':
      default:
        return `
          background: #f4c542;
          color: #0a2b61;
          box-shadow: 0 10px 26px rgba(0,0,0,0.22);
          border: 1px solid rgba(0,0,0,0.08);
        `;
    }
  }}

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.26);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Split = styled(Section)`
  padding: 2rem 0;
  background: #f3f6fb;
`;

const SplitGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Photo = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 18px 45px rgba(10, 43, 97, 0.18);
  border: 1px solid rgba(10, 43, 97, 0.1);
`;

const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(10, 43, 97, 0.12);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.06);
  padding: 1.6rem;
`;

const H2 = styled.h2`
  font-size: 1.85rem;
  line-height: 1.12;
  margin-bottom: 0.75rem;
  color: #0a2b61;
`;

const P = styled.p`
  color: #2f3640;
  line-height: 1.55;
`;

const Results = styled(Section)`
  background: #153a86;
  padding: 0;
`;

const ResultsInner = styled(Container)`
  padding: 0;
  max-width: 1024px;
`;

const ResultsImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const ResultsActions = styled(Container)`
  padding-top: 0.85rem;
  padding-bottom: 1.35rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Priorities = styled(Section)`
  padding: 2.25rem 0 2.6rem;
  background: #f3f6fb;
`;

const PrioritiesHeader = styled(Container)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.2rem;
`;

const PrioritiesTitle = styled.h3`
  font-size: 2rem;
  color: #0a2b61;
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
  border: 1px solid rgba(10, 43, 97, 0.12);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.06);
  padding: 1.15rem 1.15rem 1.25rem;
  min-height: 170px;
  display: grid;
  gap: 0.6rem;
`;

const PriorityIcon = styled.div`
  width: 40px;
  height: 40px;
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
  font-weight: 900;
  color: #0a2b61;
`;

const PriorityText = styled.div`
  color: #2f3640;
  line-height: 1.45;
  font-size: 0.95rem;
`;

const Join = styled(Section)`
  background: linear-gradient(180deg, #0a2b61 0%, #06224e 100%);
  color: #fff;
  padding: 2.25rem 0;
`;

const JoinGrid = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const JoinTitle = styled.h3`
  font-size: 2rem;
`;

const AmountRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const AmountButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  min-width: 74px;
  padding: 0 0.9rem;
  border-radius: 10px;
  text-decoration: none;
  color: #0a2b61;
  background: #fff;
  font-weight: 900;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.24);
  transition:
    transform 140ms ease,
    box-shadow 140ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
  }
`;

export default function HomePage() {
  return (
    <Page>
      <Hero>
        <HeroInner>
          <HeroBanner>
            <HeroBannerImage
              src="/home-hero-hd.jpg"
              alt="Raymond Liu — CA State Senate District 10"
              width={2048}
              height={1092}
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </HeroBanner>
        </HeroInner>
      </Hero>

      <Split>
        <SplitGrid>
          <Photo
            src="/home-small-logo.jpg"
            alt="Raymond Liu"
            width={975}
            height={650}
            sizes="(max-width: 960px) 100vw, 50vw"
          />
          <Card>
            <H2>A New Generation of Leadership</H2>
            <P>
              Raymond Liu is running to bring practical leadership, integrity,
              and real solutions to our community. As a lifelong resident, he
              understands the challenges families face—rising costs,
              opportunity, and the need for responsible leadership.
            </P>
          </Card>
        </SplitGrid>
      </Split>

      <Results>
        <ResultsInner>
          <ResultsImage
            src="/home-results.jpg"
            alt="Delivering results for Fremont"
            width={2048}
            height={1116}
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </ResultsInner>
      </Results>

      <Priorities>
        <PrioritiesHeader>
          <PrioritiesTitle>Priorities for District 10</PrioritiesTitle>
        </PrioritiesHeader>
        <Grid>
          <PriorityCard>
            <PriorityIcon aria-hidden>
              <BuildingOffice2Icon />
            </PriorityIcon>
            <PriorityTitle>Affordable Housing</PriorityTitle>
            <PriorityText>
              Build more homes and stop speculation that drives up prices.
            </PriorityText>
          </PriorityCard>
          <PriorityCard>
            <PriorityIcon aria-hidden>
              <BriefcaseIcon />
            </PriorityIcon>
            <PriorityTitle>Small Businesses</PriorityTitle>
            <PriorityText>
              Cut red tape and support local entrepreneurs to grow.
            </PriorityText>
          </PriorityCard>
          <PriorityCard>
            <PriorityIcon aria-hidden>
              <ShieldCheckIcon />
            </PriorityIcon>
            <PriorityTitle>Public Safety</PriorityTitle>
            <PriorityText>
              Keep neighborhoods safe with smart, accountable solutions.
            </PriorityText>
          </PriorityCard>
          <PriorityCard>
            <PriorityIcon aria-hidden>
              <ArrowTrendingUpIcon />
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
