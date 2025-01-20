const MovieCard = ({ item, index, setItem }) => {
  return (
    <div
      onClick={() => setItem(item)}
      className="relative min-w-[180px] h-[250px] hover:scale-110 transition duration-150 ease-in"
    >
      <p
        className="absolute  px-0 bottom-3 text-black font-extrabold text-8xl"
        style={{
          WebkitTextStroke: "1px white", 
        }}
      >
        {index + 1}
      </p>
    
      <img
        className="w-full h-full object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt={item.title || item.name}
      />
    </div>
  );
};

export default MovieCard;
