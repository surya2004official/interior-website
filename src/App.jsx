import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SavedProvider } from './context/SavedContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { SavedDrawer } from './components/common/SavedDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AIDesignerPage } from './pages/AIDesignerPage';
import { StyleFinderPage } from './pages/StyleFinderPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { VirtualStudioPage } from './pages/VirtualStudioPage';
import { ProcessPage } from './pages/ProcessPage';
import { PackagesPage } from './pages/PackagesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { ContactPage } from './pages/ContactPage';
import { MoodBoardPage } from './pages/MoodBoardPage';
import { FloorPlanPage } from './pages/FloorPlanPage';
import { ColorPalettePage } from './pages/ColorPalettePage';
import { SavedPage } from './pages/SavedPage';

// Scroll to top automatically on route transitions
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  return (
    <SavedProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-ivory text-charcoal font-sans selection:bg-gold/20 selection:text-walnut">
          {/* Global Header */}
          <Navbar onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)} />

          {/* Main Route Content */}
          <main className="flex-grow">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />
              
              {/* About & Practice Monograph */}
              <Route path="/about" element={<AboutPage />} />

              {/* Services Hub & Dedicated Practice Pages */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/services/residential" element={<ServiceDetailPage />} />
              <Route path="/services/commercial" element={<ServiceDetailPage />} />
              <Route path="/services/modular-kitchen" element={<ServiceDetailPage />} />
              <Route path="/services/living-room" element={<ServiceDetailPage />} />
              <Route path="/services/bedroom" element={<ServiceDetailPage />} />
              <Route path="/services/office" element={<ServiceDetailPage />} />
              <Route path="/services/luxury-villa" element={<ServiceDetailPage />} />

              {/* Projects & Monograph Details */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />

              {/* AI & Interactive Tools */}
              <Route path="/ai-designer" element={<AIDesignerPage />} />
              <Route path="/style-finder" element={<StyleFinderPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/virtual-studio" element={<VirtualStudioPage />} />
              <Route path="/moodboard" element={<MoodBoardPage />} />
              <Route path="/floor-plan" element={<FloorPlanPage />} />
              <Route path="/color-palette" element={<ColorPalettePage />} />

              {/* Methodology & Packages */}
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/packages" element={<PackagesPage />} />

              {/* Client Experience, Gallery & Journal */}
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blog" element={<BlogPage />} />

              {/* Lead Generation & Contact */}
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Saved Wishlist & Curations */}
              <Route path="/saved" element={<SavedPage />} />

              {/* Fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Global Floating Concierge & Saved Drawer */}
          <FloatingWhatsApp />
          <SavedDrawer 
            isOpen={isSavedDrawerOpen} 
            onClose={() => setIsSavedDrawerOpen(false)} 
          />

          {/* Luxury Footer */}
          <Footer />
        </div>
      </Router>
    </SavedProvider>
  );
}

export default App;
