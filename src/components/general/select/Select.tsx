export default function Select({ label, name, options }: any) {
  return (
    <div className="py-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <select
          id={name}
          name={name}
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option>Selecione uma opção</option>
          {options.map((item: any, index: any) => (
            <option key={index}>{item.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
