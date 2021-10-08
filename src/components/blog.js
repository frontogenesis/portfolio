import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { SectionTitle } from './ui/card'

export default function BlogIndex({ width }) {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//blog//" } }
            sort: { fields: [frontmatter___date], order: DESC }
            ) {
                nodes {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (
            <p>
            No blog posts found. Add markdown posts to "content/blog" (or the
            directory you specified for the "gatsby-source-filesystem" plugin in
            gatsby-config.js).
            </p>
        )
    }

    return (
        <div className="blog-index">
            <SectionTitle title="Latest Blog Posts" />
            <div className="project-description" style={{maxHeight: 400, overflowY: 'scroll'}}>
                <ol style={{ listStyle: `none` }}>
                    {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
            
                    return (
                        <li key={post.fields.slug}>
                        <article
                            className="post-list-item"
                            itemScope
                            itemType="http://schema.org/Article"
                        >
                            <header>
                            <h2>
                                <Link to={post.fields.slug} itemProp="url">
                                <span itemProp="headline">{title}</span>
                                </Link>
                            </h2>
                            <small>{post.frontmatter.date}</small>
                            </header>
                            <section>
                            <p
                                dangerouslySetInnerHTML={{
                                __html: post.frontmatter.description || post.excerpt,
                                }}
                                itemProp="description"
                            />
                            </section>
                        </article>
                        </li>
                    )
                    })}
                </ol>
            </div>
        </div>
      )
}