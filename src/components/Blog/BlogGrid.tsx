import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogPosts from '../../data/blogPosts.json';

const BlogContainer = styled.div`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const BlogCard = styled(motion.div)`
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

const BlogImage = styled.div`
  height: 200px;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BlogPlaceholder = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  z-index: 2;
`;

const BlogContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const BlogTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogMeta = styled.div`
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

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Tag = styled.span`
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

const ReadMoreButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const BlogGridComponent: React.FC = () => {
  const { blogPosts: posts } = blogPosts;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <BlogContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Latest Articles
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my thoughts on technology, development practices, and industry insights
        </SectionSubtitle>
      </SectionHeader>

      <BlogGrid>
        {posts.map((post, index) => (
          <BlogCard
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {post.featured && <FeaturedBadge>Featured</FeaturedBadge>}
            
            <BlogImage>
              <BlogPlaceholder>
                📝
              </BlogPlaceholder>
            </BlogImage>
            
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              
              <BlogMeta>
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
              </BlogMeta>

              <TagsContainer>
                {post.tags.slice(0, 3).map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
                {post.tags.length > 3 && (
                  <Tag>+{post.tags.length - 3} more</Tag>
                )}
              </TagsContainer>

              <ReadMoreButton
                to={`/blog/${post.slug}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read More</span>
                <span>→</span>
              </ReadMoreButton>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogGridComponent;
