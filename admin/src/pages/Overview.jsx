export default function Overview({ title = 'Overview' }) {
  return (
    <section>
      <h2 className="w-full p-5 text-2xl text-center font-semibold text-gray-900 bg-blue-500">
        {title}
      </h2>
    </section>
  );
}
