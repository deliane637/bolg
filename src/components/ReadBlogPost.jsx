import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './ReadBlogPost.css';

const ReadBlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Sample blog post data (in real app, this would come from API/props)
  const blogPost = {
    id: 1,
    title: "How to Earn F-coins as a Student in Flearnaxy",
    author: "Fonate Mimi",
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    readTime: "5 min read",
    publishDate: "Dec 15, 2024",
    publishTime: "2:30 PM",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    audience: "Student",
    category: "Education",
    content: `
      <p>Welcome to the comprehensive guide on earning F-coins as a student in the Flearnaxy platform! F-coins are the digital currency that powers our learning ecosystem, and as a student, there are numerous ways to earn them while enhancing your educational journey.</p>
      
      <h2>What are F-coins?</h2>
      <p>F-coins are Flearnaxy's native digital currency designed to reward active participation, learning achievements, and community engagement. Think of them as your academic achievement points that have real value within our platform.</p>
      
      <h2>Top Ways to Earn F-coins</h2>
      
      <h3>1. Complete Course Modules</h3>
      <p>Every time you successfully complete a course module, you earn F-coins based on the complexity and duration of the content. Advanced modules typically reward more F-coins than beginner ones.</p>
      
      <h3>2. Participate in Discussions</h3>
      <p>Active participation in course discussions, forums, and Q&A sessions earns you F-coins. Quality contributions that help other students learn are rewarded with bonus F-coins.</p>
      
      <h3>3. Submit Assignments on Time</h3>
      <p>Timely submission of assignments not only helps your academic progress but also rewards you with F-coins. Early submissions often receive bonus rewards!</p>
      
      <h3>4. Peer Reviews and Feedback</h3>
      <p>Providing constructive feedback on peer assignments and participating in peer review sessions is a great way to earn additional F-coins while helping your classmates.</p>
      
      <h3>5. Daily Login Streaks</h3>
      <p>Consistency is key! Maintaining daily login streaks rewards you with increasing F-coin bonuses. The longer your streak, the higher your daily rewards.</p>
      
      <h2>How to Use Your F-coins</h2>
      <p>Once you've earned F-coins, you can use them for various purposes within the Flearnaxy ecosystem:</p>
      <ul>
        <li>Purchase premium course materials</li>
        <li>Access exclusive webinars and workshops</li>
        <li>Buy study resources and e-books</li>
        <li>Unlock advanced features and tools</li>
        <li>Exchange for real-world rewards and certificates</li>
      </ul>
      
      <h2>Pro Tips for Maximizing F-coin Earnings</h2>
      <p>Here are some insider tips to help you maximize your F-coin earnings:</p>
      <ol>
        <li><strong>Set Learning Goals:</strong> Create weekly learning targets and achieve them consistently</li>
        <li><strong>Engage Actively:</strong> Don't just consume content - participate, ask questions, and help others</li>
        <li><strong>Join Study Groups:</strong> Collaborative learning often comes with bonus F-coin rewards</li>
        <li><strong>Complete Challenges:</strong> Participate in monthly learning challenges for substantial F-coin prizes</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Earning F-coins as a student in Flearnaxy is not just about the rewards - it's about building a habit of consistent learning and active participation. The more engaged you are with the platform and your fellow learners, the more F-coins you'll naturally accumulate.</p>
      
      <p>Remember, F-coins are designed to enhance your learning experience, not replace the intrinsic value of education. Use them wisely to further your academic goals and unlock new opportunities within the Flearnaxy ecosystem.</p>
      
      <p>Start your F-coin earning journey today and watch as your dedication to learning pays off in both knowledge and rewards!</p>
    `,
    likes: 234,
    comments: 45,
    tags: ["F-coins", "Student Guide", "Earning", "Flearnaxy", "Education"]
  };

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blogPost.likes);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      content: "This is really helpful! I've already started earning F-coins using these tips.",
      time: "2 hours ago",
      likes: 12
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      content: "Great guide! The daily login streak tip is working wonders for me.",
      time: "5 hours ago",
      likes: 8
    },
    {
      id: 3,
      author: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      content: "I had no idea about peer reviews earning F-coins. Thanks for sharing!",
      time: "1 day ago",
      likes: 15
    }
  ]);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "You",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face",
        content: comment,
        time: "Just now",
        likes: 0
      };
      setComments([newComment, ...comments]);
      setComment('');
    }
  };

  return (
    <div className="read-blog-post">
      <Navbar />
      
      <main className="blog-content">
        <div className="blog-container">
          {/* Back Button */}
          <button className="back-button" onClick={() => navigate(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </button>

          {/* Article Header */}
          <header className="article-header">
            <div className="article-meta">
              <span className={`audience-badge ${blogPost.audience.toLowerCase()}`}>
                For {blogPost.audience}s
              </span>
              <span className="category-badge">{blogPost.category}</span>
            </div>
            
            <h1 className="article-title">{blogPost.title}</h1>
            
            <div className="article-info">
              <div className="author-info">
                <img src={blogPost.authorAvatar} alt={blogPost.author} className="author-avatar" />
                <div className="author-details">
                  <span className="author-name">By {blogPost.author}</span>
                  <div className="publish-info">
                    <span>{blogPost.publishDate}</span>
                    <span>•</span>
                    <span>{blogPost.publishTime}</span>
                    <span>•</span>
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="article-stats">
                <span>{likeCount} likes</span>
                <span>•</span>
                <span>{comments.length} comments</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="featured-image">
            <img src={blogPost.image} alt={blogPost.title} />
          </div>

          {/* Article Content */}
          <article className="article-content">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </article>

          {/* Tags */}
          <div className="article-tags">
            {blogPost.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>

          {/* Like and Share Actions */}
          <div className="article-actions">
            <button 
              className={`like-button ${liked ? 'liked' : ''}`}
              onClick={handleLike}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"}>
                <path d="M20.84 4.61A5.5 5.5 0 0 0 16 2A5.5 5.5 0 0 0 12 4.61A5.5 5.5 0 0 0 8 2A5.5 5.5 0 0 0 3.16 4.61C1.84 5.93 1.84 8.07 3.16 9.39L12 18.23L20.84 9.39C22.16 8.07 22.16 5.93 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {likeCount}
            </button>
            
            <button className="share-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 12V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V12M16 6L12 2L8 6M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Share
            </button>
          </div>

          {/* Floating Sidebar */}
          <aside className="floating-sidebar">
            <div className="sidebar-content">
              <div className="sidebar-section">
                <div className="stat-item">
                  <div className="stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">1,247</span>
                    <span className="stat-label">Views</span>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20.84 4.61A5.5 5.5 0 0 0 16 2A5.5 5.5 0 0 0 12 4.61A5.5 5.5 0 0 0 8 2A5.5 5.5 0 0 0 3.16 4.61C1.84 5.93 1.84 8.07 3.16 9.39L12 18.23L20.84 9.39C22.16 8.07 22.16 5.93 20.84 4.61Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{likeCount}</span>
                    <span className="stat-label">Likes</span>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7018C21.7033 16.0494 20.9999 15.5901 20.2 15.4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 3.13C16.8003 3.35016 17.5037 3.80943 18.0099 4.46178C18.5161 5.11413 18.8006 5.92471 18.8006 6.76C18.8006 7.59529 18.5161 8.40587 18.0099 9.05822C17.5037 9.71057 16.8003 10.1698 16 10.39" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">89</span>
                    <span className="stat-label">Shares</span>
                  </div>
                </div>


              </div>

              <div className="sidebar-divider"></div>

              <div className="sidebar-section">
                <h4 className="sidebar-title">Article Info</h4>
                <div className="info-item">
                  <span className="info-label">Published</span>
                  <span className="info-value">{blogPost.publishDate}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Read Time</span>
                  <span className="info-value">{blogPost.readTime}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Category</span>
                  <span className="info-value">{blogPost.category}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Audience</span>
                  <span className="info-value">{blogPost.audience}s</span>
                </div>
              </div>

              <div className="sidebar-divider"></div>

              <div className="sidebar-section">
                <h4 className="sidebar-title">Suggested Posts</h4>
                <div className="suggested-posts">
                  <div className="suggested-post">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=60&h=40&fit=crop" alt="Suggested post" className="suggested-image" />
                    <div className="suggested-content">
                      <h5 className="suggested-title">Mastering Online Learning</h5>
                      <span className="suggested-meta">3 min read</span>
                    </div>
                  </div>
                  <div className="suggested-post">
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=60&h=40&fit=crop" alt="Suggested post" className="suggested-image" />
                    <div className="suggested-content">
                      <h5 className="suggested-title">React Best Practices</h5>
                      <span className="suggested-meta">7 min read</span>
                    </div>
                  </div>
                  <div className="suggested-post">
                    <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=60&h=40&fit=crop" alt="Suggested post" className="suggested-image" />
                    <div className="suggested-content">
                      <h5 className="suggested-title">Study Techniques</h5>
                      <span className="suggested-meta">4 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReadBlogPost;