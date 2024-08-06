'use client';

import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <NavContainer>
      <Logo>
        <Image
          src="/newLogo.jpg"
          alt="Raymond Liu Logo"
          width={180}
          height={40}
        />
      </Logo>
      <NavLinks>
        <NavItem>
          <Link href="/">HOME</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">ABOUT</Link>
        </NavItem>
        <NavItem>
          <Link href="/endorsements">ENDORSEMENTS</Link>
        </NavItem>
        <NavItem>
          <Link href="/FAQ">FAQ</Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">CONTACT</Link>
        </NavItem>
        <NavItem>
          <Link href="/donate">DONATE</Link>
        </NavItem>
        <NavItem onClick={() => setDropdownOpen(!dropdownOpen)}>
          <MoreContainer>
            MORE{' '}
            <FontAwesomeIcon
              icon={dropdownOpen ? faChevronUp : faChevronDown}
            />
          </MoreContainer>
          {dropdownOpen && (
            <DropdownMenu>
              <DropdownItem>
                <Link href="/more1">WHERE IS DISTRICT 6?</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/more2">REGISTER TO VOTE</Link>
              </DropdownItem>
            </DropdownMenu>
          )}
        </NavItem>
      </NavLinks>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  font-family: 'Lusitana', serif; /* Ensure the correct font is applied */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #d32f2f;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  position: relative;

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

  svg {
    margin-left: 0.5rem; /* Add some space between text and arrow */
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 2rem;
  right: 0; /* Align the dropdown to the right edge of the parent */
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 1rem;
  z-index: 1000;
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

export default Navbar;
