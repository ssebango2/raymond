'use client';

import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface NavLinksProps {
  open: boolean;
}

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #333;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 1300px) {
    display: flex;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  font-family: 'Lusitana', serif;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #d32f2f;
`;

const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  list-style: none;

  @media (max-width: 1300px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #ffffff;
    transition: all 0.3s ease-in-out;
    padding: 1rem 0;
    z-index: 999;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  position: relative;

  @media (max-width: 1300px) {
    margin: 1rem 0;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #000000;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <NavContainer>
      <Logo>
        <Link href="/" passHref>
          <Image
            src="/newLogo.jpg"
            alt="Raymond Liu for Fremont City Council"
            width={180}
            height={40}
          />
        </Link>
      </Logo>
      <HamburgerIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <NavLinks open={mobileMenuOpen}>
        <NavItem onClick={handleLinkClick}>
          <Link href="/">HOME</Link>
        </NavItem>
        <NavItem onClick={handleLinkClick}>
          <Link href="/about">ABOUT</Link>
        </NavItem>
        <NavItem onClick={handleLinkClick}>
          <Link href="/endorsements">ENDORSEMENTS</Link>
        </NavItem>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
