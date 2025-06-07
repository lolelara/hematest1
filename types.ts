
import React from 'react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export interface ProfileCardProps {
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}
