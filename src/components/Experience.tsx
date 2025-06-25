
import { experiencesData } from "@/lib/data";

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            My Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            My journey as a developer
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiencesData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white dark:bg-gray-800 border-4 border-blue-600 rounded-full z-10"></div>

                {/* Content */}
                <div className={`ml-16 sm:ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start mb-3">
                      <div className="mr-3 text-blue-600 dark:text-blue-400 mt-1">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{item.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <span className="inline-block px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm rounded-full font-medium">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
