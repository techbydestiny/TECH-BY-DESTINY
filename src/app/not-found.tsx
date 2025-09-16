import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <p className="text-2xl font-semibold mt-6 text-gray-700">Page Not Found</p>
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-white bg-gray-900 rounded-lg shadow hover:bg-gray-800 transition"
      >
        <FaArrowLeft />
        Go Back Home
      </a>
    </div>
  );
}
