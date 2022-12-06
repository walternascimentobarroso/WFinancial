export default function CardResume({ title, descrition, color = "gray" }: any) {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className={`text-${color}-600 dark:text-${color}-400`}>{descrition}</p>
    </a>
  );
}
