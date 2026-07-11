import React, { useState } from 'react';
import './blogger.css';

// 1. Data Arrays matching the screenshots and hints
export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
];

const courses = [
  { id: 201, cname: 'Angular', startdate: '4/5/2021' },
  { id: 202, cname: 'React', startdate: '6/3/2021' }
];

const blogs = [
  { id: 301, title: 'React Learning', author: 'Stephen Biz', body: 'Welcome to learning React!' },
  { id: 302, title: 'Installation', author: 'Schewzdenier', body: 'You can install React from npm.' }
];

// 2. Child Components demonstrating rendering prevention (returning null) and extracting lists with keys
function BookDetails(props) {
  // Prevent rendering if books list is not provided
  if (!props.books || props.books.length === 0) {
    return null;
  }
  return (
    <ul>
      {props.books.map((book) => (
        <li key={book.id} className="detail-item-card">
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </li>
      ))}
    </ul>
  );
}

function BlogDetails(props) {
  // Prevent rendering if blogs list is not provided
  if (!props.blogs || props.blogs.length === 0) {
    return null;
  }
  return (
    <ul>
      {props.blogs.map((blog) => (
        <li key={blog.id} className="detail-item-card">
          <h3>{blog.title}</h3>
          <div className="subtitle">{blog.author}</div>
          <p>{blog.body}</p>
        </li>
      ))}
    </ul>
  );
}

function CourseDetails(props) {
  // Prevent rendering if courses list is not provided
  if (!props.courses || props.courses.length === 0) {
    return null;
  }
  return (
    <ul>
      {props.courses.map((course) => (
        <li key={course.id} className="detail-item-card">
          <h3>{course.cname}</h3>
          <p>Start Date: {course.startdate}</p>
        </li>
      ))}
    </ul>
  );
}

function BloggerApp() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  // Technique 1: Element Variables (if/else block setup)
  let bookdet;
  if (showBooks) {
    bookdet = <BookDetails books={books} />;
  } else {
    bookdet = <div style={{ color: '#64748b', fontStyle: 'italic' }}>Book details are hidden.</div>;
  }

  // Technique 2: Inline Ternary evaluation for Courses block
  const coursedet = showCourses ? (
    <CourseDetails courses={courses} />
  ) : (
    <div style={{ color: '#64748b', fontStyle: 'italic' }}>Course details are hidden.</div>
  );

  // Technique 3: Logical AND (&&) evaluation for Blogs block
  const content = showBlogs ? (
    <BlogDetails blogs={blogs} />
  ) : (
    <div style={{ color: '#64748b', fontStyle: 'italic' }}>Blog details are hidden.</div>
  );

  return (
    <div className="blogger-app-container">
      {/* Toggles for demonstrating conditional rendering dynamically */}
      <div className="blogger-controls">
        <label className="blogger-control-item">
          <input 
            type="checkbox" 
            checked={showCourses} 
            onChange={(e) => setShowCourses(e.target.checked)} 
          />
          Show Course Details (Ternary Operator)
        </label>
        <label className="blogger-control-item">
          <input 
            type="checkbox" 
            checked={showBooks} 
            onChange={(e) => setShowBooks(e.target.checked)} 
          />
          Show Book Details (Element Variable)
        </label>
        <label className="blogger-control-item">
          <input 
            type="checkbox" 
            checked={showBlogs} 
            onChange={(e) => setShowBlogs(e.target.checked)} 
          />
          Show Blog Details (Logical AND)
        </label>
      </div>

      {/* Render layout matching classNames and structure in Hint screenshots */}
      <div className="blogger-columns-container">
        {/* Course Details column */}
        <div className="mystyle1">
          <h1>Course Details</h1>
          {coursedet}
        </div>

        {/* Book Details column */}
        <div className="st2">
          <h1>Book Details</h1>
          {bookdet}
        </div>

        {/* Blog Details column */}
        <div className="v1">
          <h1>Blog Details</h1>
          {content}
        </div>
      </div>
    </div>
  );
}

export default BloggerApp;
