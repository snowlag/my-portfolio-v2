import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import personalInfo from "../../data/personalInfo.json";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing["2xl"]} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-2px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md}
    0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const BuiltWith = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Footer: React.FC = () => {
  const { personalInfo: info } = personalInfo;

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Ankit Jagdish Joshi</FooterTitle>
          <FooterText>
            Full Stack Developer passionate about creating beautiful, performant
            web applications. Currently based in Porto, Portugal.
          </FooterText>
          <SocialLinks>
            <SocialLink
              href={info.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink
              href={info.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </SocialLink>
            <SocialLink
              href={info.socialLinks.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1 4h2v12h-2V6zm-2 2h6v2H9V8zm0 3h6v2H9v-2zm0 3h6v2H9v-2z" />
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <span>📍</span>
              <span>{info.location}</span>
            </ContactItem>
            <ContactItem>
              <span>📧</span>
              <a href={`mailto:${info.email}`}>{info.email}</a>
            </ContactItem>
            <ContactItem>
              <span>📱</span>
              <a href={`tel:${info.phone[0]}`}>{info.phone[0]}</a>
            </ContactItem>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Technologies</FooterTitle>
          <FooterText>
            React • TypeScript • Node.js • GraphQL • AWS • PostgreSQL • Vue.js •
            Docker • Kubernetes
          </FooterText>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} Ankit Jagdish Joshi. All rights reserved.
        </Copyright>
        <BuiltWith>Built with ❤️ by Ankit Joshi</BuiltWith>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
