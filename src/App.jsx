import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Layout from "./components/Layout.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import Message from "./pages/Message.jsx";
import Media from "./pages/Media.jsx";
import Explore from "./pages/Explore.jsx";

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/message" element={<Message />} />
            <Route path="/media" element={<Media />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </Layout>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
