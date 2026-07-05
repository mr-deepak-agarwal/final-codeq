'use client';
import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    document.body.classList.add('cq-active');
    return () => document.body.classList.remove('cq-active');
  }, []);

  return (
    <>
      {/* Custom cursor — hidden on touch devices via CSS/JS */}
      <div id="cursor-q" aria-hidden="true">Q</div>
      <div id="clabel" aria-hidden="true"></div>
    </>
  );
}
