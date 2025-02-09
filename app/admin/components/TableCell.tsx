const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <td className="p-2 border">{children}</td>;
  };
  
  export default TableCell;
  