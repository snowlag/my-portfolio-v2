import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import personalInfo from "../../data/personalInfo.json";
import PaintAnimation from "../animations/PaintAnimation";

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.gradients.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  align-items: center;
  height: 100%;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Greeting = styled(motion.div)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Name = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize["6xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
  }
`;

const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 500px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
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

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AnimationContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 50vh;
  }
`;

const FloatingShape = styled.div<{
  delay: number;
  duration: number;
  size: number;
  color: string;
  top: string;
  left: string;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  border-radius: 50%;
  animation: ${float} ${(props) => props.duration}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  opacity: 0.3;
`;

const PulsingCircle = styled.div<{
  delay: number;
  size: number;
  color: string;
  top: string;
  left: string;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 2px solid ${(props) => props.color};
  border-radius: 50%;
  animation: ${pulse} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const RotatingSquare = styled.div<{
  delay: number;
  size: number;
  color: string;
  top: string;
  left: string;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: linear-gradient(45deg, ${(props) => props.color}, transparent);
  animation: ${rotate} 8s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  opacity: 0.2;
`;

const HeroAnimation: React.FC = () => {
  return (
    <AnimationContainer>
      {/* Floating circles */}
      <FloatingShape
        delay={0}
        duration={6}
        size={20}
        color="#6366f1"
        top="10%"
        left="10%"
      />
      <FloatingShape
        delay={1}
        duration={8}
        size={15}
        color="#8b5cf6"
        top="20%"
        left="80%"
      />
      <FloatingShape
        delay={2}
        duration={7}
        size={25}
        color="#06b6d4"
        top="60%"
        left="15%"
      />
      <FloatingShape
        delay={3}
        duration={9}
        size={18}
        color="#10b981"
        top="80%"
        left="70%"
      />
      <FloatingShape
        delay={4}
        duration={5}
        size={22}
        color="#f59e0b"
        top="30%"
        left="50%"
      />

      {/* Pulsing circles */}
      <PulsingCircle delay={0} size={40} color="#6366f1" top="15%" left="60%" />
      <PulsingCircle
        delay={1.5}
        size={30}
        color="#8b5cf6"
        top="70%"
        left="25%"
      />
      <PulsingCircle delay={3} size={35} color="#06b6d4" top="40%" left="85%" />

      {/* Rotating squares */}
      <RotatingSquare
        delay={0}
        size={30}
        color="#6366f1"
        top="25%"
        left="30%"
      />
      <RotatingSquare
        delay={2}
        size={25}
        color="#8b5cf6"
        top="75%"
        left="60%"
      />
      <RotatingSquare
        delay={4}
        size={35}
        color="#06b6d4"
        top="50%"
        left="10%"
      />
    </AnimationContainer>
  );
};

const HeroSection: React.FC = () => {
  const { personalInfo: info } = personalInfo;

  return (
    <HeroContainer>
      <PaintAnimation />
      <HeroContent>
        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🎨 Hello, I'm
          </Greeting>

          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {info.name}
          </Name>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {info.title}
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {info.summary}
          </Description>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              href="https://drive.google.com/file/d/1GYb1BQaYnjF7bxLMZ4TLaXP6XApYGBvG/view?usp=sharing"
              className="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
              <span>→</span>
            </Button>
            <Button
              href="#contact"
              className="secondary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(78, 205, 196, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </Button>
          </ButtonGroup>
        </TextContent>

        <AnimationContainer>
          <HeroAnimation />
        </AnimationContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
