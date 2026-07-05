import {
  Play,
  Plus,
  ThumbsUp,
  ChevronDown,
} from "lucide-react";

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative w-56 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg bg-zinc-900 transition-all duration-300 hover:z-20 hover:scale-110 hover:shadow-2xl hover:shadow-black/70">
      {/* Poster */}
      <img
        src={movie.image}
        alt={movie.title}
        className="h-80 w-full object-cover"
      />

      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
        {/* Buttons */}
        <div className="mb-4 flex items-center gap-2">
          <button className="rounded-full bg-white p-2 text-black transition hover:scale-110">
            <Play size={18} fill="black" />
          </button>

          <button className="rounded-full border border-gray-400 p-2 transition hover:border-white">
            <Plus size={18} />
          </button>

          <button className="rounded-full border border-gray-400 p-2 transition hover:border-white">
            <ThumbsUp size={18} />
          </button>

          <button className="ml-auto rounded-full border border-gray-400 p-2 transition hover:border-white">
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Movie Title */}
        <h3 className="text-lg font-bold text-white">
          {movie.title}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-3 text-sm">
          <span className="font-semibold text-green-400">
            ⭐ {movie.rating}
          </span>

          <span>{movie.year}</span>

          <span>{movie.duration}</span>
        </div>

        {/* Genre */}
        <p className="mt-2 text-sm text-gray-300">
          {movie.genre}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;