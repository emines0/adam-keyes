import React from 'react';
import socials from '../assets/data/socials';

const Socials = () => {
  return (
    <>
      <div className="socials">
        {socials.map((social, i) => {
          return (
            <a
              key={i}
              href={social.url}
            >
              <img
                src={social.icon}
                alt={social.title}
              />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Socials;
