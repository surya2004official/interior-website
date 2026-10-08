import React, { useState } from 'react';
import { ArrowRight, Clock, User, X, Share2, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/interiorData';

export const BlogPage = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <div className="bg-ivory text-charcoal pt-20 pb-10">
      <div className="w-full px-4 sm:px-6 mb-8">
        <div className="border-b border-stone-300 pb-8 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            The Atelier Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal tracking-tight">
            Architectural Essays &amp; Material Intelligence
          </h1>
          <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
            Written perspectives from our principal architects and stone masters exploring circadian lighting physics, Italian quarry curation, and restorative biophilic interiors.
          </p>
        </div>
      </div>

      {/* Featured Lead Article */}
      <div className="w-full px-4 sm:px-6 mb-8">
        <div 
          onClick={() => setActiveArticle(BLOG_POSTS[0])}
          className="bg-white border border-stone-200 shadow-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
        >
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden">
            <img 
              src={BLOG_POSTS[0].image} 
              alt={BLOG_POSTS[0].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-gold font-semibold uppercase tracking-wider">
                <span>{BLOG_POSTS[0].category}</span>
                <span className="text-stone-400">&bull; {BLOG_POSTS[0].readTime}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-walnut transition-colors leading-tight">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                {BLOG_POSTS[0].excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">{BLOG_POSTS[0].author}</span>
              <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center gap-1">
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(1).map(post => (
            <div 
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="bg-white border border-stone-200 group overflow-hidden shadow-sm hover:shadow-luxury transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-gold uppercase tracking-wider font-semibold">
                    <span>{post.category}</span>
                    <span className="text-stone-400 font-normal">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal group-hover:text-walnut transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 mt-4">
                <span>{post.author}</span>
                <span className="text-gold font-semibold flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="bg-white border border-gold max-w-3xl w-full p-6 sm:p-6 text-charcoal space-y-6 my-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                {activeArticle.category} &bull; {activeArticle.readTime}
              </span>
              <button onClick={() => setActiveArticle(null)} className="text-stone-400 hover:text-charcoal p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl text-charcoal">
                {activeArticle.title}
              </h2>
              <div className="text-xs text-stone-500 flex items-center gap-4">
                <span>By {activeArticle.author}</span>
                <span>{activeArticle.date}</span>
              </div>
            </div>

            <div className="aspect-[16/9] overflow-hidden">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-serif">
              {activeArticle.content}
            </div>

            <div className="pt-6 border-t border-stone-200 flex justify-between items-center">
              <span className="text-xs text-stone-500">Aurelia &amp; Stone Editorial Atelier</span>
              <button 
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2 bg-walnut text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-charcoal"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
