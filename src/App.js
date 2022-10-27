import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './App.css';
import Content from './Content';

// 1. create context
// 2. provider
// 3. consumer

function App() {
  const context = useContext(ThemeContext)
  return (
      <div className="App">
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
  );
}

export default App;
