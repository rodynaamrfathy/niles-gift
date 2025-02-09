const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <thead className="bg-gray-200">{children}</thead>;
  };
  
  export default TableHead;
  