import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageWrapper = styled.div`
  animation: ${fadeInUp} 1.2s ease forwards;
`;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageWrapper key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageWrapper>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
