const Logo = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6a5acd" />
          <stop offset="100%" stop-color="#9370db" />
        </linearGradient>
        <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff8c00" />
          <stop offset="100%" stop-color="#ffa500" />
        </linearGradient>
      </defs>

      <path
        d="M10,35 L25,42 L40,35 V15 C40,10 35,8 30,10 L25,12 L20,10 C15,8 10,10 10,15 Z"
        fill="url(#bookGradient)"
        stroke="#4b0082"
        stroke-width="0.5"
      />

      <path
        d="M25,12 V42 M15,18 V32 M20,16 V34 M30,16 V34 M35,18 V32"
        stroke="#fff"
        stroke-width="0.8"
        stroke-linecap="round"
      />

      <path d="M15,22 L35,22 L32,15 L18,15 Z" fill="url(#capGradient)" />
      <rect x="22" y="15" width="6" height="8" fill="#ffd700" />

      <path d="M42,8 L45,5 M45,8 L42,5" stroke="#ffd700" stroke-width="1" />
    </svg>
  );
};

export default Logo;
