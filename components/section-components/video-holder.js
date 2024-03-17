export default function VideoHolder({ classStyle, video, height}) {
  return (
    <div className={`relative h-full ${height}`}>
      <div className="relative max-w-full mx-auto lg:max-w-none h-full">
        <div className="mt-6 xl:mt-0 relative w-full sm:mx-auto h-full">
          <div className={`rounded-md ${classStyle} aspect-w-16 aspect-h-9 relative z-10 overflow-hidden ${height}`}>
            <video playsInline autoPlay muted loop>
              <source src={video} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}