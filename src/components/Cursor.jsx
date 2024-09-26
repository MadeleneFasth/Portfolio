import "../style/Cursor.css";
import { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef(null); // Create a ref to store the cursor div

  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.classList.contains("hoverable")) {
        e.target.classList.add("hovered"); // Lägg till hover-klassen
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.classList.contains("hoverable")) {
        e.target.classList.remove("hovered"); // Ta bort hover-klassen
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <div ref={cursorRef} className="cursor">
      +
    </div>
  ); // Attach ref to the div
}

export default Cursor;
