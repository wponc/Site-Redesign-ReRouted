import type { Route } from "./+types/Personal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Personal" },
    { name: "description", content: "Personal page" },
  ];
}

export default function Personal() {
  return (
    <div>
      <h1>Personal Page</h1>
      <p>This is the personal page.</p>
      {Array.from({ length: 50 }, (_, i) => (
        <p key={i}>Personal paragraph {i + 1}: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      ))}
    </div>
  );
}
