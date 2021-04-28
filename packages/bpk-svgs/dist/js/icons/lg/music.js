import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M2 12a10 10 0 0 1 20 0v7a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3v-2a8 8 0 0 0-16 0v2h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3z" /></svg>);