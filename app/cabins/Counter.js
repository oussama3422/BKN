"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);
  
  return (
    <div>
      <p>There are {users.length} user.</p>
      <button onClick={() => setCount((ct) => ct + 1)}>{count}</button>
    </div>
  );
}
