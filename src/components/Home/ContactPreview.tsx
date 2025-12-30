import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import personalInfo from '../../data/personalInfo.json';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ContactLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ContactValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ContactCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  text-align: center;
`;

const CTATitle = styled(motion.h3)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CTADescription = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 300px;
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};
  border: 2px solid transparent;

  &.primary {
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: ${({ theme }) => theme.shadows.glow};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.xl};
    }
  }

  &.secondary {
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
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

const ContactPreview: React.FC = () => {
  const { personalInfo: info } = personalInfo;

  const contactItems = [
    {
      icon: '📧',
      label: 'Email',
      value: info.email,
      href: `mailto:${info.email}`
    },
    {
      icon: '📱',
      label: 'Phone',
      value: info.phone[0],
      href: `tel:${info.phone[0]}`
    },
    {
      icon: '📍',
      label: 'Location',
      value: info.location,
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: info.socialLinks.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: info.socialLinks.github,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'HackerRank',
      href: info.socialLinks.hackerrank,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1 4h2v12h-2V6zm-2 2h6v2H9V8zm0 3h6v2H9v-2zm0 3h6v2H9v-2z"/>
        </svg>
      )
    }
  ];

  return (
    <ContactContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to bring your ideas to life? Let's discuss your next project
        </SectionSubtitle>
      </SectionHeader>

      <ContactContent>
        <ContactInfo>
          {contactItems.map((item, index) => (
            <ContactItem
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ContactIcon>{item.icon}</ContactIcon>
              <ContactDetails>
                <ContactLabel>{item.label}</ContactLabel>
                <ContactValue>
                  {item.href !== '#' ? (
                    <a href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </ContactValue>
              </ContactDetails>
            </ContactItem>
          ))}
        </ContactInfo>

        <ContactCTA>
          <CTATitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to Start?
          </CTATitle>
          <CTADescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </CTADescription>
          
          <ButtonGroup>
            {/* <CTAButton
              to="/contact"
              className="primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>💬</span>
              Send Message
            </CTAButton> */}
            <CTAButton
              as="a"
              href={`mailto:${info.email}`}
              className="secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📧</span>
              Email Me
            </CTAButton>
          </ButtonGroup>

          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialLink
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </ContactCTA>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactPreview;
