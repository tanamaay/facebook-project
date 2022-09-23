import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F101267379127970%2Fvideos%2F742621630402385%2F&show_text=true&width=560&t=0"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allow=" encrypted-media"
        ></iframe>
    </div>
  );
}

export default Widgets;
