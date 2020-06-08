import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M7.003 12.166a1.25 1.25 0 0 1 .393-.997l7.302-6.832a1.25 1.25 0 0 1 1.708 1.826L9.99 12.166l6.416 6.003a1.25 1.25 0 1 1-1.708 1.826l-7.302-6.832a1.248 1.248 0 0 1-.393-.997z" /></svg>);