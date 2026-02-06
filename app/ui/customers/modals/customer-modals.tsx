"use client";

import Image from "next/image";

export default function ModalPage({ id, name }: { id: string; name: string }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={close} // clicking backdrop closes modal
    >
      <div
        className="bg-white rounded-xl w-[500px] max-w-[90%] p-6 relative shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent close on modal content click
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
        ></button>

        <div className="flex items-center gap-4 mb-4">
          {/* <Image
            src={image_url}
            alt={name}
            width={64}
            height={64}
            className="rounded-full object-cover"
          /> */}
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">ID: {id}</p>
          </div>
        </div>

        <p className="text-gray-700">
          Additional customer details can go here.
        </p>
      </div>
    </div>
  );
}
