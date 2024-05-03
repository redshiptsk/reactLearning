import React from "react";
import styles from './genericlist.css';

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As: "a" | "li" | "button" | "div";
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
  style: string;
}

const noop = () => {};

export function GenericList({list, style}: IGenericListProps) {
  return(
    <ul className={style}>
      {list.map(({As = "div", text, id, onClick = noop, className, href}) => (
        <As className={className}        
        onClick={() => onClick(id)}
        key={id}
        href={href}
        >
          {text}
        </As>
      ))}
    </ul>
  )
}