import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedProjectIds, setSavedProjectIds] = useState(() => {
    try {
      const stored = localStorage.getItem('as_saved_projects');
      return stored ? JSON.parse(stored) : ['altamount-sky-penthouse', 'worli-duplex-kitchen'];
    } catch {
      return ['altamount-sky-penthouse'];
    }
  });

  const [savedImages, setSavedImages] = useState(() => {
    try {
      const stored = localStorage.getItem('as_saved_images');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [savedMoodboard, setSavedMoodboard] = useState(() => {
    try {
      const stored = localStorage.getItem('as_saved_moodboard');
      return stored ? JSON.parse(stored) : [
        { id: "init-1", type: "image", title: "Modern Curved Lounge", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80" },
        { id: "init-2", type: "swatch", title: "Champagne Gold", hex: "#C5A47E" },
        { id: "init-3", type: "material", title: "Book-matched Calacatta Marble", texture: "Smooth Polished" }
      ];
    } catch {
      return [];
    }
  });

  const [savedEstimate, setSavedEstimate] = useState(() => {
    try {
      const stored = localStorage.getItem('as_saved_estimate');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('as_saved_projects', JSON.stringify(savedProjectIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedProjectIds]);

  useEffect(() => {
    try {
      localStorage.setItem('as_saved_images', JSON.stringify(savedImages));
    } catch (e) {
      console.error(e);
    }
  }, [savedImages]);

  useEffect(() => {
    try {
      localStorage.setItem('as_saved_moodboard', JSON.stringify(savedMoodboard));
    } catch (e) {
      console.error(e);
    }
  }, [savedMoodboard]);

  useEffect(() => {
    try {
      if (savedEstimate) {
        localStorage.setItem('as_saved_estimate', JSON.stringify(savedEstimate));
      }
    } catch (e) {
      console.error(e);
    }
  }, [savedEstimate]);

  const toggleSaveProject = (projectId) => {
    setSavedProjectIds(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const isProjectSaved = (projectId) => savedProjectIds.includes(projectId);

  const toggleSaveImage = (imgItem) => {
    setSavedImages(prev => {
      const exists = prev.some(item => item.id === imgItem.id);
      if (exists) {
        return prev.filter(item => item.id !== imgItem.id);
      } else {
        return [...prev, imgItem];
      }
    });
  };

  const isImageSaved = (id) => savedImages.some(item => item.id === id);

  const addToMoodboard = (item) => {
    setSavedMoodboard(prev => {
      if (prev.some(el => el.id === item.id)) return prev;
      return [...prev, { ...item, addedAt: Date.now() }];
    });
  };

  const removeFromMoodboard = (id) => {
    setSavedMoodboard(prev => prev.filter(el => el.id !== id));
  };

  const clearMoodboard = () => {
    setSavedMoodboard([]);
  };

  const saveCalculation = (estimateData) => {
    setSavedEstimate(estimateData);
  };

  return (
    <SavedContext.Provider value={{
      savedProjectIds,
      toggleSaveProject,
      isProjectSaved,
      savedImages,
      toggleSaveImage,
      isImageSaved,
      savedMoodboard,
      addToMoodboard,
      removeFromMoodboard,
      clearMoodboard,
      savedEstimate,
      saveCalculation,
      totalSavedCount: savedProjectIds.length + savedImages.length + savedMoodboard.length
    }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used within a SavedProvider');
  }
  return context;
};
