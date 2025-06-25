
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              After graduating with a degree in{" "}
              <span className="font-semibold text-gray-800">Electronics and Communication Engineering</span>, 
              I decided to pursue my passion for programming. I taught myself web development and gained{" "}
              <span className="font-semibold text-blue-600">7+ years of experience</span> working with various technologies.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-purple-600">full-stack developer</span> with expertise in{" "}
              <span className="font-semibold text-gray-800">React, React Native, Node.js, and modern web technologies</span>. 
              I enjoy building user-friendly applications and have worked on healthcare, e-commerce, and utility billing platforms.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, I enjoy staying up-to-date with the latest technology trends and exploring new frameworks. 
              I'm currently working as a{" "}
              <span className="font-semibold text-gray-800">Team Lead</span> at Zelarsoft Pvt Ltd.
            </p>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full transform rotate-6"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">Dev</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Full Stack Developer</h3>
                  <p className="text-gray-600">7+ Years Experience</p>
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
