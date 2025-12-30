import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import personalInfo from '../../data/personalInfo.json';

const ExperienceContainer = styled.div`
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

// Timeline Styles
const TimelineContainer = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.border};
  transform: translateY(-50%);
  z-index: 0;
`;

const TimelineProgress = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  height: 2px;
  background: ${({ theme }) => theme.gradients.primary};
  transform: translateY(-50%);
  z-index: 1;
`;

const TimelineDots = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const TimelineDot = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.border};
  background: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.surface};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  z-index: 3;
  padding: 0;
  
  &:hover {
    transform: scale(1.2);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ isActive }) => isActive ? '8px' : '0'};
    height: ${({ isActive }) => isActive ? '8px' : '0'};
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.surface};
    transition: ${({ theme }) => theme.transitions.fast};
  }
`;

const TimelineLabel = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.textMuted};
  font-weight: ${({ theme, isActive }) => isActive ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.normal};
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.fast};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 10px;
    top: -35px;
  }
`;

// Slider Container
const SliderContainer = styled.div`
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 600px;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-height: 600px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-height: 500px;
  }
`;

const CompanyName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Position = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Duration = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ExperienceDuration = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Location = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const KeyPointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
`;

const KeyPoint = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillTag = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textMuted};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

// Navigation Arrow Buttons
const NavArrowButton = styled.button<{ disabled?: boolean; position: 'left' | 'right' }>`
  position: absolute;
  ${({ position }) => position === 'left' ? 'left' : 'right'}: -60px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme, disabled }) => disabled ? theme.colors.backgroundLight : theme.colors.surface};
  border: 2px solid ${({ theme, disabled }) => disabled ? theme.colors.border : theme.colors.primary};
  color: ${({ theme, disabled }) => disabled ? theme.colors.textMuted : theme.colors.primary};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: ${({ theme }) => theme.transitions.fast};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
    transform: translateY(-50%) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:active:not(:disabled) {
    transform: translateY(-50%) scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ position }) => position === 'left' ? 'left' : 'right'}: -50px;
    width: 45px;
    height: 45px;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ position }) => position === 'left' ? 'left' : 'right'}: 10px;
    width: 40px;
    height: 40px;
  }
`;

const Indicator = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const IndicatorDot = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.border};
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const ExperienceSection: React.FC = () => {
  const { experience } = personalInfo;
  // Reverse experience array so latest is on the right
  const reversedExperience = [...experience].reverse();
  // Start with the latest experience (rightmost on timeline)
  const [activeIndex, setActiveIndex] = useState(0);

  // Parse date from DD-MM-YYYY format and treat as first/last day of month
  const parseDate = (dateStr: string | null, isStart: boolean = true): Date | null => {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split('-').map(Number);
    if (day && month && year) {
      // For start dates: use first day of month (day 1)
      // For end dates: use last day of month
      if (isStart) {
        return new Date(year, month - 1, 1);
      } else {
        // Get last day of the month
        return new Date(year, month, 0);
      }
    }
    return null;
  };

  // Get formatted date label from startDate
  const getDateLabel = (job: typeof experience[0]) => {
    const jobWithDates = job as typeof experience[0] & { startDate?: string | null };
    if (jobWithDates.startDate) {
      const date = parseDate(jobWithDates.startDate, true);
      if (date) {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
      }
    }
    return '';
  };

  // Calculate duration string from startDate and endDate (e.g., "Dec 2024 - Present")
  const getDurationString = (job: typeof experience[0]) => {
    const jobWithDates = job as typeof experience[0] & { startDate?: string | null; endDate?: string | null };
    
    if (!jobWithDates.startDate) {
      return '';
    }

    const startDate = parseDate(jobWithDates.startDate, true);
    if (!startDate) {
      return '';
    }

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const startStr = `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`;

    if (!jobWithDates.endDate) {
      return `${startStr} - Present`;
    }

    const endDate = parseDate(jobWithDates.endDate, false);
    if (!endDate) {
      return startStr;
    }

    const endStr = `${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}`;
    return `${startStr} - ${endStr}`;
  };

  // Calculate duration from startDate and endDate
  const calculateJobDuration = (job: typeof experience[0]) => {
    const jobWithDates = job as typeof experience[0] & { startDate?: string | null; endDate?: string | null };
    
    if (!jobWithDates.startDate) {
      return '';
    }

    // Parse start date as first day of month
    const startDate = parseDate(jobWithDates.startDate, true);
    if (!startDate) {
      return '';
    }

    // Parse end date as last day of month, or use current date if null
    const endDate = jobWithDates.endDate 
      ? parseDate(jobWithDates.endDate, false) 
      : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0); // Last day of current month
    
    if (!endDate) {
      return '';
    }

    // Calculate difference in months
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    const startMonths = startYear * 12 + startMonth;
    const endMonths = endYear * 12 + endMonth;
    
    const diffMonths = endMonths - startMonths + 1; // +1 to include both start and end months
    
    if (diffMonths <= 0) return '';
    
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    
    if (years === 0) {
      return `${months} ${months === 1 ? 'Month' : 'Months'}`;
    } else if (months === 0) {
      return `${years} ${years === 1 ? 'Year' : 'Years'}`;
    } else {
      return `${years} ${years === 1 ? 'Year' : 'Years'} ${months} ${months === 1 ? 'Month' : 'Months'}`;
    }
  };


  // Calculate progress percentage for timeline (reversed - latest on right)
  const progress = (activeIndex / (reversedExperience.length - 1)) * 100;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else if (e.key === 'ArrowRight' && activeIndex < reversedExperience.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeIndex, reversedExperience.length]);

  const nextExperience = () => {
    if (activeIndex < reversedExperience.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevExperience = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToExperience = (index: number) => {
    setActiveIndex(index);
  };

  const currentExperience = reversedExperience[activeIndex];
  // Calculate duration from startDate and endDate
  const jobDuration = calculateJobDuration(currentExperience);

  return (
    <ExperienceContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My professional journey in software development
        </SectionSubtitle>
      </SectionHeader>

      {/* Timeline Navigation */}
      <TimelineContainer>
        <TimelineLine />
        <TimelineProgress
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <TimelineDots>
          {reversedExperience.map((job, index) => {
            const isLast = index === reversedExperience.length - 1;
            const isFirst = index === 0;
            
            return (
              <div key={job.id} style={{ position: 'relative', flex: 1, display: 'flex', justifyContent: isFirst ? 'flex-start' : isLast ? 'flex-end' : 'center' }}>
                <TimelineDot
                  isActive={index === activeIndex}
                  onClick={() => goToExperience(index)}
                  aria-label={`Go to ${job.company} experience`}
                >
                  <TimelineLabel isActive={index === activeIndex}>
                    {getDateLabel(job)}
                  </TimelineLabel>
                </TimelineDot>
              </div>
            );
          })}
        </TimelineDots>
      </TimelineContainer>

      {/* Experience Slider */}
      <SliderContainer>
        <NavArrowButton
          position="left"
          onClick={prevExperience}
          disabled={activeIndex === 0}
          aria-label="Previous experience"
        >
          ←
        </NavArrowButton>

        <AnimatePresence mode="wait">
          <ExperienceCard
            key={currentExperience.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <CompanyName>{currentExperience.company}</CompanyName>
            <Position>{currentExperience.position}</Position>
            <Duration>{getDurationString(currentExperience)}</Duration>
            {jobDuration && (
              <ExperienceDuration>⏱️ {jobDuration}</ExperienceDuration>
            )}
            <Location>📍 {currentExperience.location}</Location>
            
            <ScrollableContent>
              <Description>{currentExperience.description}</Description>
              {currentExperience.keyPoints && (
                <KeyPointsList>
                  {currentExperience.keyPoints.map((point, index) => (
                    <KeyPoint key={index}>{point}</KeyPoint>
                  ))}
                </KeyPointsList>
              )}
            </ScrollableContent>
            
            <SkillsList>
              {currentExperience.skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillsList>
          </ExperienceCard>
        </AnimatePresence>

        <NavArrowButton
          position="right"
          onClick={nextExperience}
          disabled={activeIndex === reversedExperience.length - 1}
          aria-label="Next experience"
        >
          →
        </NavArrowButton>
      </SliderContainer>

      {/* Indicator Dots */}
      <Indicator>
        {reversedExperience.map((_, index) => (
          <IndicatorDot
            key={index}
            isActive={index === activeIndex}
            onClick={() => goToExperience(index)}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </Indicator>
    </ExperienceContainer>
  );
};

export default ExperienceSection;
