
import './App.css';
import Counter from './components/Counter';
import Login from './components/Login';

function App() {
  return (
    <div className=' bg-violet-800 text-slate-300 flex-auto text-center'>
      <Login></Login>
      <Counter/>
    </div>
    
  );
}

export default App;
