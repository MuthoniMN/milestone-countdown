const TimerRing = ({ timeLeft, totalTime, label }: { timeLeft: number, totalTime: number, label: string }) => {
  // Calculate percentage of time left
  const percentage = (timeLeft / totalTime) * 100;
  const radius = 80; // Radius of the circle
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ textAlign: "center" }} className="w-full max-w-[200px] m-auto">
      <svg viewBox="0 0 200 200" style={{width: "100%", height: "auto"}}>
       <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stop-color="#3d016f" />
            <stop offset="100%" stop-color="#8b17a3" />
          </linearGradient>
        </defs>
      <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#e0e0e0"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="progress-circle"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
        <text
          x="100"
          y="100"
          textAnchor="middle"
          fontSize="72"
          fill="#333"
          fontWeight="bold"
        >
          {timeLeft}
        </text>
        {/* Label (e.g., "hours", "minutes") */}
        <text
          x="100"
          y="140"
          textAnchor="middle"
          fontSize="20"
          fontWeight="400"
          fill="#666"
        >
          {label}
        </text>
      </svg>
    </div>
  );
};

export default TimerRing;
