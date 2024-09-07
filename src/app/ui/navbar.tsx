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

  @media (max-width: 1150px) {
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

  @media (max-width: 1150px) {
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

  @media (max-width: 1150px) {
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

const MoreContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #000000;
  font-size: 1.2rem;
  font-family: 'Lusitana', serif;

  @media (max-width: 1150px) {
    justify-content: center;
    width: 100%; /* Ensures it takes full width on mobile */
  }

  svg {
    margin-left: 0.5rem; /* Add some space between text and arrow */
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 2rem;
  right: 0;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 1rem;
  z-index: 1000;

  @media (max-width: 1150px) {
    position: static;
    box-shadow: none;
    padding: 0.5rem 0;
  }
`;

const DropdownItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    text-decoration: none;
    color: #000000;

    &:hover {
      text-decoration: underline;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <NavContainer>
      <Logo>
        <Image
          src="/newLogo.jpg"
          alt="Raymond Liu for Fremont City Council"
          width={180}
          height={40}
        />
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
        <NavItem onClick={handleLinkClick}>
          <Link href="/FAQ">FAQ</Link>
        </NavItem>
        <NavItem onClick={handleLinkClick}>
          <Link href="/contact">CONTACT</Link>
        </NavItem>
        {/*}
        <NavItem onClick={handleLinkClick}>
          <Link href="/donate">DONATE</Link>
        </NavItem> 
  */}
        <NavItem onClick={() => setDropdownOpen(!dropdownOpen)}>
          <MoreContainer>MORE </MoreContainer>
          {dropdownOpen && (
            <DropdownMenu>
              <DropdownItem onClick={handleLinkClick}>
                <Link href="/more1">WHERE IS DISTRICT 6?</Link>
              </DropdownItem>
              <DropdownItem onClick={handleLinkClick}>
                <Link href="/more2">REGISTER TO VOTE</Link>
              </DropdownItem>
            </DropdownMenu>
          )}
        </NavItem>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
