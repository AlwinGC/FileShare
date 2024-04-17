// If user tries to visit a no existing page
// there is already a page for this but if you want overide it, you will have to create a not-found.js page

import Link from "next/link";

function NotFound() {
  return (
    <>
      <div className="notFoundContainer">
        <h2 className="notFound">Not Found</h2>
        <p className="notFoundText">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">Return Home</Link>
      </div>
    </>
  );
}

export default NotFound;
