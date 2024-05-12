import React from "react";

export default function Viewer({ count }: { count: number }) {
  return (
    <section className="bg-[#F5F5F5] w-full rounded border border-solid border-[#E0E0E0] box-border p-5">
      <p className="pb-2">Now Count...</p>
      <p className="text-2xl font-semibold">{count}</p>
    </section>
  );
}
