import './App.css';
import Accordian from './components/Accordian';
import RandomColor from './components/Accordian/random-color';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">

      {/* <RandomColor/> */}
      {/* <StarRating/> */}
       {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      <LoadMoreData/>



    </div>
  );
}

export default App;
