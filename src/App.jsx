import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import ProjectsContainer from './components/sections/ProjectsContainer';
import SkillsContainer from './components/sections/SkillsContainer';
import Footer from './components/sections/Footer';
import { useContext, useEffect } from 'react';
import GlobalContext from './context/context';
import Header from './components/Header';

function App() {
  const { setWindowSize } = useContext(GlobalContext);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  });

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setWindowSize({
        mobile: false,
        tablet: false,
        desktop: true,
      });
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setWindowSize({
        mobile: false,
        tablet: true,
        desktop: false,
      });
    } else if (window.innerWidth < 768) {
      setWindowSize({
        mobile: true,
        tablet: false,
        desktop: false,
      });
    }
  };

  return (
    <>
      <Header />
      <Hero />
      <SkillsContainer />
      <ProjectsContainer />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
