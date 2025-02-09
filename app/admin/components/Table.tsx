import React from 'react';

const Table: React.FC<{ children: React.ReactNode; className?: string }> = ({ children }) => {
  return <table className="w-full border-collapse">{children}</table>;
};

export default Table;
