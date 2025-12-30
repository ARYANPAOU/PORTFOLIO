import React from 'react';

// This component centers an <h2> exactly in the middle of the page.
// It assumes you have a `.bits` CSS class in your index.css that sets the font-family.

export default function Bitheading() {
  return (
    <div className="min-h-20  flex items-center justify-center -mt-35">
      <h2 className="text-4xl bits  text-center">
        CERTIFICATIONS & FEATS
      </h2>
    </div>
  );
}
