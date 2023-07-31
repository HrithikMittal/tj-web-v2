"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  console.log("Home Pahe");

  useEffect(() => {}, []);

  return (
    <div>
      Home Page
      <div>Category 1</div>
      <div>
        <Link href="/category/adhikansh">Category 2</Link>
      </div>
      <div>Category 3</div>
      <div>Category 4</div>
      <div>Category 5</div>
    </div>
  );
}
