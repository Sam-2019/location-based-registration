import React from "react";

export const MapButton = ({ action, children, id, loading, value }) => {
  return (
    <button id={id} onClick={action}>
      {loading ? "Loading" : value}
    </button>
  );
};

export const ExclamationTriangle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="20"
    fill="red"
    className="bi bi-exclamation-triangle-fill"
    viewBox="0 0 16 16"
  >
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);
