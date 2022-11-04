import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineTag, AiOutlineMenuFold } from "react-icons/ai";
import Parser from "html-react-parser";
export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span className="Titlespan">
            {item.icon && (
              <i className={item.icon}>
                <AiOutlineMenuFold style={{ marginRight: 5 }} />
              </i>
            )}
            {item.title}
          </span>
          <i className="bi-chevron-down toggle-btn">
            <BsChevronRight />
          </i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon && (
          <AiOutlineTag id="IconMneus" />
          //   <>{Parser(item.icon)}</>
        )}
        {item.title}
      </a>
    );
  }
}
