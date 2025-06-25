
import { skillsData } from "@/lib/data";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Technologies and tools I work with on a regular basis
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 hover:border-blue-200"
            >
              <span className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
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
