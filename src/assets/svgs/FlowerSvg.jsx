import React from "react";

const FlowerSvg = ({
  width = "49",
  height = "49",
  className = "",
  style = {},
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
      <path
        d="M24.4995 24.5914C24.4995 24.5914 27.6425 29.8451 33.8558 32.8899C40.069 35.9356 47 35.6189 47 35.6189C47 35.6189 43.858 30.3643 37.6448 27.3195C31.4315 24.2747 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.5914C24.4995 24.5914 17.5685 24.2747 11.3552 27.3195C5.142 30.3643 2 35.6189 2 35.6189C2 35.6189 8.93101 35.9356 15.1442 32.8899C21.3575 29.8451 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.4086C24.4995 24.4086 21.3575 19.1549 15.1442 16.1101C8.93101 13.0644 2 13.3819 2 13.3819C2 13.3819 5.142 18.6357 11.3552 21.6813C17.5685 24.7261 24.4995 24.4086 24.4995 24.4086ZM24.4995 24.4086C24.4995 24.4086 31.4315 24.7261 37.6448 21.6813C43.858 18.6357 47 13.3819 47 13.3819C47 13.3819 40.069 13.0644 33.8558 16.1101C27.6425 19.1549 24.4995 24.4086 24.4995 24.4086ZM28.2885 35.9725C28.2885 42.0629 24.4995 47 24.4995 47C24.4995 47 20.7105 42.0629 20.7105 35.9725C20.7105 29.882 24.4995 24.9441 24.4995 24.9441C24.4995 24.9441 28.2885 29.882 28.2885 35.9725ZM20.7105 13.0275C20.7105 6.93793 24.4995 2 24.4995 2C24.4995 2 28.2885 6.93793 28.2885 13.0275C28.2885 19.118 24.4995 24.055 24.4995 24.055C24.4995 24.055 20.7105 19.118 20.7105 13.0275Z"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default FlowerSvg;