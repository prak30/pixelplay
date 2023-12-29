import Head from "../src/components/Head";
import Body from "./components/Body";
import { useState } from "react";
function App() {
  const [sidebar, setSideBar] = useState("true");
  const handleHamburgerClick = () => {
    setSideBar(!sidebar);
  };
  return (
    <div className="App">
      <Head collapseSidebar={handleHamburgerClick} />
      {sidebar && <Body />}
    </div>
  );
}

export default App;
