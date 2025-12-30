import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import personalInfo from '../../data/personalInfo.json';

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ProjectPlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: ${({ theme }) => theme.transitions.fast};

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechTag = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textMuted};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    transform: scale(1.05);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};
  flex: 1;
  justify-content: center;

  &.primary {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid ${({ theme }) => theme.colors.border};

    &:hover {
      background: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.text};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProjectStatus = styled.div<{ $featured: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ $featured, theme }) => 
    $featured ? theme.colors.accent : theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  z-index: 2;
`;

const ProjectsGridComponent: React.FC = () => {
  const { projects } = personalInfo;

  return (
    <ProjectsContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my portfolio of innovative projects and creative solutions
        </SectionSubtitle>
      </SectionHeader>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectStatus $featured={index < 2}>
              {index < 2 ? 'Featured' : 'Project'}
            </ProjectStatus>
            
            <ProjectImage>
              <ProjectPlaceholder>
                {project.title.charAt(0)}
              </ProjectPlaceholder>
              <ProjectOverlay
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  style={{ 
                    color: 'white', 
                    fontSize: '1.5rem',
                    textAlign: 'center'
                  }}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  View Project
                </motion.div>
              </ProjectOverlay>
            </ProjectImage>
            
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.techStack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <ProjectLinks>
                <ProjectLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🌐</span>
                  Live Demo
                </ProjectLink>
                <ProjectLink
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>📁</span>
                  Source Code
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsGridComponent;
