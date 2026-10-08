
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              After completing my <span className="font-semibold text-gray-800 dark:text-gray-100">Master’s in Physics</span>, I discovered my passion for software development and decided to transition into the technology industry. Since then, I have gained <span className="font-semibold text-blue-600 dark:text-blue-400">4 years of professional experience</span> building modern, scalable web and mobile applications.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m an <span className="font-semibold text-purple-600 dark:text-purple-400">AI Full Stack Developer</span> specializing in <span className="font-semibold text-gray-800 dark:text-gray-100">React, Next.js, React Native, Node.js, Python, and Generative AI technologies</span>. I have experience building user-friendly applications and AI-powered enterprise platforms across <span className="font-semibold text-blue-600 dark:text-blue-400">healthcare, e-commerce, utility, and DevOps automation</span> domains.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy solving real-world problems through technology, learning new frameworks, and keeping up with the latest developments in <span className="font-semibold text-gray-800 dark:text-gray-100">AI and modern web development</span>. Currently, I’m working as an <span className="font-semibold text-gray-800 dark:text-gray-100">AI Full Stack Developer at Zelarsoft Pvt. Ltd.</span>
            </p>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full transform rotate-6"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-xl sm:text-3xl font-bold text-white">NJ</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">AI FullStatck Developer</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">4 Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
