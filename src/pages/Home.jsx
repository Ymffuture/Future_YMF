const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center py-28 px-4 bg-green-50">
      <h2 className="text-4xl md:text-5xl font-bold text-green-700">Fast & Reliable Pest Control</h2>
      <p className="mt-4 text-lg max-w-2xl">We eliminate pests quickly and safely from your home or office.</p>
      <a
        href="https://wa.me/27634414863?text=Hi%20I%20need%20pest%20control%20services"
        target="_blank"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Book on WhatsApp
      </a>
    </section>
  );
};

export default Home;

