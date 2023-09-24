import React from "react";
const SentryTest = () => {
  return (
    <div>
      <button onClick={throwError}>Throw error</button>
    </div>
  );
};
const throwError = () => {
  throw new Error("This is an error message");
};

export default SentryTest;
