
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
            Hello, I'm a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I enjoy building sites & apps with{" "}
            <span className="font-semibold text-blue-600">React, React Native</span> and{" "}
            <span className="font-semibold text-purple-600">Node.js</span>. 
            I have{" "}
            <span className="font-semibold text-gray-800">7+ years</span> of experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact me here
            </button>
            
            <a
              href="/resume.pdf"
              className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            className="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
