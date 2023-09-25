import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({});

  async function generatorApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const info = await res.json();
    setData(info);
  }
  useEffect(() => {
    generatorApi();
  }, [data]);
  return (
    <div className="App">
      <table>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
        <tr>
          <th>{data.userId}</th>
          <th>{data.id}</th>
          <th>{data.title}</th>
          <th>{data.completed}</th>
        </tr>
      </table>
    </div>
  );
}
