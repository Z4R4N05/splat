import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
          <p>Thank you for your support and hope you enjoyed our app!  </p>
        &copy;{new Date().getFullYear()} Splat by Christian Rodriguez, Eddy Souza and Ismael Espana
      </div>
    </footer>
  );
};

export default Footer;
