import React from 'react';
import { Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-white text-sm">
          © Designed and Created by Aryan Paou
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://instagram.com/aryan.paou" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity flex items-center gap-1"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" stroke="url(#instagram-gradient)" strokeWidth="2"/>
              <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient)"/>
              <defs>
                <linearGradient id="instagram-gradient" x1="0" y1="24" x2="24" y2="0">
                  <stop stopColor="#E1306C"/>
                  <stop offset="1" stopColor="#C13584"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xs text-gray-400">Most Active</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/aryan-paou-731578311" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#0A66C2"/>
              <path d="M7.5 9H5V19H7.5V9ZM6.25 7.75C7.08 7.75 7.75 7.08 7.75 6.25C7.75 5.42 7.08 4.75 6.25 4.75C5.42 4.75 4.75 5.42 4.75 6.25C4.75 7.08 5.42 7.75 6.25 7.75ZM19 19H16.5V14.25C16.5 13.19 16.48 11.81 15.01 11.81C13.52 11.81 13.3 12.97 13.3 14.17V19H10.8V9H13.2V10.25H13.23C13.57 9.61 14.43 8.94 15.71 8.94C18.24 8.94 19 10.58 19 12.75V19Z" fill="white"/>
            </svg>
          </a>
          
          <a 
            href="https://github.com/ARYANPAOU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.865 20.125 8.839 21.488C9.339 21.575 9.521 21.275 9.521 21.012C9.521 20.775 9.513 20.1 9.508 19.238C6.726 19.841 6.139 17.746 6.139 17.746C5.685 16.547 5.029 16.248 5.029 16.248C4.121 15.628 5.098 15.641 5.098 15.641C6.101 15.715 6.629 16.664 6.629 16.664C7.521 18.207 8.97 17.766 9.539 17.512C9.631 16.865 9.889 16.424 10.175 16.176C7.955 15.925 5.619 15.067 5.619 11.25C5.619 10.111 6.01 9.182 6.649 8.451C6.546 8.201 6.203 7.185 6.746 5.789C6.746 5.789 7.586 5.523 9.496 6.798C10.296 6.576 11.146 6.465 11.996 6.461C12.846 6.465 13.696 6.576 14.496 6.798C16.406 5.523 17.246 5.789 17.246 5.789C17.789 7.185 17.446 8.201 17.343 8.451C17.983 9.182 18.371 10.111 18.371 11.25C18.371 15.077 16.032 15.922 13.806 16.168C14.16 16.477 14.486 17.084 14.486 18.009C14.486 19.351 14.475 20.434 14.475 20.775C14.475 21.041 14.655 21.344 15.163 21.23C19.137 19.864 22 16.162 22 11.742C22 6.219 17.523 1.742 12 1.742" fill="#181717"/>
            </svg>
          </a>
          
          <a 
            href="mailto:aryanpaou12981@gmail.com"
            className="hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <Mail size={20} className="text-cyan-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;