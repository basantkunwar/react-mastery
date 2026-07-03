import AppLayout from "@/Layouts/applayout";
import profile from "../asset/images/profile.jpeg";
function App() {
  // JSX Expressions
  const name = "Basant Kunwar";
  const profession = "Computer Engineering Student";
  const district = "Baitadi, Nepal";
  const age = 20;
  const skills = "HTML • CSS • JavaScript • php • Laravel • MySQL • Tailwind CSS•learning React";
  const image =
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43b?w=500";

  return (
     <AppLayout>

   
      {/* Background Section */}

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-5">

        {/* Card */}

        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* Left Side */}

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col justify-center items-center p-10 text-white">

              {/* JSX Attribute */}
              <img
                src={profile}
                alt={name}
                className="w-52 h-52 rounded-full border-8 border-white object-cover shadow-xl"
              />

              <h1 className="text-4xl font-bold mt-6">
                {name}
              </h1>

              <p className="text-lg mt-2 opacity-90">
                {profession}
              </p>

              <button className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-slate-100 transition duration-300">
                View Portfolio
              </button>

            </div>

            {/* Right Side */}

            <div className="p-10">

              {/* JSX Comment */}

              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                About Me
              </h2>

              <p className="text-slate-600 leading-8">
                Hello! My name is <span className="font-bold">{name}</span>. I
                am a passionate Computer Engineering student who enjoys building
                modern websites and web applications using React and Laravel.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-700">Age</span>

                  {/* JSX Expression */}
                  <span>{age} Years</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-700">
                    District
                  </span>

                  <span>{district}</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-700">
                    Skills
                  </span>

                  <span className="text-right">{skills}</span>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Why React?
                </h3>

                <p className="text-slate-600 leading-8">
                  React makes it easy to build reusable user interfaces using
                  components. JSX allows us to write HTML-like code inside
                  JavaScript, making development faster and more organized.
                </p>
              </div>

              <div className="mt-10 flex gap-4">

                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  Contact Me
                </button>

                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition">
                  Download CV
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </AppLayout>
       
  );
}

export default App