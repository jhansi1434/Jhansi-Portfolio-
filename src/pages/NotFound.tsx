import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="section-heading__eyebrow">404 · Route not found</p>
        <h1>This page isn&apos;t part of the portfolio.</h1>
        <p>That address may have changed, or the page may no longer exist.</p>
        <Link className="button button--primary" to="/">
          <ArrowLeft aria-hidden="true" />
          <span>Return to home</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

