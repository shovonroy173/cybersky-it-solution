import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Layout from "./components/Layout.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </Layout>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
