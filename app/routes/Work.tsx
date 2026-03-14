import type { Route } from "./+types/work";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work" },
    { name: "description", content: "Work page" },
  ];
}

export default function Work() {
  return (
    <div>
      <h1>Work Page</h1>
      <p>This is the work page.</p>
      {Array.from({ length: 50 }, (_, i) => (
        <p key={i}>Work paragraph {i + 1}: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      ))}
    </div>
  );
}
