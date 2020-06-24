import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Button from "components/_ui/Button";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "components/Layout";
import CheckoutButton from "components/CheckoutButton";
import PostCard from "components/PostCard";

const HeroSection = styled("section")`
  padding: 4rem 0;
  color: #fff;
  display: block;
  position: relative;
  background: linear-gradient(135deg, #204f6b 0%, #1c791b 100%);
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 2.5rem 2rem;
    flex-flow: column nowrap;
  }
`

const HeroWrapper = styled("div")`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1140px;
`

const HeroImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 2;
  flex-basis: 1;
  @media(max-width:${dimensions.maxwidthTablet}px) {
    max-width: 600px;
    margin: 0 auto;
  }
  img {
      width: 100%;
      /* box-shadow: 4px 4px 8px #f3f3f3; */
      @media(max-width:${dimensions.maxwidthTablet}px) {
        flex-flow: column nowrap;
      }
  }
`

const HeroDetailContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 3;
  flex-basis: 1;
  padding-left: 60px;
  flex-direction: column;
  @media(max-width:${dimensions.maxwidthTablet}px) {
    padding: 0 30px;
  }
  h1 {
    font-family: Gelasio;
    font-weight: 200;
    font-size: 2.4rem;
    line-height: 1.2;
    margin: 20px 0;

    &::after {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
      margin-top: 23px;
    }
  }
  p {
    font-family: "Gelasio", serif;
  }
`
const HeroLinkContainer = styled("div")`
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        display: flex;
        flex-flow: column nowrap;
    }
`

const PreviewLink = styled("a")`
  font-family: Gelasio;
  font-size: 16px;
  text-align: center;
  color: #fff;
  padding: 13px 20px;
  border: 2px solid #34c1bb;
  background-color: transparent;
  border-radius: 10px;
  margin-left: 20px;
  &:hover {
    color: #fff;
    background-color: #299691;
    text-decoration: none;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-left: 0;
    margin-top: 15px;
  }
`

const Section = styled("section")`
    padding: 4rem 0;
    border-top: 1px solid rgba(46,46,46,0.1);
    margin-bottom: 6em;
    display: block;
    flex-direction: column;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2em auto;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
    &.highlight-section {
        position: relative;
        margin-bottom: 0;
        border: none;
    }
    &.testimonial-section {
        padding-top: 6em;
        .carousel {
            height: 250px;
            .carousel-indicators {
                bottom: -50px;
                li {
                    background-color: ${colors.green800};
                }
            }
            .carousel-inner {
                padding: 0 20px;
            }
        }
    }
    &.blog-section {
        padding-top: 6em;
        margin-bottom: 8rem;
        & > a {
            display: block;
            text-align: center;
        }
    }
`
const HighlightWrapper = styled("div")`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    justify-content: center;
    align-items: stretch;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        flex-flow: column nowrap;
        max-height: 100%;
    }
`

const HighlightImageContainer = styled("div")`
    flex-grow: 1;
    position: relative;
    width: 50%;
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        width: 100%;
        order: 1;
    }
    img {
        width: 100%;
        height: 100%;
    }
`
const HighlightTextContainer = styled("div")`
    flex-grow: 1;
    width: 50%;
    color: #000;
    display: flex;
    align-items: center;
    font-family: 'Gelasio', serif;
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        width: 100%;
        order: 2;
        padding: 30px;
    }
`

const HighlightTextWrapper = styled("div")`
    padding: 0 4rem;
    width: 100%;
    max-width: 650px;
    &.text-left {
        margin: 0 0 0 auto;
    }
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        h3, p {
            text-align: center;
        }
    }
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding: 0 2rem;
    }
`
const TestimonialQuote = styled('p')`
  font-family: 'Gelasio', serif;
  font-size: 18px;
  text-align: center;
  color: #000;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  @media(max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
  }
`

const TestimonialAuthor = styled('p')`
  color: #000;
  margin-bottom: 3rem;
  text-align: center;
  margin: 20px auto;
  max-width: 400px;
  font-size: 12px;
  width: 100%;
`
const TestimonialTitle = styled("h1")`
    font-family: Gelasio;
    font-weight: 200;
    font-size: 2.4rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 1em;
    &::after {
        content: "";
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${colors.green800};
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0;
        margin-top: 23px;
    }    
`

const BlogPostsTitle = styled("h1")`
    font-family: Gelasio;
    font-weight: 200;
    font-size: 2.4rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 0;
    &::after {
        content: "";
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${colors.green800};
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0;
        margin-top: 23px;
    }    
`
const BlogPostsWrapper = styled("div")`
    column-rule: 1px solid #eee;
    margin: 0;
    column-fill: initial;
    column-count: 3;
    column-gap: 50px;
    max-width: 1140px;
    width: 100%;
    margin: 60px auto 0 auto;
    padding: 0 20px;

    @media (min-width: ${dimensions.maxwidthDesktop}px) {
        column-count: 3;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        column-count: 2;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        column-count: 1;
    }
`

const WorkAction = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    margin: 30px auto 0 auto;
    text-decoration: underline;
    &:hover {
        color: ${colors.green600};
        transition: all 150ms ease-in-out;
    }
`

const RenderBody = ({ home, posts, meta, reviews, previewLink }) => (
    <>
        <Helmet
            title={meta.title}
            titleTemplate={`%s | ${meta.title}`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: meta.title,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <HeroSection>
            <HeroWrapper>
                <HeroImageContainer>
                    <img src={home.hero_background.url}></img>
                </HeroImageContainer>
                <HeroDetailContainer>
                    <>
                        {RichText.render(home.hero_title)}
                        {RichText.render(home.hero_subtitle)}
                    </>
                    <HeroLinkContainer>
                        <CheckoutButton />
                        <PreviewLink href={previewLink} alt="Read book preview">Read Preview</PreviewLink>
                    </HeroLinkContainer>
                </HeroDetailContainer>
            </HeroWrapper>
        </HeroSection>
        <Section className="highlight-section">
            <HighlightWrapper>
                <HighlightImageContainer className="image-left">
                    <img src={home.highlight_1[0].highlight_image_1.url} />
                </HighlightImageContainer>
                <HighlightTextContainer>
                    <HighlightTextWrapper className="text-right">
                        {RichText.render(home.highlight_1[0].highlight_text_1)}
                    </HighlightTextWrapper>
                </HighlightTextContainer>
            </HighlightWrapper>
        </Section>   
        <Section className="highlight-section">
            <HighlightWrapper>
                <HighlightTextContainer>
                    <HighlightTextWrapper className="text-left">
                        {RichText.render(home.highlight_2[0].highlight_text_2)}
                    </HighlightTextWrapper>
                </HighlightTextContainer>
                <HighlightImageContainer className="image-right">
                    <img src={home.highlight_2[0].highlight_image_2.url} />
                </HighlightImageContainer>
            </HighlightWrapper>
        </Section>             
        <Section className="testimonial-section">
            <TestimonialTitle>Testimonials</TestimonialTitle>
            <Carousel controls={false}>
                {reviews.map((review, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <TestimonialQuote>"{review.node.review_copy[0].text}"</TestimonialQuote>
                            <TestimonialAuthor>- {review.node.reviewer_name[0].text}</TestimonialAuthor>
                        </Carousel.Item>
                    );                
                })}
            </Carousel>
        </Section>
        <Section className="blog-section">
            <BlogPostsTitle>Blog Posts</BlogPostsTitle>
            <BlogPostsWrapper>
                {posts.slice(0).reverse().map((post, i) => (
                    <PostCard 
                        key={i}
                        category={post.node.post_category}
                        title={post.node.post_title}
                        description={post.node.post_preview_description}
                        thumbnail={post.node.post_hero_image}
                        uid={post.node._meta.uid}        
                        date={post.node.post_date}          
                    />
                ))}
            </BlogPostsWrapper>
            <WorkAction to={"/blog"}>
                See all posts
            </WorkAction>
        </Section>
    </>
);

export default ({ data }) => {
    //Required check for no data being returned
    const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
    const posts = data.prismic.allPosts.edges;
    const meta = data.site.siteMetadata;
    const reviews = data.prismic.allReviews.edges;
    const previews = data.prismic.allPreviewbookpages.edges;

    if (!doc || !reviews|| !posts || !previews) return null;

    const previewLink = previews[0].node.previewbooklink.url;
    
    return (
        <Layout>
            <RenderBody home={doc.node} meta={meta} reviews={reviews} posts={posts} previewLink={previewLink}/>
        </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    reviews: PropTypes.array.isRequired,
    previewLink: PropTypes.string.isRequired,
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_title
                        hero_subtitle
                        hero_button_text
                        hero_background
                        hero_button_link {
                            ... on PRISMIC__ExternalLink {
                                _linkType
                                url
                            }
                        }
                        content
                        highlight_1 {
                            highlight_image_1
                            highlight_text_1
                        }
                        highlight_2 {
                            highlight_image_2
                            highlight_text_2
                        }
                        about_title
                        about_bio
                        about_links {
                            about_link
                        }
                    }
                }
            }
            allReviews(last: 3) {
                edges {
                    node {
                        review_copy
                        reviewer_name
                    }
                }
            }
            allPosts(last: 6) {
                edges {
                    node {
                        post_title
                        post_preview_description
                        post_hero_image
                        post_category
                        post_date
                        _meta {
                            uid
                        }
                    }
                }
            }
            allPreviewbookpages {
                edges {
                    node {
                        previewbooklink {
                            ... on PRISMIC__FileLink {
                            url
                            _linkType
                            }
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`