export const PopularCuisines = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center justify-center px-3">
      <img
        className="w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem] rounded-full object-cover object-center"
        src={image}
        alt={title}
      />
      <span className="py-2 text-xs font-semibold text-gray-400">
        {title.length > 6 ? title.substring(0, 5) + "..." : title}
      </span>
    </div>
  );
};
