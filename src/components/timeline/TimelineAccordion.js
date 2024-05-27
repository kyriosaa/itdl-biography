import { Divider } from "@mui/material";
import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function TimelineAccordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="content">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id} className="content">
        <button
          className="button tl"
          style={{ height: "80px", width: "1250px" }}
          onClick={() => handleClick(index)}
        >
          {icon}
          {item.label}
        </button>
        {isExpanded && (
          <div className="content" id="banner">
            {item.content}
            {item.photo}
          </div>
        )}
        <Divider />
      </div>
    );
  });

  return <div className="content">{renderedItems}</div>;
}

export default TimelineAccordion;
