import React, { ReactNode } from 'react';

interface MaxWidthProps {
  children: ReactNode;
}

const MaxWidth: React.FC<MaxWidthProps> = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  );
};

export default MaxWidth;
