import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`p-4 border rounded-lg shadow ${className}`}>{children}</div>;
};

export default Card;
