import { useState } from "react";

import DateTime from "./components/general/Datetime";
import CardResume from "./components/project/cardResume/CardResume";
import DateArea from "./components/project/dateArea/DateArea";
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

      <DateArea />

      <div className="flex mx-auto max-w-7xl items-center justify-around">
        <CardResume title={"Saldo"} descrition={"R$ 1.000,00"} />
        <CardResume
          title={"Entrada"}
          descrition={"R$ 1.000,00"}
          color={"red"}
        />
        <CardResume
          title={"Saída"}
          descrition={"R$ 1.000,00"}
          color={"green"}
        />
      </div>
      <Table data={list} />

      <footer>
        <DateTime />
      </footer>
    </div>
  );
}
