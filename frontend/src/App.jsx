import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-todo" element={<CreateTodo />} />
          <Route path="/edit-todo/:todoId" element={<EditTodo />} />
        </Routes>
      </Container>

      {/* the circle container on body is of react-hot-toast */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
