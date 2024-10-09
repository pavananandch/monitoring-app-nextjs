import { response } from "@/public/mock";
import GantryType from "@/src/app/components/GantryType";

export default function GantryTypes({ params }) {
  const {brands} = response;
  const selectedBrand = brands.find(brand => brand.id === params.brand);
  const {screenLayouts} = selectedBrand;
  screenLayouts.sort((a, b) => {
    if (a.status === 'red' && b.status === 'green') return -1;
    if (a.status === 'green' && b.status === 'red') return 1;
    return 0;
  });
  return (
    <main>
      <div className="main-container flex flex-row">
          {screenLayouts.map((layout, i) => (
            <GantryType key={i} layout={layout} brand={params.brand} />
          ))}
      </div>
    </main>
  );
}
