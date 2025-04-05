import './App.css';
import Header from './components/header';
import Playground from './components/playground';
// import ExampleMDX from './example.mdx';

function App() {
  return (
    <main className="flex h-screen w-screen flex-col">
      <Header />
      <Playground />
      {/* <ExampleMDX /> */}
    </main>
  );
}

export default App;
