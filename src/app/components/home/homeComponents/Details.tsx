/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Database, Target } from "lucide-react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
interface DetailsProps {
  // @ts-expect-error home
  project: Project;
}

export const Details = ({ project }: DetailsProps) => {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <div className="relative w-full overflow-hidden px-4 rounded-md py-2 text-sm font-medium text-white bg-gray-700/50 border border-gray-600  hover:border-cyan-400/30 transition-all group">
            <span className="relative z-10">View Project</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 group-hover:opacity-0 opacity-100 transition-opacity duration-300" />
          </div>
        </DialogTrigger>

        <DialogContent
          style={{ zIndex: "999", margin: "75px 0" }}
          className="max-w-4xl  rounded-lg bg-[#424242] border border-gray-700 overflow-hidden"
        >
          <div className="max-h-[90vh] overflow-y-auto">
            {/* Project Header */}
            <DialogHeader className="px-6 pt-6">
              <div className="flex items-start gap-4">
                <div>
                  <DialogTitle className="text-2xl pb-5 font-bold text-white">
                    Project Name :- {project.title}
                  </DialogTitle>
                </div>
              </div>
            </DialogHeader>

            {/* Project Content */}
            <div className="p-6 space-y-8">
              {/* Hero Image */}
              <div className="relative rounded-xl overflow-hidden border border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Description */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      About This Project
                    </h3>
                    <p className="text-gray-300">
                      {project.description || "No description provided."}
                    </p>
                  </div>

                  {/* Features List */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Key Features
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      {project.keyFeatures?.length ? (
                        project.keyFeatures.map(
                          (
                            feature:
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactElement<
                                  unknown,
                                  string | JSXElementConstructor<any>
                                >
                              | Iterable<ReactNode>
                              | ReactPortal
                              | Promise<
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactPortal
                                  | ReactElement<
                                      unknown,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined,
                            index: Key | null | undefined
                          ) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">•</span>
                              {feature}
                            </li>
                          )
                        )
                      ) : (
                        <li>No features listed</li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Metadata Sidebar */}
                <div className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack?.length ? (
                        project.techStack.map((tag: any, index: string) => (
                          <span
                            key={index}
                            className="px-3 py-1  text-cyan-300 rounded-full text-xs font-medium border border-white"
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400">Not specified</span>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Links
                    </h3>
                    <div className="space-y-2">
                      {project.links && (
                        <a
                          href={project.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub Repository</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                      {project.links[1] && (
                        <a
                          href={project.links[1].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <Target className="w-4 h-4" />
                          <span>Live Project</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                      {project.links[2].url && (
                        <a
                          href={project.links[2].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <Database className="w-4 h-4" />

                          <span>GitHub Server side</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
