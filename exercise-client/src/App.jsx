import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default App;
