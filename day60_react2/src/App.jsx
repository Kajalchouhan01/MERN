
import Hero from "./components/Hero";

const App = () => {

  const name = "superman"
  let obj ={
    course1: 'maths',
    caurse2: 'hindi',
  }

  const arr=['maths', 12,11]
  return (
    <>
    <Hero />
      <div>
        <h1>we are learning react {name}</h1>
        <ul>
          <li>react {obj.course1}</li>
          <li>angular</li>
          <li>Vue</li>
        </ul>
      </div>
      <div>
        <h1>this is another h1 
          <br>
          </br>{arr[1]}</h1>
      </div>
    </>
  );
};

export default App;