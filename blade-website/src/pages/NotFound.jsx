import { Link } from "react-router";

function NotFound() {
  return (
    <main className="section-frame flex min-h-[70vh] items-center justify-center py-20">
      <div className="glass-card max-w-2xl px-8 py-12 text-center sm:px-12">
        <p className="section-kicker">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-brand-ink">
          This page could not be found.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
          The route exists in the app shell, but this specific page is not available.
        </p>
        <Link to="/" className="button-primary mt-8">
          Return home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
