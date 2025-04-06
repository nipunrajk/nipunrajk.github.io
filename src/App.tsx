// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ResumePage from "./pages/ResumePage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/*<Route path='/projects' element={<ProjectsPage />} /> */}
          {/* <Route path='/resume' element={<ResumePage />} />
          <Route path='/contact' element={<ContactPage />} /> */}
        </Routes>
      </Layout>
    </Router> 
  );
}

export default App;
