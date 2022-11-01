import "./App.css";
import NewSection from "./pages/NewSection";
import Workshop from "./pages/Workshop";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<NewSection />} />
                    <Route path="workshop" element={<Workshop />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
