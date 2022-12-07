export default function DateArea({
  actionNextMonth,
  actionPrevMonth,
  currentMonth,
}: any) {
  return (
    <div className="flex mx-auto max-w-7xl items-center justify-between">
      <button onClick={actionPrevMonth}>{"<-"}</button>
      <span>{currentMonth}</span>
      <button onClick={actionNextMonth}>{"->"}</button>
    </div>
  );
}
