const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <tr className="border-b">{children}</tr>;
  };
  
  export default TableRow;
  