import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start/Start";
import Question from "./pages/Question/Question";
import Finish from "./pages/Finish/Finish";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Start />} />
          <Route path="question/:questionId" element={<Question />} />
          <Route path="thatsallfolks" element={<Finish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
