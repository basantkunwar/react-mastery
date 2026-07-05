const Footer = () => {
  return (
    <footer className="bg-[#141414] border-t border-zinc-800 text-gray-400">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Contact */}
        <p className="mb-8 text-sm">
          Questions? Call{" "}
          <a
            href="tel:0008009191743"
            className="underline hover:text-white transition"
          >
            000-800-919-1743
          </a>
        </p>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          <a href="#" className="hover:text-white hover:underline transition">
            FAQ
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Help Center
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Account
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Media Center
          </a>

          <a href="#" className="hover:text-white hover:underline transition">
            Investor Relations
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Jobs
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Redeem Gift Cards
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Buy Gift Cards
          </a>

          <a href="#" className="hover:text-white hover:underline transition">
            Ways to Watch
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Cookie Preferences
          </a>

          <a href="#" className="hover:text-white hover:underline transition">
            Corporate Information
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Contact Us
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Speed Test
          </a>
          <a href="#" className="hover:text-white hover:underline transition">
            Legal Notices
          </a>
        </div>

        {/* Language Button */}
        <div className="mt-10">
          <button className="rounded-md border border-zinc-600 bg-transparent px-4 py-2 text-sm text-white transition hover:border-white hover:bg-zinc-800">
            🌐 English
          </button>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-sm text-gray-500">
          Netflix Nepal (Practice Clone)
        </p>

        {/* Bottom */}
        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Netflix Clone. Built with React &
          Tailwind CSS for learning purposes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;