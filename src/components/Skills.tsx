
import { skillsData } from "@/lib/data";

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I work with on a regular basis
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 rounded-lg p-3 sm:p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
            >
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
