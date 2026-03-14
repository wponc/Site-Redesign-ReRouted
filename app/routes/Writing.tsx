import type { Route } from "./+types/writing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Writing" },
    { name: "description", content: "Writing page" },
  ];
}

export default function Writing() {
  return (
    <div>
      <h1>Writing Page</h1>
      <p>This is the Writing page.</p>
      {Array.from({ length: 50 }, (_, i) => (
        <p key={i}>Personal paragraph {i + 1}: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      ))}
    </div>
  );
}
