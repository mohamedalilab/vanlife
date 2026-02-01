import type React from "react";

function Footer(): React.JSX.Element {
  console.log("Footer rendered");
  const currentYear: number = new Date().getFullYear();
  return (
    <footer>
      <span>&#169;</span> {`${currentYear} #VANLIFE`}
    </footer>
  );
}

export default Footer;
