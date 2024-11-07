import React from "react";

const DubbleCoute = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9216 5.8571C12.7206 5.8571 13.3997 6.13675 13.959 6.69605C14.5183 7.25535 14.798 7.9345 14.798 8.7335C14.798 9.5325 14.5183 10.2316 13.959 10.8309C13.3997 11.3902 12.7006 11.6698 11.8616 11.6698C11.0227 11.6698 10.3435 11.3902 9.8242 10.8309C9.30485 10.2716 9.00522 9.51253 8.92532 8.55372C8.72557 6.91577 9.12507 5.33775 10.1238 3.81965C11.1226 2.30155 12.6407 1.18294 14.6781 0.463844L15.1575 1.36272C13.2799 1.84212 12.0015 2.78095 11.3223 4.1792C11.0027 5.138 11.2025 5.6973 11.9216 5.8571ZM4.07139 5.8571C4.8704 5.8571 5.54955 6.13675 6.10885 6.69605C6.66815 7.25535 6.9478 7.9345 6.9478 8.7335C6.9478 9.5325 6.66815 10.2316 6.10885 10.8309C5.54955 11.3902 4.85042 11.6698 4.01147 11.6698C3.17252 11.6698 2.49337 11.3902 1.97402 10.8309C1.45467 10.2716 1.15504 9.51253 1.07514 8.55372C0.875393 6.91577 1.27489 5.33775 2.27364 3.81965C3.27239 2.30155 4.7905 1.18294 6.82795 0.463844L7.30735 1.36272C5.4297 1.84212 4.15129 2.78095 3.47214 4.1792C3.15254 5.138 3.35229 5.6973 4.07139 5.8571Z"
        fill="#0A1425"
      />
    </svg>
  );
};

export default DubbleCoute;