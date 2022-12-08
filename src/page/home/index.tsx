import { useState, useEffect } from "react";

/* General components */
import DateTime from "../../components/general/datetime/Datetime";
import Button from "../../components/general/button/Button";

/* Project components */
import InputCustom from "../../components/project/inputCustom/InputCustom";
import CardResume from "../../components/project/cardResume/CardResume";
import DateArea from "../../components/project/dateArea/DateArea";
import Header from "../../components/project/header/Header";
import Table from "../../components/project/table/Table";
import Select from "../../components/general/select/Select";

const data = [
  {
    date: new Date(2022, 11, 11).toLocaleDateString(),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
  {
    date: new Date(2022, 10, 12).toLocaleDateString(),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
  {
    date: new Date(2022, 11, 12).toLocaleDateString(),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
];

const options = [
  {
    title: "Entrada",
    type: "in",
  },
  {
    title: "Saída",
    type: "out",
  },
];

const getCurrentMonth = (date: any) =>
  new Date(date).toLocaleString("default", { month: "long", year: "numeric" });

export default function HomePage() {
  const [list, setList] = useState(data);
  const [listOptions, setListOptions] = useState(options);

  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(getCurrentMonth(date));

  const [formDate, setFormDate] = useState(new Date());
  const [formTitle, setFormTitle] = useState("");
  const [formValue, setFormValue] = useState(0);

  const editMonth = (months: number) => {
    const oldDate = date;
    oldDate.setMonth(oldDate.getMonth() + months);
    setDate(oldDate);
    setMonth(getCurrentMonth(oldDate));
  };

  useEffect(() => {
    setList(data.filter((e) => month == getCurrentMonth(e.date)));
  }, [month]);

  useEffect(() => {
    console.log(formDate);
    console.log(formTitle);
    console.log(formValue);
  }, [formDate, formTitle, formValue]);

  return (
    <div>
      <Header title={"WFinancial"} />

      <DateArea
        actionNextMonth={() => editMonth(1)}
        actionPrevMonth={() => editMonth(-1)}
        currentMonth={month}
      />

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

      <div className="flex mx-auto max-w-7xl items-center justify-between">
        <InputCustom
          label="Date"
          type="date"
          name={"date"}
          value={formDate}
          onChange={setFormDate}
        />
        <Select label="Category" options={listOptions} name={"category"} />
        <InputCustom
          label="Title"
          placeholder={"Title"}
          name={"title"}
          value={formTitle}
          onChange={setFormTitle}
        />
        <InputCustom
          label="Value"
          type="number"
          iconRight="R$"
          placeholder={"0.00"}
          name={"value"}
          value={formValue}
          onChange={setFormValue}
        />
        <div className="mt-7">
          <Button name={"Adicionar"} />
        </div>
      </div>

      <Table data={list} />

      <footer>
        <DateTime />
      </footer>
    </div>
  );
}
