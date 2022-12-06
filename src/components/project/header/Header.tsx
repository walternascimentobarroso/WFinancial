export default function Header({ title }: any) {
  return (
    <header className="bg-indigo-600">
      <div className="mx-auto max-w-7xl py-12 px-4 lg:flex lg:items-center lg:justify-center lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          <span className="block">{title}</span>
        </h2>
      </div>
    </header>
  );
}
