
import React from 'react';
import { ProfileCardProps } from '../types';

const ProfileCard: React.FC<ProfileCardProps> = ({ name, specialty, bio, imageUrl, socialLinks }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 max-w-2xl mx-auto my-10 transform transition-all hover:shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <img
          src={imageUrl}
          alt={`الدكتور ${name}`}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-sky-500 shadow-md mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-sky-700 mb-1">{name}</h1>
        <p className="text-lg md:text-xl text-slate-600 mb-4">{specialty}</p>
      </div>

      <div className="my-6 text-right">
        <h2 className="text-xl font-semibold text-sky-600 mb-2 border-b-2 border-sky-200 pb-1">نبذة عني</h2>
        <p className="text-slate-700 leading-relaxed whitespace-pre-line">{bio}</p>
      </div>

      <div className="my-6 text-right">
        <h2 className="text-xl font-semibold text-sky-600 mb-3 border-b-2 border-sky-200 pb-1">وسائل التواصل الاجتماعي</h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-slate-600 hover:text-sky-500 transition-colors duration-300 flex items-center gap-2 p-2 rounded-md hover:bg-sky-50"
            >
              {link.icon}
              <span className="hidden sm:inline">{link.platform}</span>
            </a>
          ))}
        </div>
      </div>
       <div className="text-center mt-8 text-sm text-slate-500">
        <p>يمكنك تعديل هذه المعلومات في ملف <code>App.tsx</code>.</p>
      </div>
    </div>
  );
};

export default ProfileCard;
