"use client";
import Image from "next/image";
import NewEditor from "@/app/components/Editor"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <NewEditor code={`

// Available Images:
// - my-code-playground/galaxy
// - my-code-playground/turtle
// - my-code-playground/mario

// Try some transformations:
// https://next.cloudinary.dev/cldimage/examples

<h1>Crazy World</h1>
        `} />
    </main>
  );
}
