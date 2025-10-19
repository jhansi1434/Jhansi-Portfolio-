
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
              After completing my{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-100">Master's in Physics</span>, 
              I discovered my passion for web development and transitioned into development. 
              I have gained{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">3+ years of experience</span> working with modern technologies.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">FullStatck Developer</span> specializing in{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-100">React, Next.js, React Native, and modern web technologies</span>. 
              I enjoy creating responsive, user-friendly applications and have worked on healthcare, e-commerce, and utility platforms.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy staying up-to-date with the latest trends and exploring new frameworks. 
              I'm currently working as a{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-100">FullStatck Developer</span> at Zelarsoft Pvt Ltd.
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
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">FullStatck Developer</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">3+ Years Experience</p>
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
