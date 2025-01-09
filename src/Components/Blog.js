import React from 'react';
import './Blog.css'; // Import CSS for styling

const Blog = () => {
  // Dummy blog data with image URLs
  const blogPosts = [
    {
      id: 1,
      title: 'Degins',
      excerpt: 'UX review presentations',
      parg:'How do you create compelling presentations that wow your colleagues and impress your managers?',
      img:'Avatar label group (1).png',
      date: '20 Jan 2024',
     
      imgUrl: 'Image (2).png',  // Added image URL for each post
    },
    {
      id: 2,
      title: 'JProduct',
      excerpt: ' Migrating to Linear 101',

      parg:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      img:'Avatar label group.png',
      date: '19 Jan 2024',
      imgUrl: 'Image (3).png',  // Added image URL for each post
    },
    {
      id: 3,
      title: 'Software Engineering',
      excerpt: 'Building your API stack',
      parg:'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      img:'Avatar label group (1).png',
      date: '18 Jan 2024',
      imgUrl: 'Image (4).png',  // Added image URL for each post
    },
  ];

  return (
    <div className="blog-container">
      <div className="row blog-ing">
        <div className='blog-head'>
          <p className="blog-heading">Our blog</p>
          <h5>Latest blog posts</h5>
          <p>Tools and strategies modern teams need to help their companies grow.</p>
        </div>

        <div className='blog-head'>
          <button className="btn-click">View all posts</button>
        </div>
      </div>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.imgUrl} alt={post.title} className="blog-image" /> {/* Display image */}
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <p className="blog-parg">{post.parg}</p>
           
            <img src={post.img} alt={post.title} className="blog-img" />
            <span className="blog-date">{post.date}</span>
            <span className="blog-text">{post.text}</span>
     
           
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
