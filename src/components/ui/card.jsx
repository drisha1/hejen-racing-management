
import React from 'react';
import { cn } from '../../utils/cn';

export function Card({ className, ...props }) {
    return (
      <div
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          className
        )}
        {...props}
      />
    );
  }
  