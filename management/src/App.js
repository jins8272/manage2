import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";
const customer = [
  {
    id: 1,
    image:
      "https://www.hellot.net/data/photos/20231252/art_17039301013143_a3d6ec.jpg",
    name: "홍길동111",
    job: "박사",
  },
  {
    id: 2,
    image:
      "https://www.hellot.net/data/photos/20231252/art_17039301013143_a3d6ec.jpg",
    name: "홍길동221",
    job: "석사",
  },
];
function App() {
  return (
    <div>
      {customer.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
