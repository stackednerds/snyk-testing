// Ensure session middleware is properly configured with a cookie path
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET || 'change-this-to-a-strong-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  }
}));