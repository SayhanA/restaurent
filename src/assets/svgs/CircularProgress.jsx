import React from "react";

const CircularProgress = ({
  className = "",
  width = "110",
  height = "95",
  style = {},
  progress = "0",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="32" y="55" fill="#181818" fontSize={25} fontWeight="900">
        {progress}+
      </text>

      <path
        d="M47.6314 2.81333C47.6314 1.51259 48.6867 0.451988 49.9858 0.51698C59.7816 1.00704 69.2025 4.5454 76.9154 10.6672C85.2446 17.2782 91.0917 26.513 93.5057 36.8692C95.9197 47.2255 94.7584 58.0939 90.2108 67.7063C85.6632 77.3187 77.9969 85.1096 68.4589 89.8115C58.921 94.5134 48.0728 95.8496 37.679 93.6028C27.2851 91.356 17.9574 85.6584 11.2131 77.4369C4.46876 69.2153 0.704788 58.9536 0.533458 48.3211C0.374804 38.4753 3.3055 28.8479 8.88229 20.7797C9.62188 19.7097 11.1058 19.5185 12.1375 20.3107C13.1693 21.1028 13.3575 22.578 12.6238 23.6521C7.69138 30.8735 5.10174 39.4628 5.24325 48.2452C5.39745 57.8145 8.78503 67.05 14.8549 74.4494C20.9248 81.8488 29.3198 86.9766 38.6742 88.9988C48.0286 91.0209 57.7921 89.8183 66.3762 85.5866C74.9603 81.3549 81.86 74.3431 85.9529 65.6919C90.0457 57.0407 91.0908 47.2592 88.9183 37.9385C86.7457 28.6179 81.4833 20.3066 73.987 14.3567C67.1072 8.89609 58.7173 5.7194 49.9856 5.23392C48.6868 5.16172 47.6314 4.11408 47.6314 2.81333Z"
        fill="#FEBF00"
      />
      <circle
        cx="12.7113"
        cy="19.917"
        r="6.18981"
        // fill="white"
        stroke="#FEBF00"
        strokeWidth="4"
      />
    </svg>
  );
};

export default CircularProgress;
