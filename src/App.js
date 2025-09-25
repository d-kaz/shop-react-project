import "./App.css";
import { Header } from "./Components/Header";
import { Card } from "./Components/Card";

const prodacts = [
  {
    brand: "samsung",
    name: "samsung galaxy s25",
    price: 300,
    category: "phone",
    rating: 6,
    img: "https://c.dns-shop.ru/thumb/st1/fit/300/300/7be98f3adaa6547d4238b9c6bed24f57/7f3dd23a61c4ce6839274d97909eae6f7805725e882ca4793b4a0c10981819d9.jpg.webp",
  },
  {
    brand: "apple",
    name: "iphone 15 pro max",
    price: 500,
    category: "phone",
    rating: 5,
    img: "https://c.dns-shop.ru/thumb/st1/fit/300/300/05f995ce0829ccdafed08ad2dac1a2a3/dd3531d9a9470880430939cc74a603121be902b4624098c4dfa8ac87e4a3f5bc.jpg.webp",
  },
  {
    brand: "apple",
    name: "iphone 16",
    price: 450,
    category: "phone",
    rating: 5,
    img: "https://c.dns-shop.ru/thumb/st1/fit/300/300/09b59765c594989a3f7e168671751c85/548a64f7f89c24a7211af7a31f977369c51a00a874f74a6fbd1b97548a5adb85.jpg.webp",
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className="card-block">
        {prodacts.map((el) => (
          <Card
            name={el.name}
            img={el.img}
            rating={el.rating}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
