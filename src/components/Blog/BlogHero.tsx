import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.gradients.background};
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  text-align: center;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin: 0 auto;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  opacity: 0.1;
`;

const BlogHero: React.FC = () => {
  const stats = [
    { number: '3+', label: 'Articles Published' },
    { number: '5+', label: 'Topics Covered' },
    { number: '100%', label: 'Original Content' },
    { number: '∞', label: 'Knowledge Shared' }
  ];

  return (
    <HeroContainer>
      <BackgroundElements>
        <FloatingElement
          style={{ top: '15%', left: '10%' }}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <FloatingElement
          style={{ top: '25%', right: '15%' }}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        <FloatingElement
          style={{ bottom: '35%', left: '20%' }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4
          }}
        />
        <FloatingElement
          style={{ bottom: '15%', right: '10%' }}
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </BackgroundElements>

      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blog & Insights
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sharing knowledge, experiences, and insights from my journey in software development. 
          Explore technical articles, tutorials, and thoughts on modern web development.
        </Subtitle>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              whileHover={{ scale: 1.05 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </HeroContent>
    </HeroContainer>
  );
};

export default BlogHero;
