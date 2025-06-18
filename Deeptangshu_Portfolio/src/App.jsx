import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { StarBackground } from "./components/StarBackground";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { CodingProfilesSection } from "./components/CodingProfilesSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <StarBackground />
              <Navbar />
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <CodingProfilesSection />
              <ContactSection />
              <Footer />
              <Toaster />
            </ThemeProvider>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
