'use client';
export default function Cursor() {
  return (
    <>
      {/* Custom cursor — hidden on touch devices via CSS/JS */}
      <div id="cursor-q" aria-hidden="true">Q</div>
      <div id="clabel" aria-hidden="true"></div>
    </>
  );
}
