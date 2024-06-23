import React from "react";
import { Alert } from "react-bootstrap";

export const Header = () => {
  return (
    <Alert variant="success">
      <h1 className="text-center fw-bold">NOT TO DO LIST</h1>
      <p className="text-end fst-italic">
        Being busy isnt an excuse; its about managing time effectively.
      </p>
    </Alert>
  );
};
