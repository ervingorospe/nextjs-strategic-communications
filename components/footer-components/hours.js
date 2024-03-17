export default function Hours({ details, item }) {

  return (
    <div>
      <h1 className="text-gray-50 text-2xl md:text-3xl xl:text-4xl">{_.get(item, 'name')}</h1>
      <p className="mt-1 text-gray-50 text-xl md:text:2xl xl:text-3xl font-bold" dangerouslySetInnerHTML={{__html: details}}/>
    </div>
  );
}