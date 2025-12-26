import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InteractiveSkillsPlayground from '@/components/InteractiveSkillsPlayground';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';


const Index = () => {
  return (
    <>
      <Helmet>
        <title>Saket Abhishek | Software Development Engineer | Full-Stack Developer</title>
        <meta 
          name="description" 
          content="Saket Abhishek - Software Development Engineer specializing in Full-Stack Development, React, Node.js, and scalable systems. Final-year engineering student with startup experience and strong DSA skills."
        />
        <meta 
          name="keywords" 
          content="Software Engineer, Backend Developer, Full Stack Developer, Java Developer, SDE Intern, React Developer, Node.js, MERN Stack, DSA, LeetCode, Software Development Engineer"
        />
        <meta name="author" content="Saket Abhishek" />
        <meta property="og:title" content="Saket Abhishek | Software Development Engineer" />
        <meta 
          property="og:description" 
          content="Full-Stack Developer building scalable systems. Open to SDE opportunities."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saket Abhishek | Software Development Engineer" />
        <meta 
          name="twitter:description" 
          content="Full-Stack Developer building scalable systems. Open to SDE opportunities."
        />
        <link rel="canonical" href="https://saketabhishek.dev" />
      </Helmet>


<main className="min-h-screen bg-background">
  <Navigation />

  <AnimatedSection>
    <HeroSection />
  </AnimatedSection>

  <AnimatedSection delay={0.05}>
    <AboutSection />
  </AnimatedSection>

  <AnimatedSection delay={0.1}>
    <InteractiveSkillsPlayground />
  </AnimatedSection>

  <AnimatedSection delay={0.15}>
    <SkillsSection />
  </AnimatedSection>

  <AnimatedSection delay={0.2}>
    <ExperienceSection />
  </AnimatedSection>

  <AnimatedSection delay={0.25}>
    <ProjectsSection />
  </AnimatedSection>

  <AnimatedSection delay={0.3}>
    <AchievementsSection />
  </AnimatedSection>

  <AnimatedSection delay={0.35}>
    <ContactSection />
  </AnimatedSection>

  <Footer />
</main>

    </>
  );
};

export default Index;
