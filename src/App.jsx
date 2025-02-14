import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayoutPublic from "./layouts/LayoutPublic";
import PageHome from "./pagepublic/PageHome";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route index element={<PageHome />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App; // Exportación por defecto
