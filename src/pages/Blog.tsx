import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlogHero from '../components/Blog/BlogHero';
import BlogGrid from '../components/Blog/BlogGrid';

const BlogContainer = styled.div`
  min-height: 100vh;
`;

const Section = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  
  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.backgroundLight};
  }
`;

const Blog: React.FC = () => {
  return (
    <BlogContainer>
      <BlogHero />
      
      <Section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <BlogGrid />
      </Section>
    </BlogContainer>
  );
};

export default Blog;
