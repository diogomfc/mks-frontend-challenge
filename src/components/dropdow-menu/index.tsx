import React, { useState, useEffect, useRef } from 'react';

import { MenuButton, MenuContainer, MenuItem, MenuList } from './style';

import { useAnimate } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface DropdownMenuItem {
  value: string;
  label: string;
}

interface DropdownMenuProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  menuItems: DropdownMenuItem[];
}

export function DropdownMenu({
  name,
  value,
  onChange,
  menuItems
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      animate(scope.current, {
        opacity: 1,
        height: 'auto',
        transition: { duration: 0.15, ease: 'easeInOut' }
      });
    } else {
      animate(scope.current, {
        opacity: 0,
        height: 0,
        transition: { duration: 0.1, ease: 'easeInOut' }
      });
    }
  }, [isOpen, animate, scope]);

  const handleItemClick = (item: DropdownMenuItem) => {
    setSelectedValue(item.value);
    onChange({
      target: { name, value: item.value }
    } as React.ChangeEvent<HTMLSelectElement>);
    setIsOpen(false);
  };

  const selectedLabel =
    menuItems.find((item) => item.value === selectedValue)?.label || '';

  return (
    <MenuContainer ref={dropdownRef}>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {selectedLabel}
        <ChevronDown
          size={16}
          style={{
            transition: 'transform 0.2s ease-in-out',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </MenuButton>
      <MenuList isOpen={isOpen} ref={scope}>
        {isOpen &&
          menuItems.map((item) => (
            <MenuItem key={item.value} onClick={() => handleItemClick(item)}>
              <span>{item.label}</span>
            </MenuItem>
          ))}
      </MenuList>
    </MenuContainer>
  );
}
