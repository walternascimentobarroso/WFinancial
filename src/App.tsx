import { useState } from "react";

import Header from "./components/project/header/Header";
import Table from "./components/project/table/Table";

const data = [
  {
    date: new Date(2022, 11, 11).toLocaleDateString(),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
  {
    date: new Date(2022, 12, 15).toLocaleDateString(),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
  {
    date: new Date(2022, 12, 17).toLocaleDateString(),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
];

export default function App() {
  const [list, setList] = useState(data);

  return (
    <div>
      <Header title={"WFinancial"} />

      <Table data={list} />
    </div>
  );
}
