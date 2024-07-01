
import './App.css';
import Counter from './components/Counter';
import Login from './components/Login';

function App() {
  return (
    <main className='min-h-screen bg-violet-800 flex justify-center items-center'>
    <div className=' bg-slate-200 text-slate-600 text-center rounded-3xl mx-52 py-6'>
      <Login></Login>
      <Counter/>
    </div>
    </main>
  );
}

export default App;
