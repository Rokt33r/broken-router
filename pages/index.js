import React from "react";
import Link from "next/link";

export default () => (
  <div>
    Hello World.{" "}
    <Link href="/posts/[id]?id=1" as="/posts/1">
      <a>Post 1</a>
    </Link>
    <Link href="/posts/[id]?id=2" as="/posts/2">
      <a>Post 2</a>
    </Link>
  </div>
);
