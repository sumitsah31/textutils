import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#061d3f";
      showalert("Dark mode activated", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode activated", "success");
    }
  };

  return (
    <div>
      <Router>
        <div className="container">
          <Navbar mode={mode} toggle={togglemode} />
          <Alert alert={alert} />
          <Routes>
            <Route path="/about" element={<About mode={mode} />}></Route>
            <Route
              path="/"
              element={
                <Textarea
                  name="Enter your text here"
                  textarea="enter your text here"
                  mode={mode}
                  showalert={showalert}
                />
              }
            ></Route>
          </Routes>
          {/*          
          <Textarea
          name="Enter your text here"
          textarea="enter your text here"
          mode={mode}
          showalert={showalert}
        /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
