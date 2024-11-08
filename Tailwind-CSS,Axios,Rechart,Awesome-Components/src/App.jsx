import './App.css';
import CreatedHeader from './assets/Components/Header/CreatedHeader';
import PriceOption from './assets/Components/Main/PriceOption/PriceOption';
import Rechart from './assets/Components/Main/ReChart/Rechart';
// import HeaderDaisyUI from './assets/Components/Header/HeaderDaisyUI';

function App() {
  return (
    <div>
      <CreatedHeader></CreatedHeader>
      {/* <HeaderDaisyUI></HeaderDaisyUI> */}
      <div className="w-11/12 m-auto">
        <PriceOption></PriceOption>
        <Rechart></Rechart>
      </div>
    </div>
  );
}

export default App;
