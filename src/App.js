import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Navbar />
    </Router>
  );
}
