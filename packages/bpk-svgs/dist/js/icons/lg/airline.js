import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M3.208 19.382A1.003 1.003 0 0 0 3.966 21h11.55a1.941 1.941 0 0 0 1.873-1.526l3.583-15.237A.992.992 0 0 0 20.035 3H18.32a5.522 5.522 0 0 0-4.394 2.236z" /></svg>);