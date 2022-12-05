export default function Table({ data }: any) {
  return (
    <div className="mx-auto max-w-7xl overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">Date</th>
            <th className="py-3 px-6">Category</th>
            <th className="py-3 px-6">Title</th>
            <th className="py-3 px-6">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: any) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th className="py-4 px-6 dark:text-white">{item.date}</th>
              <td className="py-4 px-6 dark:text-white">{item.category}</td>
              <td className="py-4 px-6 dark:text-white">{item.title}</td>
              <td className="py-4 px-6 dark:text-white">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
