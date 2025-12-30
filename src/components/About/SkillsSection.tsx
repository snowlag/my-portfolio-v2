import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import personalInfo from '../../data/personalInfo.json';

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: ${({ theme }) => theme.transitions.fast};
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const CategoryInfo = styled.div`
  flex: 1;
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const CategoryDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    transform: scale(1.02);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SkillName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: inherit;
`;



const SkillsSection: React.FC = () => {
  const { skills } = personalInfo;


  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      description: 'Creating beautiful and responsive user interfaces',
      skills: skills.frontend || [],
      color: '#6366f1'
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      description: 'Building robust server-side applications and APIs',
      skills: skills.backend || [],
      color: '#f59e0b'
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      description: 'Deploying and managing cloud infrastructure',
      skills: skills.cloud || [],
      color: '#10b981'
    },
    {
      title: 'Testing & Quality',
      icon: '🧪',
      description: 'Ensuring code quality and reliability',
      skills: skills.testing || [],
      color: '#8b5cf6'
    },
    {
      title: 'AI & Automation',
      icon: '🤖',
      description: 'AI-assisted development and workflow automation',
      skills: skills.ai || [],
      color: '#ec4899'
    }
  ].filter(category => category.skills && category.skills.length > 0);


  return (
    <SkillsContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A comprehensive toolkit for building modern, scalable applications
        </SectionSubtitle>
      </SectionHeader>

      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <CategoryHeader>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryInfo>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDescription>{category.description}</CategoryDescription>
              </CategoryInfo>
            </CategoryHeader>
            
            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (index * 0.1) + (skillIndex * 0.05) 
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <SkillName>{skill}</SkillName>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default SkillsSection;
