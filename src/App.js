import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EditorPage from "./pages/EditorPage/EditorPage";

import "./App.css";

function App() {
  return (
    <section className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/editor/:roomId" element={<EditorPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </section>
  );
}

export default App;
