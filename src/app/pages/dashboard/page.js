import Link from "next/link";
import Image from "next/image";
import ladsLogo from "@/public/Ladbrokes.png";
import coralLogo from "@/public/Coral.png";
import { response } from "@/public/mock";
import axios from "axios";

export default function Dashboard() {
  const { brands } = response;

  axios
      .get("/api/getBrands")
      .then((res) => {
        console.log({res});
      })
      .catch((e) => {
        console.log(e);
      });
  const redShops = brands.flatMap((brand) =>
    brand.screenLayouts.flatMap((screenLayout) =>
      screenLayout.shops
        .filter((shop) => shop.status === "red")
        .map((shop) => ({
          brand: brand.id,
          shopId: shop.id,
          shopName: shop.name,
          assigned: shop.assigned,
          screenLayout: screenLayout.id
        }))
    )
  );
  return (
    <>
      <div className="grid grid-cols-[1fr_auto] h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex justify-center items-center">
          <main className="flex flex-col gap-8">
            <div className="flex gap-8">
              {brands.map((brand) => (
                <Link href={`/pages/dashboard/${brand.id}`} key={brand.id}>
                  <div
                    className={`p-8 ${
                      brand.status === "green" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    <Image
                      className="border-black"
                      src={brand.id === "coral" ? coralLogo : ladsLogo}
                      width={500}
                      height={500}
                      alt={brand.name}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>

        <div className="bg-gray-100 w-64 p-6 ml-16 shadow-lg">
          <h2 className="text-md font-semibold mb-4">Quick Links ({redShops.length})</h2>
          <ul className="space-y-2">
            {redShops.map((shop, index) => (
              <li key={index}>
                <Link href={`/pages/dashboard/${shop.brand}/${shop.screenLayout}`} className="text-blue-500 hover:underline">
                  {shop.shopName} - {shop.assigned ? shop.assigned : 'unassigned'}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
