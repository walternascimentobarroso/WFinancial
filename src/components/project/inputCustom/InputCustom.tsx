export default function InputCustom({
  iconRight = false,
  label,
  placeholder,
  name,
  type = "text",
}: any) {
  return (
    <div className="py-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{iconRight}</span>
        </div>
        <input
          type={type}
          name={name}
          id={name}
          className={`block w-full rounded-md border-gray-300 ${
            iconRight && "pl-8"
          } focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
