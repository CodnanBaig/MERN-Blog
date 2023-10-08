import { SharedNavbar } from "./Components/SharedNavbar";
import { Footer } from "./Components/Footer";
import "./App.css";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <SharedNavbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
