import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const slideIn = keyframes`
  0% { transform: translateX(-100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

const FloatingShape = styled.div<{ delay: number; duration: number; size: number; color: string; top: string; left: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: 0.3;
`;

const PulsingCircle = styled.div<{ delay: number; size: number; color: string; top: string; left: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid ${props => props.color};
  border-radius: 50%;
  animation: ${pulse} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
`;

const RotatingSquare = styled.div<{ delay: number; size: number; color: string; top: string; left: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(45deg, ${props => props.color}, transparent);
  animation: ${rotate} 8s linear infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: 0.2;
`;

const SlidingLine = styled.div<{ delay: number; width: number; color: string; top: string; left: string }>`
  position: absolute;
  width: ${props => props.width}px;
  height: 2px;
  background: linear-gradient(90deg, transparent, ${props => props.color}, transparent);
  animation: ${slideIn} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
`;

const CSSBackground: React.FC = () => {
  return (
    <BackgroundContainer>
      {/* Floating circles */}
      <FloatingShape delay={0} duration={6} size={20} color="#ff6b6b" top="10%" left="10%" />
      <FloatingShape delay={1} duration={8} size={15} color="#4ecdc4" top="20%" left="80%" />
      <FloatingShape delay={2} duration={7} size={25} color="#45b7d1" top="60%" left="15%" />
      <FloatingShape delay={3} duration={9} size={18} color="#96c7ed" top="80%" left="70%" />
      <FloatingShape delay={4} duration={5} size={22} color="#ff8e8e" top="30%" left="50%" />
      
      {/* Pulsing circles */}
      <PulsingCircle delay={0} size={40} color="#ff6b6b" top="15%" left="60%" />
      <PulsingCircle delay={1.5} size={30} color="#4ecdc4" top="70%" left="25%" />
      <PulsingCircle delay={3} size={35} color="#45b7d1" top="40%" left="85%" />
      
      {/* Rotating squares */}
      <RotatingSquare delay={0} size={30} color="#ff6b6b" top="25%" left="30%" />
      <RotatingSquare delay={2} size={25} color="#4ecdc4" top="75%" left="60%" />
      <RotatingSquare delay={4} size={35} color="#45b7d1" top="50%" left="10%" />
      
      {/* Sliding lines */}
      <SlidingLine delay={0} width={100} color="#ff6b6b" top="35%" left="20%" />
      <SlidingLine delay={2} width={80} color="#4ecdc4" top="65%" left="40%" />
      <SlidingLine delay={4} width={120} color="#45b7d1" top="85%" left="10%" />
    </BackgroundContainer>
  );
};

export default CSSBackground;
