import './App.css';
import Header from './components/Header';
import Playground from './playground';

function App() {
  return (
    <main className="flex h-screen w-screen flex-col">
      <Header />
      <Playground />
    </main>
  );
}

export default App;
