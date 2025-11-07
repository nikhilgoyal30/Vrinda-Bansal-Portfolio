import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-16">
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent mb-6"></div>
      <div className="container mx-auto px-6 text-center">
        <p className="text-[var(--text-muted)] text-sm">
          © {new Date().getFullYear()} Vrinda Bansal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;