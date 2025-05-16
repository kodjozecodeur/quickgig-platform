import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Browse from "./pages/Browse";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/gigs/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
