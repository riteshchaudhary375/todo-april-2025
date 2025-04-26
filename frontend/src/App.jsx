import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";

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
    </BrowserRouter>
  );
}

export default App;
