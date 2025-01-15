const MovieCard = ({ item, index, setItem }) => {
    return (
      <div
        onClick={() => setItem(item)}
        className="relative min-w-[180px] h-[250px] hover:scale-110 transition duration-150 ease-in"
      >
        <p className="absolute left-4 bottom-4 text-white text-lg drop-shadow-md">
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
