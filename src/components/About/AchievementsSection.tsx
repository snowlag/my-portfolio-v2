import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import personalInfo from '../../data/personalInfo.json';

const AchievementsContainer = styled.div`
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

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const AchievementCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: ${({ theme }) => theme.transitions.fast};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.accent};
  }
`;

const AchievementIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.gradients.accent};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const AchievementTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const AchievementDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const VolunteeringSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const VolunteeringGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const VolunteeringCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const VolunteeringHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const VolunteeringIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const VolunteeringInfo = styled.div`
  flex: 1;
`;

const VolunteeringRole = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const VolunteeringOrganization = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const VolunteeringDuration = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const VolunteeringDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const PublicationsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const PublicationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PublicationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PublicationIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.gradients.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const PublicationTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const PublicationJournal = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PublicationDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PublicationLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const AchievementsSection: React.FC = () => {
  const { achievements, volunteering, publications } = personalInfo;

  return (
    <AchievementsContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Recognition
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Milestones and contributions that have shaped my journey
        </SectionSubtitle>
      </SectionHeader>

      <AchievementsGrid>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <AchievementIcon>
              {index === 0 ? '🏆' : index === 1 ? '📜' : '🏊‍♂️'}
            </AchievementIcon>
            <AchievementTitle>
              {index === 0 ? 'Outstanding Developer' : 
               index === 1 ? 'Certificate of Appreciation' : 
               'Sports Achievement'}
            </AchievementTitle>
            <AchievementDescription>{achievement}</AchievementDescription>
          </AchievementCard>
        ))}
      </AchievementsGrid>

      <VolunteeringSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2rem', marginBottom: '2rem' }}
        >
          Volunteering & Leadership
        </SectionTitle>
        
        <VolunteeringGrid>
          {volunteering.map((volunteer, index) => (
            <VolunteeringCard
              key={volunteer.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <VolunteeringHeader>
                <VolunteeringIcon>
                  {index === 0 ? '👨‍💻' : index === 1 ? '🎓' : '📚'}
                </VolunteeringIcon>
                <VolunteeringInfo>
                  <VolunteeringRole>{volunteer.role}</VolunteeringRole>
                  <VolunteeringOrganization>{volunteer.organization}</VolunteeringOrganization>
                  <VolunteeringDuration>{volunteer.duration}</VolunteeringDuration>
                </VolunteeringInfo>
              </VolunteeringHeader>
              <VolunteeringDescription>{volunteer.description}</VolunteeringDescription>
            </VolunteeringCard>
          ))}
        </VolunteeringGrid>
      </VolunteeringSection>

      <PublicationsSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2rem', marginBottom: '2rem' }}
        >
          Publications
        </SectionTitle>
        
        {publications.map((publication, index) => (
          <PublicationCard
            key={publication.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <PublicationHeader>
              <PublicationIcon>📄</PublicationIcon>
              <div>
                <PublicationTitle>{publication.title}</PublicationTitle>
                <PublicationJournal>{publication.journal}</PublicationJournal>
              </div>
            </PublicationHeader>
            <PublicationDescription>{publication.description}</PublicationDescription>
            <PublicationLink
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📖</span>
              Read Paper
            </PublicationLink>
          </PublicationCard>
        ))}
      </PublicationsSection>
    </AchievementsContainer>
  );
};

export default AchievementsSection;
