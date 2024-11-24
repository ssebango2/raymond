'use client';

import styled from 'styled-components';
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
  background-image: url('/senate-modified.jpg');
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

const ContentContainer = styled.div`
  width: 80%;
  max-width: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
`;

const EmailIcon = styled.a`
  margin-top: 1rem; /* Add space between the text and the image */
  img {
    width: 100px; /* Adjust size of the icon */
    height: 100px;
  }

  &:hover img {
    opacity: 0.8; /* Slight opacity on hover */
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #003f91;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #000112;
  margin-bottom: 2rem;
`;

const FormSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.75rem;
  background-color: #0a2b61;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #002f72;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #1877f2; /* Facebook blue color on hover */
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

/* const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };*/

{
  /* 
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
        />
        <Button type="submit">Send</Button>
      </Form>.
      */
}

export default function ContactPage() {
  return (
    <PageContainer>
      <Header>
        <HeaderText>Contact Raymond</HeaderText>
      </Header>
      <ContentContainer>
        <Subtitle>
          Feel free to email me at{' '}
          <StyledLink href="mailto:raymond@electraymondliu.com  ">
            raymond@electraymondliu.com
          </StyledLink>{' '}
          or click the link below and contact me with questions or volunteer
          opportunities to support my race for the District 6 Fremont City
          Council seat.
        </Subtitle>
        <EmailIcon href="mailto:raymond@electraymondliu.com  ">
          <Image src="/mail.jpg" alt="Email" width={640} height={640} />
        </EmailIcon>
      </ContentContainer>
      <Footer>
        <FooterContent>
          <LogoContainer>
            <Image
              src="/logo2.jpg"
              alt="Campaign Logo"
              width={450}
              height={100}
              priority={false}
            />
            <SocialIcon
              href="https://www.facebook.com/profile.php?id=61567076660493&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialIcon>
          </LogoContainer>
          <p>
            Paid for by RAYMOND LIU FREMONT CITY COUNCIL DISTRICT 6 CANDIDATE
            2024, FPPC #: 1475266
          </p>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
