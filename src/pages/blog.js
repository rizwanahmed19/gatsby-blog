import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "../styles/prism.scss"
import styles from "./blog.module.scss"
import Head from "../components/head"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={styles.posts}>
        {data.allContentfulBlogPost.edges.map((x, idx) => {
          return (
            <li key={idx} className={styles.post}>
              <Link to={`/blog/${x.node.slug}`}>
                <h2>{x.node.title}</h2>
                <p>{x.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
