import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReadBlogPost from './components/ReadBlogPost';
import flearnaxylogo from './assets/logo.png';

const blogPosts = [
  {
    id: 1,
    title: "How to Earn F-coins as a Student in Flearnaxy",
    excerpt: "Discover the complete guide to earning F-coins through various activities, challenges, and achievements on the Flearnaxy platform.",
    author: "Fonate Mimi",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    category: "Education",
    audience: "Student"
  },
  {
    id: 2,
    title: "Creating Engaging Course Content for Online Learning",
    excerpt: "Learn proven strategies to design and deliver compelling educational content that keeps students engaged and motivated.",
    author: "Sarah Johnson",
    readTime: "7 min read",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    category: "Teaching",
    audience: "Teacher"
  },
  {
    id: 3,
    title: "Building Your First React Application",
    excerpt: "A comprehensive guide to creating your first React app from scratch with modern best practices.",
    author: "Alex Chen",
    readTime: "12 min read",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    category: "Programming",
    audience: "Student"
  },
  {
    id: 4,
    title: "Effective Assessment Strategies for Online Courses",
    excerpt: "Discover innovative ways to evaluate student progress and provide meaningful feedback in digital learning environments.",
    author: "Dr. Maria Rodriguez",
    readTime: "8 min read",
    date: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    category: "Assessment",
    audience: "Teacher"
  },
  {
    id: 5,
    title: "Study Techniques That Actually Work",
    excerpt: "Science-backed study methods to improve retention and academic performance for better learning outcomes.",
    author: "James Wilson",
    readTime: "6 min read",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    category: "Study Tips",
    audience: "Student"
  },
  {
    id: 6,
    title: "Building a Successful Teaching Career Online",
    excerpt: "Essential tips for educators looking to transition to online teaching and build a thriving digital classroom.",
    author: "Lisa Park",
    readTime: "10 min read",
    date: "Dec 3, 2024",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
    category: "Career",
    audience: "Teacher"
  },
  {
    id: 7,
    title: "Mastering JavaScript Fundamentals",
    excerpt: "Essential JavaScript concepts every student should know to build modern web applications and succeed in coding interviews.",
    author: "Michael Torres",
    readTime: "9 min read",
    date: "Dec 1, 2024",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    category: "Programming",
    audience: "Student"
  },
  {
    id: 8,
    title: "Classroom Management in Virtual Environments",
    excerpt: "Proven techniques for maintaining student engagement and discipline in online teaching environments.",
    author: "Jennifer Adams",
    readTime: "6 min read",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
    category: "Teaching",
    audience: "Teacher"
  },
  {
    id: 9,
    title: "Time Management for Busy Students",
    excerpt: "Practical strategies to balance studies, work, and personal life while maximizing academic performance.",
    author: "David Kim",
    readTime: "4 min read",
    date: "Nov 25, 2024",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
    category: "Productivity",
    audience: "Student"
  },
  {
    id: 10,
    title: "Creating Interactive Learning Experiences",
    excerpt: "Design engaging activities and assessments that promote active learning in digital classrooms.",
    author: "Rachel Green",
    readTime: "8 min read",
    date: "Nov 22, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Teaching",
    audience: "Teacher"
  },
  {
    id: 11,
    title: "Python for Data Science Beginners",
    excerpt: "Start your data science journey with Python fundamentals, libraries, and practical projects for students.",
    author: "Emma Watson",
    readTime: "11 min read",
    date: "Nov 20, 2024",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&h=400&fit=crop",
    category: "Data Science",
    audience: "Student"
  },
  {
    id: 12,
    title: "Building Student Motivation Online",
    excerpt: "Strategies to keep students motivated and engaged throughout their online learning journey.",
    author: "Robert Johnson",
    readTime: "7 min read",
    date: "Nov 18, 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    category: "Motivation",
    audience: "Teacher"
  },
  {
    id: 13,
    title: "Effective Note-Taking Methods",
    excerpt: "Discover proven note-taking techniques that improve comprehension and retention for better academic results.",
    author: "Sophie Miller",
    readTime: "5 min read",
    date: "Nov 15, 2024",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    category: "Study Tips",
    audience: "Student"
  },
  {
    id: 14,
    title: "Technology Tools for Modern Educators",
    excerpt: "Essential digital tools and platforms that enhance teaching effectiveness and student engagement.",
    author: "Mark Thompson",
    readTime: "9 min read",
    date: "Nov 12, 2024",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    category: "Technology",
    audience: "Teacher"
  },
  {
    id: 15,
    title: "Preparing for Technical Interviews",
    excerpt: "Complete guide to acing technical interviews with coding challenges, system design, and behavioral questions.",
    author: "Kevin Lee",
    readTime: "13 min read",
    date: "Nov 10, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    category: "Career",
    audience: "Student"
  }
];

import BlogHome from './components/BlogHome';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <BlogHome />
            </>
          } />
          <Route path="/readpost/:id" element={<ReadBlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;