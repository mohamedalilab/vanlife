import type { JSX } from "react";

interface ErrorMsgProps {
  error: string;
}

export default function ErrorMsg({
  error = "Error has occured!",
}: ErrorMsgProps): JSX.Element {
  return (
    <div className="error-msg">
      <h3>error: {error}</h3>
    </div>
  );
}
