// App.js

import React, { useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { ToDos } from "./MyComponents/ToDos";
import { AddToDos } from "./MyComponents/AddToDos";
import { About } from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [MyToDos, setMyToDos] = useState([]);

  const addTodoHandler = (title, desc) => {
    const sno = MyToDos.length > 0 ? MyToDos[MyToDos.length - 1].Sno + 1 : 1;
    const mytodo = { Sno: sno, title, desc };
    setMyToDos([...MyToDos, mytodo]);
  };

  const handleDelete = (todo) => {
    setMyToDos(MyToDos.filter((t) => t !== todo));
  };

  return (
    <Router>
      <Header title="ToDos-List" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddToDos addtodo={addTodoHandler} />
              <ToDos todos={MyToDos} onDelete={handleDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
