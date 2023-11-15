/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center gap-5 border-t border-gray-300 bg-white py-10">
        <a href="" className="text-2xl font-bold">
          <span className="text-indigo-600">QD</span>BT.
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-indigo-600 md:gap-6">
          <a href=""
            className="whitespace-nowrap hover:underline">
            À propos
          </a>
          <a href=""
            className="whitespace-nowrap hover:underline">
            Centre d'aide
          </a>
          <a href=""
            className="whitespace-nowrap hover:underline">
            Politique de confidentialité
          </a>
          <a href=""
            className="whitespace-nowrap hover:underline">
            Conditions d'utilisation
          </a>
        </nav>
        <p className="text-sm text-gray-600">
          &copy; QDBT. All rights reserved.
        </p>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
