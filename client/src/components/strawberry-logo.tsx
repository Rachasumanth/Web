import React from 'react';
import logoImage from '../assets/logo.jpg';

interface StrawberryLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function StrawberryLogo({ size = 'md', className = '' }: StrawberryLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <img
      src={logoImage}
      alt="Strawberry Studios Logo"
      className={`${sizeClasses[size]} object-cover rounded-lg shadow-lg ${className}`}
    />
  );
}
