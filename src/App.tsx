import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#0f172a',
    color: '#f8fafc'
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '3px solid #334155',
      borderTop: '3px solid #6366f1',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;