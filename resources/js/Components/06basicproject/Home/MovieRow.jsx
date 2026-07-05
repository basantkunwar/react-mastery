import treandingmovies from "@/data/treandingmovie";
import MovieCart from "./MovieCart";

const TrendingSection = () => {
  return (
    <section className="bg-[#141414] px-12 py-10">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Trending Now
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {treandingmovies.map((movie) => (
          <MovieCart
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;