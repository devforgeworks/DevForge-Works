import './App.css'
import { Routes, Route } from 'react-router-dom'
import { DashboardLayout } from './components/DashboardLayout'
import { HomeView } from './views/HomeView'
import { ProjectsView } from './views/ProjectsView'
import { AboutView } from './views/AboutView'
import { ContactView } from './views/ContactView'
import { AllProjects } from './AllProjects'
import { Footer } from './Footer'

function App() {
  return (
    <Routes>
      {/* Dashboard Routes with Navbar */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/projects" element={<ProjectsView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/contact" element={<ContactView />} />
      </Route>

      {/* All Projects Page (standalone, keeps original style) */}
      <Route
        path="/all-projects"
        element={
          <>
            <AllProjects />
            <Footer />
          </>
        }
      />
    </Routes>
  )
}

export default App
