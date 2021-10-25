import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

function App() {
  return (
    <>
      <div sytle={{ maxWidth: "800px", margin: "auto" }}>
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
    </>
  );
}

export default App;
