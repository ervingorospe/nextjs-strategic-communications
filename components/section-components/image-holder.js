import Image from 'next/image'

export default function ImageHolder({classStyle, image, height}) {
  return (
    <div className={`relative h-full ${height}`}>
      <div className="relative max-w-full mx-auto lg:max-w-none h-full">
        <div className="mt-6 xl:mt-0 relative w-full sm:mx-auto h-full">
          <div className={`border rounded-md ${classStyle} aspect-w-16 aspect-h-9 relative z-10 overflow-hidden ${height}`}>
            <Image
              src={image.imageUrl}
              alt={image.altText}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}