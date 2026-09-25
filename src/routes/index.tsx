import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl">
        Hello World
      </h1>
      <p className="mt-4 text-base text-slate-500 sm:text-lg">
        A tiny app, up and running.
      </p>
    </main>
  );
}
