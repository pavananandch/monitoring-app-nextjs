"use client";
import { response } from "@/public/mock";
// import { DefaultPagination } from "@/src/app/components/pagination";
// import editLogo from "@/public/edit.png";
// import Image from "next/image";
import AssignDialog from "@/src/app/components/assignDialog";
import { useState } from 'react';
// import { useSelector } from 'react-redux'
export default function ScreenLayout({ params }) {
 
  const [show, setShow] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);
  const { brands } = response;

  const selectedBrand = brands.find((brand) => brand.id === params.brand);

  const selectedScreenGroup = selectedBrand.screenLayouts.find(
    (screenGroup) => screenGroup.id === decodeURIComponent(params.screenLayout)
  );
  selectedScreenGroup.shops.sort((a, b) => {
    if (a.status === "red" && b.status === "green") return -1;
    if (a.status === "green" && b.status === "red") return 1;
    return 0;
  });

  function handleShowDialog(shop) {
    setSelectedShop(shop.name);
    setShow(true);
  }
  const onDialogClose = () => {
    setShow(false);
  }
  return (
    <>
      <div className="main-container">
        <div className="grid-layout">
          {selectedScreenGroup.shops.map((shop, i) => (
            <div
              key={i}
              className={`text-md box-layout p-3 h-20 rounded-lg ${
                shop.status === "green" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <div className="font-extrabold ">{shop.name}</div>
              {shop.status === "red" ? (
                <p className="text-xs pt-3">
                  Assigned to: {shop.assigned ? shop.assigned : "unassigned"}{" "}
                  <span className="inline cursor-pointer" onClick={() => handleShowDialog(shop)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="size-4"
                    >
                      <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                      <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                    </svg>
                  </span>
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
          {/* <DefaultPagination></DefaultPagination> */}
        </div>
        {show && <AssignDialog show={show} onDialogClose={onDialogClose} shop={selectedShop} brandId={selectedBrand.id} layoutId={selectedScreenGroup.id} />}
      </div>
    </>
  );
}
