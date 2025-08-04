import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[85vh]"> {/* changer from 78 vh to 85 vh */}
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
