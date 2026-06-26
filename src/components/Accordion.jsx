import React, { useId, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Accordion({
  items,
  className = '',
  itemClassName = '',
  buttonClassName = '',
  panelClassName = '',
  iconClassName = '',
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const baseId = useId();

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const itemId = `${baseId}-${index}`;

        return (
          <div key={item.title ?? index} className={itemClassName}>
            <button
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`${itemId}-panel`}
              id={`${itemId}-trigger`}
              className={buttonClassName}
            >
              <span>{item.title}</span>
              {isOpen ? (
                <FaChevronUp className={iconClassName} />
              ) : (
                <FaChevronDown className={iconClassName} />
              )}
            </button>
            <div
              id={`${itemId}-panel`}
              role="region"
              aria-labelledby={`${itemId}-trigger`}
              hidden={!isOpen}
              className={panelClassName}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}