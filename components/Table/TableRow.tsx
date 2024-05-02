interface TableRowProps {
  label: string;
  value: string | number | boolean;
  isHighlighted?: boolean;
}

export const TableRow = ({ label, value, isHighlighted }: TableRowProps) => {
  return (
    <tr className={isHighlighted ? "bg-slate-900" : ""}>
      <td className="font-semibold p-2">{label}</td>
      <td className="font-bold">{value}</td>
    </tr>
  );
};
