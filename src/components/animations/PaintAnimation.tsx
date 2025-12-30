import React from 'react';
import styled, { keyframes } from 'styled-components';

const paintSplash = keyframes`
  0% { 
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% { 
    transform: scale(1.2) rotate(180deg);
    opacity: 0.8;
  }
  100% { 
    transform: scale(1) rotate(360deg);
    opacity: 0.6;
  }
`;

const paintDrop = keyframes`
  0% { 
    transform: translateY(-100px) scale(0);
    opacity: 0;
  }
  50% { 
    transform: translateY(0) scale(1.1);
    opacity: 0.9;
  }
  100% { 
    transform: translateY(20px) scale(1);
    opacity: 0.7;
  }
`;

const paintBrush = keyframes`
  0% { 
    transform: translateX(-50px) rotate(0deg);
    opacity: 0;
  }
  50% { 
    transform: translateX(0) rotate(45deg);
    opacity: 0.8;
  }
  100% { 
    transform: translateX(50px) rotate(90deg);
    opacity: 0.5;
  }
`;

const colorFlow = keyframes`
  0% { 
    background-position: 0% 50%;
  }
  50% { 
    background-position: 100% 50%;
  }
  100% { 
    background-position: 0% 50%;
  }
`;

const PaintContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;

const PaintSplash = styled.div<{ 
  delay: number; 
  size: number; 
  color: string; 
  top: string; 
  left: string;
  duration: number;
}>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50% 30% 70% 40%;
  animation: ${paintSplash} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
  filter: blur(1px);
`;

const PaintDrop = styled.div<{ 
  delay: number; 
  size: number; 
  color: string; 
  top: string; 
  left: string;
  duration: number;
}>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size * 1.5}px;
  background: linear-gradient(to bottom, ${props => props.color}, transparent);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: ${paintDrop} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
  filter: blur(0.5px);
`;

const PaintBrush = styled.div<{ 
  delay: number; 
  size: number; 
  color: string; 
  top: string; 
  left: string;
  duration: number;
}>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size / 3}px;
  background: ${props => props.color};
  border-radius: 50px;
  animation: ${paintBrush} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
  filter: blur(0.3px);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${props => props.color};
    border-radius: 50px;
    opacity: 0.3;
    filter: blur(2px);
  }
`;

const ColorStream = styled.div<{ 
  delay: number; 
  width: number; 
  height: number; 
  top: string; 
  left: string;
  duration: number;
}>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96c7ed, #ff8e8e);
  background-size: 400% 400%;
  animation: ${colorFlow} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(3px);
`;

const PaintAnimation: React.FC = () => {
  return (
    <PaintContainer>
      {/* Paint splashes */}
      <PaintSplash delay={0} duration={8} size={30} color="#ff6b6b" top="15%" left="10%" />
      <PaintSplash delay={2} duration={10} size={25} color="#4ecdc4" top="25%" left="80%" />
      <PaintSplash delay={4} duration={7} size={35} color="#45b7d1" top="60%" left="15%" />
      <PaintSplash delay={6} duration={9} size={20} color="#96c7ed" top="75%" left="70%" />
      <PaintSplash delay={8} duration={6} size={28} color="#ff8e8e" top="40%" left="50%" />
      
      {/* Paint drops */}
      <PaintDrop delay={1} duration={6} size={15} color="#ff6b6b" top="20%" left="20%" />
      <PaintDrop delay={3} duration={8} size={20} color="#4ecdc4" top="70%" left="30%" />
      <PaintDrop delay={5} duration={7} size={18} color="#45b7d1" top="50%" left="85%" />
      <PaintDrop delay={7} duration={9} size={22} color="#96c7ed" top="80%" left="60%" />
      
      {/* Paint brushes */}
      <PaintBrush delay={0.5} duration={5} size={40} color="#ff6b6b" top="30%" left="25%" />
      <PaintBrush delay={2.5} duration={7} size={35} color="#4ecdc4" top="65%" left="45%" />
      <PaintBrush delay={4.5} duration={6} size={30} color="#45b7d1" top="45%" left="75%" />
      <PaintBrush delay={6.5} duration={8} size={38} color="#96c7ed" top="85%" left="15%" />
      
      {/* Color streams */}
      <ColorStream delay={1.5} duration={12} width={60} height={60} top="10%" left="60%" />
      <ColorStream delay={3.5} duration={10} width={50} height={50} top="35%" left="40%" />
      <ColorStream delay={5.5} duration={14} width={70} height={70} top="55%" left="20%" />
      <ColorStream delay={7.5} duration={11} width={45} height={45} top="80%" left="80%" />
    </PaintContainer>
  );
};

export default PaintAnimation;
