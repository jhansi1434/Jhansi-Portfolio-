
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-4 sm:right-10 w-32 h-32 sm:w-72 sm:h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-10 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Naga Jhansi
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200">
            Frontend Developer
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Detail-oriented Frontend Developer with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">3+ years of experience</span> in building responsive and user-centric web and mobile applications using{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">React, Next.js,</span> and{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-100">React Native</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact me
            </button>
            
            <a
              href="mailto:jhansipasupaleti48@gmail.com"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-gray-500 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
