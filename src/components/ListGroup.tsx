import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //event handler

  return (
    <>
      {" "}
      {/* important way to fragment when having 2 or more html elements */}
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}{" "}
      {/* more common way instead of
      writing ': null' */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
