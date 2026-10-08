
import { projectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are a few projects I've worked on recently. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="h-full max-w-[320px] w-full mx-auto bg-slate-900/80 dark:bg-gray-900 rounded-2xl border border-slate-700/60 shadow-[0_10px_30px_rgba(15,23,42,0.35)] overflow-hidden hover:shadow-[0_14px_32px_rgba(59,130,246,0.18)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-36 sm:h-40 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-[11px] sm:text-xs font-medium text-blue-200 border border-blue-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
