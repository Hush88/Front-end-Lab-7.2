import './App.css';

import GoodsCard from './components/GoodsCard';

function App() {
  return (
    <div className="App">
      <GoodsCard src="/images/apple.png" title="Apple" cost={15}/>
      <GoodsCard src="./images/cherry.png" title="Cherry" cost={30}/>
      <GoodsCard src="../images/strawberry.png" title="Strawberry" cost={35}/>
    </div>
  );
}

export default App;
