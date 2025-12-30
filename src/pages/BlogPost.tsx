import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';

const BlogPostContainer = styled.div`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.md};
`;

const BackButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }) => theme.transitions.fast};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-5px);
  }
`;

const PostHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const PostTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const PostExcerpt = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-style: italic;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const PostContent = styled(motion.article)`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text};
    margin-top: ${({ theme }) => theme.spacing['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    padding-bottom: ${({ theme }) => theme.spacing.sm};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  code {
    background: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-family: ${({ theme }) => theme.typography.fontFamily.mono};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }

  pre {
    background: ${({ theme }) => theme.colors.backgroundLight};
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow-x: auto;
    margin: ${({ theme }) => theme.spacing.lg} 0;

    code {
      background: none;
      padding: 0;
    }
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacing.lg} 0;
    padding-left: ${({ theme }) => theme.spacing.xl};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.accent};
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin: ${({ theme }) => theme.spacing.lg} 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const Tag = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <BlogPostContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', padding: '4rem 0' }}
        >
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <BackButton to="/blog">← Back to Blog</BackButton>
        </motion.div>
      </BlogPostContainer>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <BlogPostContainer>
      <BackButton
        to="/blog"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>←</span>
        Back to Blog
      </BackButton>

      <PostHeader>
        <PostTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {post.title}
        </PostTitle>

        <PostMeta>
          <MetaItem>
            <span>👤</span>
            <span>{post.author}</span>
          </MetaItem>
          <MetaItem>
            <span>📅</span>
            <span>{formatDate(post.date)}</span>
          </MetaItem>
          <MetaItem>
            <span>⏱️</span>
            <span>{post.readTime}</span>
          </MetaItem>
        </PostMeta>

        <PostExcerpt
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {post.excerpt}
        </PostExcerpt>

        <TagsContainer>
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </PostHeader>

      <PostContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
      />
    </BlogPostContainer>
  );
};

export default BlogPost;
