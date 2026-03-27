const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// IN-MEMORY DATABASE (Simple storage)
// ============================================
let contacts = [];
let applications = [];
let newsletters = [];

// ============================================
// EVENTS DATA
// ============================================
const events = {
  upcoming: [
    {
      id: 1,
      title: "Annual Tech Fest 2024",
      description: "Join us for the biggest technology festival featuring coding competitions, hackathons, robotics workshops, and tech talks from industry leaders.",
      date: "2024-03-15",
      time: "9:00 AM - 6:00 PM",
      venue: "Main Auditorium & Tech Park",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      featured: true
    },
    {
      id: 2,
      title: "International Cultural Night",
      description: "Experience diverse cultures through music, dance, cuisine, and art from over 50 countries represented by our international student body.",
      date: "2024-03-20",
      time: "6:00 PM - 10:00 PM",
      venue: "Open Air Theater",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      featured: true
    },
    {
      id: 3,
      title: "Career Fair 2024",
      description: "Meet recruiters from Fortune 500 companies, attend resume workshops, and explore internship and job opportunities.",
      date: "2024-03-25",
      time: "10:00 AM - 5:00 PM",
      venue: "Sports Complex",
      category: "Career",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800",
      featured: true
    },
    {
      id: 4,
      title: "Research Symposium",
      description: "Annual showcase of groundbreaking research by faculty and students across all departments.",
      date: "2024-04-05",
      time: "9:00 AM - 4:00 PM",
      venue: "Science Center",
      category: "Academic",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800",
      featured: false
    },
    {
      id: 5,
      title: "Alumni Homecoming Weekend",
      description: "Reconnect with former classmates, attend networking events, and celebrate university achievements.",
      date: "2024-04-20",
      time: "All Day Event",
      venue: "Entire Campus",
      category: "Alumni",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
      featured: true
    },
    {
      id: 6,
      title: "Graduation Ceremony 2024",
      description: "Celebrate the achievements of our graduating class of 2024.",
      date: "2024-05-15",
      time: "10:00 AM - 1:00 PM",
      venue: "Grand Convocation Hall",
      category: "Ceremony",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      featured: true
    }
  ],
  past: [
    {
      id: 101,
      title: "Freshman Orientation 2023",
      date: "2023-08-01",
      venue: "Main Auditorium",
      category: "Academic",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800"
    },
    {
      id: 102,
      title: "Hackathon 2023",
      date: "2023-10-15",
      venue: "Tech Park",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
    }
  ]
};

// ============================================
// NEWS DATA
// ============================================
const news = [
  {
    id: 1,
    title: "Prestige University Ranked Among Top 50 Global Universities",
    excerpt: "Our university has achieved a remarkable milestone, climbing 20 positions to secure a spot in the prestigious global rankings.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    date: "2024-01-15",
    category: "Achievement",
    author: "University Communications"
  },
  {
    id: 2,
    title: "New $50M Research Center for Artificial Intelligence Opens",
    excerpt: "State-of-the-art AI Research Center inaugurated with cutting-edge facilities and partnerships with tech giants.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    date: "2024-01-10",
    category: "Research",
    author: "Research Department"
  },
  {
    id: 3,
    title: "Student Startup Raises $5M in Series A Funding",
    excerpt: "EcoTech, a startup founded by our engineering students, secures major investment for sustainable technology solutions.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
    date: "2024-01-08",
    category: "Student Success",
    author: "Innovation Hub"
  },
  {
    id: 4,
    title: "Partnership with NASA for Space Research Program",
    excerpt: "Prestige University signs historic agreement with NASA for collaborative space exploration research.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800",
    date: "2024-01-05",
    category: "Partnership",
    author: "External Affairs"
  },
  {
    id: 5,
    title: "New Scholarship Program Announces $10M in Funding",
    excerpt: "The Future Leaders scholarship program will support 500 students annually from underprivileged backgrounds.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
    date: "2024-01-02",
    category: "Scholarship",
    author: "Financial Aid Office"
  }
];

// ============================================
// DEPARTMENTS DATA
// ============================================
const departments = [
  {
    id: "engineering",
    name: "School of Engineering",
    icon: "🔧",
    description: "Cutting-edge programs in Computer Science, Mechanical, Electrical, Civil, and Chemical Engineering.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800",
    programs: 12,
    students: 5000,
    faculty: 200
  },
  {
    id: "science",
    name: "School of Science",
    icon: "🔬",
    description: "Explore the wonders of Physics, Chemistry, Biology, Mathematics and Environmental Science.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    programs: 10,
    students: 4000,
    faculty: 150
  },
  {
    id: "arts",
    name: "School of Arts & Humanities",
    icon: "🎨",
    description: "Cultivate creativity through Literature, Philosophy, History, Fine Arts, and Music.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
    programs: 8,
    students: 3000,
    faculty: 120
  },
  {
    id: "business",
    name: "School of Business",
    icon: "💼",
    description: "World-class MBA, BBA, Finance, Marketing, and Entrepreneurship programs.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    programs: 8,
    students: 4500,
    faculty: 180
  },
  {
    id: "law",
    name: "School of Law",
    icon: "⚖️",
    description: "Comprehensive legal education with moot courts, internships, and international law programs.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    programs: 5,
    students: 2000,
    faculty: 80
  },
  {
    id: "medicine",
    name: "School of Medicine",
    icon: "🏥",
    description: "Training compassionate healthcare professionals with state-of-the-art medical facilities.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    programs: 7,
    students: 1500,
    faculty: 250
  }
];

// ============================================
// ROUTES
// ============================================

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: '🎓 Prestige University API is running!',
    endpoints: [
      'GET /api/events',
      'GET /api/news',
      'GET /api/departments',
      'POST /api/contact',
      'POST /api/apply',
      'POST /api/newsletter/subscribe'
    ]
  });
});

// ========== CONTACT ROUTES ==========
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const newContact = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    
    contacts.push(newContact);
    console.log('📩 New contact:', { name, email, subject });
    
    res.json({ 
      success: true, 
      message: 'Message sent successfully! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.get('/api/contact', (req, res) => {
  res.json(contacts);
});

// ========== APPLICATION ROUTES ==========
app.post('/api/apply', (req, res) => {
  try {
    const { name, email, phone, dateOfBirth, address, program, previousEducation, gpa, message } = req.body;
    
    const applicationId = 'APP' + Date.now();
    
    const newApplication = {
      id: applicationId,
      name,
      email,
      phone,
      dateOfBirth,
      address,
      program,
      previousEducation,
      gpa,
      message,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    applications.push(newApplication);
    console.log('📋 New application:', { applicationId, name, program });
    
    res.json({ 
      success: true, 
      message: 'Application submitted successfully!',
      applicationId 
    });
  } catch (error) {
    console.error('Application error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit application' });
  }
});

app.get('/api/apply', (req, res) => {
  res.json(applications);
});

// ========== EVENTS ROUTES ==========
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/events/featured', (req, res) => {
  const featured = events.upcoming.filter(e => e.featured);
  res.json(featured);
});

app.get('/api/events/:id', (req, res) => {
  const event = events.upcoming.find(e => e.id === parseInt(req.params.id));
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

// ========== NEWS ROUTES ==========
app.get('/api/news', (req, res) => {
  res.json(news);
});

app.get('/api/news/featured', (req, res) => {
  res.json(news.slice(0, 4));
});

app.get('/api/news/:id', (req, res) => {
  const article = news.find(n => n.id === parseInt(req.params.id));
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
});

// ========== DEPARTMENTS ROUTES ==========
app.get('/api/departments', (req, res) => {
  res.json(departments);
});

app.get('/api/departments/:id', (req, res) => {
  const dept = departments.find(d => d.id === req.params.id);
  if (dept) {
    res.json(dept);
  } else {
    res.status(404).json({ message: 'Department not found' });
  }
});

// ========== NEWSLETTER ROUTES ==========
app.post('/api/newsletter/subscribe', (req, res) => {
  try {
    const { email } = req.body;
    
    if (newsletters.find(n => n.email === email)) {
      return res.status(400).json({ success: false, message: 'Already subscribed!' });
    }
    
    newsletters.push({
      email,
      subscribedAt: new Date().toISOString()
    });
    
    console.log('📬 New subscriber:', email);
    res.json({ success: true, message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    console.error('Newsletter error:', error);
    res.status(500).json({ success: false, message: 'Failed to subscribe' });
  }
});

// ========== ADMIN ROUTES ==========
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple admin check (in production, use proper authentication)
  if (username === 'admin' && password === 'admin123') {
    res.json({ 
      success: true, 
      token: 'demo-token-' + Date.now(),
      admin: { username: 'admin', email: 'admin@prestige.edu' }
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.get('/api/admin/stats', (req, res) => {
  res.json({
    totalApplications: applications.length,
    pendingApplications: applications.filter(a => a.status === 'pending').length,
    totalContacts: contacts.length,
    newContacts: contacts.filter(c => c.status === 'new').length,
    totalStudents: 25000,
    newsletterSubscribers: newsletters.length
  });
});

// ============================================
// START SERVER
// ============================================
app.listen(PORT, () => {
  console.log('');
  console.log('🎓 ================================');
  console.log('   PRESTIGE UNIVERSITY API');
  console.log('🎓 ================================');
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log('');
  console.log('📍 Available endpoints:');
  console.log(`   GET  http://localhost:${PORT}/`);
  console.log(`   GET  http://localhost:${PORT}/api/events`);
  console.log(`   GET  http://localhost:${PORT}/api/news`);
  console.log(`   GET  http://localhost:${PORT}/api/departments`);
  console.log(`   POST http://localhost:${PORT}/api/contact`);
  console.log(`   POST http://localhost:${PORT}/api/apply`);
  console.log('');
});