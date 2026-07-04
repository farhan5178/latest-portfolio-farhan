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
      title: 'SkillSwap BD',
      description: 'A student skill exchange platform where students can offer and learn skills from each other. Features user authentication, skill listings, and booking system.',
      image: '/skillswap_preview.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js'],
      category: 'Full-Stack',
      liveUrl: 'https://skill-swap-bd.vercel.app/',
      githubUrl: 'https://github.com/farhan5178/SkillSwapBD',
      featured: true,
    },
    {
      id: 2,
      title: 'BookVibe',
      description: 'A modern book discovery and review platform. Browse books by category, read reviews, and manage your personal reading list with a clean UI.',
      image: '/bookvibe_preview.png',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'REST API'],
      category: 'Frontend',
      liveUrl: 'https://book-vibe-cyan.vercel.app/',
      githubUrl: 'https://github.com/farhan5178/Book-Vibe',
      featured: true,
    },
    {
      id: 3,
      title: 'DeveloperLook',
      description: 'An interview assignment project showcasing modern frontend development skills with clean UI components and responsive design.',
      image: '/developerlook_preview.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      category: 'Frontend',
      liveUrl: 'https://developer-look-interview-assignment.vercel.app/',
      githubUrl: 'https://github.com/farhan5178/DeveloperLook-interview-assignment',
      featured: true,
    },
    {
      id: 4,
      title: 'MovieVibe',
      description: 'A movie browsing platform with modern UI. Discover trending movies, search by genre, and explore detailed movie information.',
      image: '/movievibe_preview.png',
      technologies: ['React', 'Tailwind CSS', 'REST API'],
      category: 'Frontend',
      liveUrl: 'https://movie-vibe-ashen.vercel.app/',
      githubUrl: 'https://github.com/farhan5178/MovieVibe',
      featured: true,
    },
    {
      id: 5,
      title: 'QurbaniHat',
      description: 'An online platform for Qurbani (Eid-ul-Adha) cattle marketplace. Browse, filter and purchase livestock with a smooth user experience.',
      image: '/qurbanihat_preview.png',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      category: 'Full-Stack',
      liveUrl: 'https://qurbani-hat-rho.vercel.app/',
      githubUrl: 'https://github.com/farhan5178/QurbaniHat',
      featured: true,
    },
    {
      id: 6,
      title: 'Sehrish AI',
      description: 'An AI-powered web application with an intelligent interface. Features modern design and seamless AI integration for a smart user experience.',
      image: '/sehrishai_preview.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'AI/API'],
      category: 'Full-Stack',
      liveUrl: 'https://sehrish-ai.vercel.app/',
      githubUrl: 'https://github.com/farhan5178/SehrishAi',
      featured: true,
    },
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