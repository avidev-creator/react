import "./App.css";
import Cards from "./components/Cards";

function App() {
  let myArr = [1, 2, 3, 4, 5];

  let myObj = {
    username: "Avinash",
    age: 32,
  };

  const myImg = [
    {
      src: "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const imgItem = myImg.map((item) => item.src);

  return (
    <>
      <h1>Avinash</h1>
      <Cards newArr={myArr} newObj={myObj} newImg={imgItem[0]} />
      <Cards newArr={myArr} newObj={myObj} newImg={imgItem[1]} />
      <Cards newArr={myArr} newObj={myObj} newImg={imgItem[2]} />
    </>
  );
}

export default App;
