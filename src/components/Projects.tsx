'use client';

import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Globe } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      id: 1,
      title: 'MovieFlix',
      description: 'Simple movie landing page with modern UI.',
      image: '',
      technologies: ['HTML', 'CSS'],
      category: 'Frontend',
      liveUrl: 'https://movieflix-f3.vercel.app/',
      githubUrl: 'https://github.com/farhan5178/MovieFlix',
      featured: true,
    },
    {
      id: 2,
      title: 'Tea House Website',
      description: 'Modern responsive tea shop landing page.',
      image: '',
      technologies: ['HTML', 'CSS', 'Tailwind'],
      category: 'Frontend',
      liveUrl: 'https://tea-house24.vercel.app/',
      githubUrl: 'https://github.com/farhan5178/tea-house-demo-1',
      featured: true,
    },
    {
      id: 3,
      title: 'bKash UI Clone',
      description: 'Mobile banking UI clone with clean design.',
      image: '',
      technologies: ['React', 'Tailwind'],
      category: 'Frontend',
      liveUrl: 'https://bkash-demo-f3.vercel.app/',
      githubUrl: 'https://github.com/farhan5178/bkash-demo',
      featured: true,
    }
    
  ];

  const displayedProjects = showAll
    ? allProjects
    : allProjects.filter(p => p.featured);

  const getIcon = (category: string) => {
    return category === 'Full-Stack' ? <Code size={18} /> : <Globe size={18} />;
  };

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="py-20 bg-black">

      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-purple-400">Projects</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700"
              >

                {/* IMAGE */}
                <div className="h-48 relative bg-slate-800">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    {getIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-5">

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="flex-1 bg-purple-600 text-white py-2 rounded text-center"
                    >
                      Live
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="flex-1 border border-gray-600 text-white py-2 rounded text-center"
                    >
                      Code
                    </a>

                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>

        </div>

        {/* BUTTON */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl"
          >
            {showAll ? 'Show Less' : 'See All Projects'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;