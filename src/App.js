import React from "react";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Maincontent from "./components/Maincontent.js";

function App() {
  return (
    <>
      <Navbar />
      <body className="bg-neutral-900 w-full h-full">
        <div className="grid grid-flow-row-dense grid-cols-8 grid-rows-1">
          <div className="">
            <Sidebar />
          </div>
          <div className="col-span-7">
            <Maincontent />
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
