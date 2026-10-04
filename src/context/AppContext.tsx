'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserProfile } from '@/types';

interface AppContextType {
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  joinOpen: boolean;
  openJoin: () => void;
  closeJoin: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  savedItems: string[];
  toggleSave: (id: string) => void;
  likedPosts: number[];
  toggleLike: (index: number) => void;
  user: UserProfile | null;
  saveUser: (user: UserProfile) => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileNav: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Initialize from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('saved');
      if (saved) setSavedItems(JSON.parse(saved));

      const liked = localStorage.getItem('liked');
      if (liked) setLikedPosts(JSON.parse(liked));

      const u = localStorage.getItem('user');
      if (u) setUser(JSON.parse(u));
    } catch (e) {
      console.error('Failed to load state from localStorage', e);
    }
  }, []);

  // Keyboard shortcut for search (Ctrl+K, Cmd+K, or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput = ['INPUT', 'SELECT', 'TEXTAREA'].includes(target?.tagName);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === '/' && !isInput) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
        setJoinOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  const openJoin = () => setJoinOpen(true);
  const closeJoin = () => setJoinOpen(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2400);
  };

  const toggleSave = (id: string) => {
    setSavedItems((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem('saved', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      showToast(next.includes(id) ? 'Saved to your profile ✓' : 'Removed from saved');
      return next;
    });
  };

  const toggleLike = (index: number) => {
    setLikedPosts((prev) => {
      const next = prev.includes(index) ? prev.filter((x) => x !== index) : [...prev, index];
      try {
        localStorage.setItem('liked', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const saveUser = (newUser: UserProfile) => {
    setUser(newUser);
    try {
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }
    closeJoin();
    showToast(`Welcome, ${newUser.name.split(' ')[0]}! Profile created.`);
  };

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  return (
    <AppContext.Provider
      value={{
        searchOpen,
        openSearch,
        closeSearch,
        joinOpen,
        openJoin,
        closeJoin,
        toastMessage,
        showToast,
        savedItems,
        toggleSave,
        likedPosts,
        toggleLike,
        user,
        saveUser,
        mobileNavOpen,
        setMobileNavOpen,
        toggleMobileNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
