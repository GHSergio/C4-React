import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import MainContent from "./pages/MainContent.js";
import Men from "./pages/Men";
import Women from "./pages/Women";
import News from "./pages/News";
import Customized from "./pages/Customized";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContent />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/customized" element={<Customized />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
