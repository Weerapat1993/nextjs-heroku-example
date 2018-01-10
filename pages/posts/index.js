import React from 'react'

const Posts = ({ pathname, query }) => (
  <div>
    <pre>{JSON.stringify(pathname)}</pre>
    <pre>{JSON.stringify(query)}</pre>
  </div>
)


Posts.getInitialProps = async ({ pathname, query }) => {
  return {
    pathname,
    query
  }
}

export default Posts
