import React from 'react';

const Container = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-primary-bg-light dark:bg-primary-bg-dark w-full max-w-8xl mx-auto px-4 md:px-1"
    >
      {children}
    </div>
  );
};

export default Container;