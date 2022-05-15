import { Route, Link, Routes } from "react-router-dom";

const App = (props) => {
  return <div>
    <Link to="/">Hello</Link>
    <Link to="/goodbye">Goodbye</Link>
    <Routes>
      <Route path="/" element={<h1>Hello</h1>}/>
      <Route path="/goodbye" element={<h1>Goodbye</h1>}/>
    </Routes>
  </div>;
};

export default App;
