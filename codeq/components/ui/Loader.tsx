'use client';
export default function Loader() {
  return (
    <div id="loader" role="status" aria-label="Loading codeq">
      <div className="ld-logo">
        <div className="ld-inner" id="ldw">codeq</div>
      </div>
      <div className="ld-track">
        <div className="ld-bar" id="ldb"></div>
      </div>
      <div className="ld-n" id="ldn" aria-live="polite">0%</div>
    </div>
  );
}
