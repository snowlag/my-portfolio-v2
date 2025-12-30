import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroSection from '../components/Home/HeroSection';
import ExperienceSection from '../components/About/ExperienceSection';
import SkillsSection from '../components/About/SkillsSection';
import EducationSection from '../components/About/EducationSection';
import AchievementsSection from '../components/About/AchievementsSection';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import ContactPreview from '../components/Home/ContactPreview';
import CSSBackground from '../components/animations/CSSBackground';

const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Section = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  position: relative;
  
  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.backgroundLight};
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <CSSBackground />
      <HeroSection />
      
      <Section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SkillsSection />
      </Section>

      <Section
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <EducationSection />
      </Section>

      <Section
        id="work"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ExperienceSection />
      </Section>

      <Section
        id="achievements"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <AchievementsSection />
      </Section>

      <Section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <ProjectsGrid />
      </Section>

      <Section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <ContactPreview />
      </Section>

    </HomeContainer>
  );
};

export default Home;
