// Write your JS code here
import './index.css'

import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      avatarUrl: data.avatar_url,
      author: data.author,
      imageUrl: data.image_url,
      content: data.content,
    }

    this.setState({blogData: updatedData})
  }

  render() {
    const {blogData} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogData
    return (
      <div className="blog-items-details-container">
        <h1>{title}</h1>
        <div className="user-details">
          <img src={avatarUrl} className="avatar" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="image-url" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
