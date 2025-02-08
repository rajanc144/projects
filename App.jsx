import Newsbord from "./components/newsbord";
import Navbar from "./components/navbar";
import Ex from "./components/ex";
import { useState } from "react";

const App = () => {
  const[category,setCategory]=useState("entertainment")
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsbord  category={category}/>
      <Ex/>
    </div>
  );
};

export default App;
