const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto">
        <p className="text-center">© {new Date().getFullYear()} Simple Next.js App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;