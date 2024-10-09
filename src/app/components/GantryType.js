import Link from "next/link";

export default function GantryType({ layout, brand }) {
  return (
    <>
      <Link href={`/pages/dashboard/${brand}/${layout.id}`}>
        <div className={`font-extrabold box-layout h-16 text-md p-3 m-3 rounded-lg ${layout.status === 'green' ? 'bg-green-500' : 'bg-red-500'}`}>{layout.name.toUpperCase()}</div>
      </Link>
    </>
  );
}
