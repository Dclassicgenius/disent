import { TableRow } from "./TableRow";

interface TableSectionProps {
  title?: string | "";
  data: { label: string; value: string | number | boolean }[];
}

export const TableSection = ({ title, data }: TableSectionProps) => {
  return (
    <div>
      <p className="font-bold text-2xl my-3 text-center border-b">{title}</p>
      <table className="w-full">
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              label={item.label}
              value={item.value}
              isHighlighted={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
