import * as React from "react";

export const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h2>Name: {name}</h2>
    <h2>Email: {email}</h2>
    <h3>Message: {message}</h3>
  </div>
);
