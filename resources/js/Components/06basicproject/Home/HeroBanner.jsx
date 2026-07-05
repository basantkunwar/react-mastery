const HeroBanner = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/9a2f4c6d-0f66-4b7d-a739-0a7ef4f41f0d/hero-background.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Unlimited movies,
          <br />
          TV shows, and more
        </h1>

        <p className="mt-6 text-2xl font-semibold text-gray-100">
          Starts at Rs 299. Cancel anytime.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>

        <div className="mt-10 flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 rounded-md border border-gray-500 bg-black/50 px-5 py-4 text-lg text-white outline-none backdrop-blur-sm placeholder:text-gray-400 focus:border-white"
          />

          <button className="rounded-md bg-red-600 px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:scale-105 active:scale-95">
            Get Started &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;