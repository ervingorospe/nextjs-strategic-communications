export default function Address({ details, item }) {

  return (
    <div>
      <h1 className="text-gray-50 text-2xl md:text-3xl xl:text-4xl">{_.get(item, 'name')}</h1>
      <p className="mt-1 text-gray-50 text-xl md:text:2xl xl:text-3xl font-bold">{details.address}</p>
      <p className="mt-1 text-gray-50 text-xl md:text:2xl xl:text-3xl font-bold">{details.city}, {details.state} {details.zip}</p>
      <p className="mt-1 text-gray-50 text-xl md:text:2xl xl:text-3xl font-bold">{details.country}</p>
    </div>
  );
}