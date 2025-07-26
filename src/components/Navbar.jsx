import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">PestGuard</h1>
        <div className="space-x-4 text-sm font-medium">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/services" className="hover:text-green-500">Services</Link>
          <Link to="/about" className="hover:text-green-500">About</Link>
          <Link to="/contact" className="hover:text-green-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

