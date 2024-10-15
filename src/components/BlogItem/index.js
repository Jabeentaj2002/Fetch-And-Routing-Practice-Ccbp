// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-item">
      <div className="list-item-container">
        <img src={imageUrl} className="image-url" alt={title} />
        <div className="details-container">
          <p className="topic">{topic}</p>
          <h4 className="title">{title}</h4>
          <div className="profile-name-container">
            <img src={avatarUrl} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
