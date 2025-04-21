export default function UIListHeader({ title, location, description }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-4 mb-4 ml-4 items-center justify-between">
        <div className="flex flex-col items-center">
          <p className="text-2xl">{title}</p>
          <p className="text-lg">{location}</p>
        </div>
        <p className="mr-4 text-center break-words max-w-xs self-center">
          {description}
        </p>
      </div>
    </div>
  );
}
