import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-dark">
      <h1 className="lg:text-[80px] text-3xl text-primary font-bold lg:mb-8">404</h1>
      <h2 className="text-4xl font-medium font-gotham mb-4 text-white">This page could not be found</h2>
      <Link to="/" className="bg-green-600 text-white py-2 px-6 rounded-lg">
        <span>Back to dashboard</span>
      </Link>
    </div>
  );
}
