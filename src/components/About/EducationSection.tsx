import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import personalInfo from '../../data/personalInfo.json';

const EducationContainer = styled.div`
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const EducationCard = styled(motion.div)`
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
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.primary};
  }
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const EducationIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
`;

const EducationInfo = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Institution = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Duration = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Grade = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CertificationsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const CertificationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: ${({ theme }) => theme.transitions.fast};
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const CertificationIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.gradients.accent};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin: 0 auto ${({ theme }) => theme.spacing.md};
`;

const CertificationTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CertificationProvider = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const EducationSection: React.FC = () => {
  const { education } = personalInfo;

  const certifications = [
    {
      title: 'Problem Solving (DSA)',
      provider: 'HackerRank',
      icon: '🏆'
    },
    {
      title: 'Web Developer Bootcamp',
      provider: 'Udemy',
      icon: '🎓'
    }
  ];

  return (
    <EducationContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My academic journey and professional certifications
        </SectionSubtitle>
      </SectionHeader>

      <EducationGrid>
        {education.map((edu, index) => (
          <EducationCard
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <EducationHeader>
              <EducationIcon>
                {index === 0 ? '🎓' : index === 1 ? '🏆' : '📜'}
              </EducationIcon>
              <EducationInfo>
                <Degree>{edu.degree}</Degree>
                <Institution>{edu.institution}</Institution>
                <Duration>{edu.duration}</Duration>
              </EducationInfo>
            </EducationHeader>
            
            <Grade>
              <span>📊</span>
              <span>{edu.grade}</span>
            </Grade>
          </EducationCard>
        ))}
      </EducationGrid>

      <CertificationsSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2rem', marginBottom: '2rem' }}
        >
          Certifications
        </SectionTitle>
        
        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <CertificationIcon>{cert.icon}</CertificationIcon>
              <CertificationTitle>{cert.title}</CertificationTitle>
              <CertificationProvider>{cert.provider}</CertificationProvider>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </CertificationsSection>
    </EducationContainer>
  );
};

export default EducationSection;
