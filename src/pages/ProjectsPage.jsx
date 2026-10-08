import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ArrowRight, Filter, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/interiorData';
import { useSaved } from '../context/SavedContext';

export const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleSaveProject, isProjectSaved } = useSaved();

  const categories = [
    'All', 'Residential', 'Luxury Villas', 'Apartments', 
    'Modular Kitchens', 'Bedrooms', 'Living Rooms', 
    'Commercial Spaces', 'Hospitality'
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = selectedCategory === 'All' || 
        project.category === selectedCategory || 
        project.subCategory === selectedCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.style.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      {/* Editorial Header */}
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            The Atelier Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Architectural Monographs &amp; Residencies
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Explore our portfolio of private penthouses, coastal villas, modular culinary suites, and commanding corporate headquarters crafted across India and the Emirates.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all border rounded-xl ${
                  selectedCategory === cat 
                    ? 'border-gold bg-gold text-charcoal-950 font-semibold shadow-sm' 
                    : 'border-stone-300 bg-white text-stone-600 hover:border-gold/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by project, city, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-300 pl-10 pr-4 py-2 text-xs text-charcoal placeholder-stone-400 focus:outline-none focus:border-gold transition-colors rounded-xl"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-stone-500 font-mono">
          <span>Showing {filteredProjects.length} of {PROJECTS.length} architectural works</span>
          <span>Curated high-resolution monographs</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full px-4 sm:px-6">
        {filteredProjects.length === 0 ? (
          <div className="py-10 text-center space-y-3 bg-white border border-stone-200 p-6 rounded-2xl">
            <h3 className="font-serif text-2xl text-stone-500">No Projects Found</h3>
            <p className="text-xs text-stone-400">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-5 py-2 text-xs uppercase tracking-wider text-gold border border-gold hover:bg-gold hover:text-charcoal transition-colors rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const saved = isProjectSaved(project.id);
              return (
                <div 
                  key={project.id} 
                  className="bg-white border border-stone-200 group shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-between rounded-2xl overflow-hidden"
                >
                  <div>
                    <div className="relative aspect-[16/11] overflow-hidden bg-charcoal-900">
                      <img 
                        src={project.heroImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="absolute top-3 left-3 bg-charcoal-950/80 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase tracking-wider text-ivory border border-white/10 rounded-lg">
                        {project.category}
                      </div>

                      <button
                        onClick={() => toggleSaveProject(project.id)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-charcoal-950/80 text-white hover:text-gold backdrop-blur-md transition-colors"
                        title="Save Project"
                      >
                        <Heart className={`w-3.5 h-3.5 ${saved ? 'text-gold fill-gold' : ''}`} />
                      </button>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                        <span>{project.location}</span>
                        <span>{project.area}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-charcoal group-hover:text-walnut transition-colors leading-tight">
                        <Link to={`/projects/${project.id}`}>
                          {project.title}
                        </Link>
                      </h3>

                      <p className="text-stone-600 text-xs line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-4">
                    <span className="text-[11px] uppercase tracking-wider text-gold font-medium">
                      {project.style}
                    </span>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-xs uppercase tracking-wider text-walnut group-hover:text-gold font-semibold flex items-center gap-1"
                    >
                      <span>Explore Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom CTA Banner */}
      <div className="w-full px-4 sm:px-6 mt-10">
        <div className="bg-charcoal-950 text-ivory p-5 sm:p-8 border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl overflow-hidden">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory">Commission a Bespoke Monograph</h3>
            <p className="text-stone-400 text-xs max-w-xl">
              Discuss your architectural vision, floor plans, and material preferences with our principal project architects.
            </p>
          </div>
          <Link
            to="/consultation"
            className="px-8 py-3.5 bg-gold text-charcoal-950 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-light whitespace-nowrap rounded-xl"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};
