import { useState } from "react";

const getCurrentMonth = (date: any) =>
  new Date(date).toLocaleString("default", { month: "long", year: "numeric" });

export default function DateArea() {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(getCurrentMonth(date));

  const editMonth = (months: number) => {
    const oldDate = date;
    oldDate.setMonth(oldDate.getMonth() + months);
    setDate(oldDate);
    setMonth(getCurrentMonth(oldDate));
  };

  return (
    <div className="flex mx-auto max-w-7xl items-center justify-between">
      <button onClick={() => editMonth(-1)}>{"<-"}</button>
      <span>{month}</span>
      <button onClick={() => editMonth(1)}>{"->"}</button>
    </div>
  );
}
