export default function app() {
  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "user page title",
    description: "this is a user page",
  };
}
