import React from 'react'
import PropTypes from 'prop-types'
import Post from '../../components/Post/Post'
import theme from '../../../src/theme/theme.yaml'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <Post
    post={
      {
        post: {
        html: "<p> Test </p>",
        fields: { 
          prefix:"prefix",
           slug: "slug"
          },
        frontmatter: { title: "title", author: "author", category : "category" }
      },
      authornote: "author note",
      facebook: {},
      theme: theme
    }
  }
  />
)

export default BlogPostPreview
