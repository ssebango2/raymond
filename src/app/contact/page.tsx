'use client';

import styled from 'styled-components';
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
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
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
      </Form>
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
          <Image
            src="/logo2.jpg"
            alt="Campaign Logo"
            width={450}
            height={100}
            priority={false} // Lazy loads the image
          />
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}