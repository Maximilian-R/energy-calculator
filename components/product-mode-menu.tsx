import { useState, MouseEvent } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { EffectMode, Product } from "../data/product";
import styled from "@emotion/styled";

export interface ProductModeMenuProps {
  product: Product;
  selectedMode: EffectMode;
  onChange: (selected: EffectMode) => void;
}

export default function ProductModeMenu({
  product,
  selectedMode,
  onChange,
}: ProductModeMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const selectedIndex = product.effects.indexOf(selectedMode);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    onChange(product.effects[index]);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonID = `${product.name}-mode-button`;
  const menuID = `${product.name}-mode-menu`;

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<ElectricBoltIcon />}
        size="small"
        id={buttonID}
        aria-controls={open ? menuID : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disabled={product.effects.length < 2}
        onClick={handleClick}
      >
        {selectedMode.value}W
      </Button>
      <Menu
        id={menuID}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": buttonID,
          role: "listbox",
        }}
      >
        {product.effects.map((effect, index) => (
          <MenuItem
            key={index}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <MenuItemDiv>
              {effect.name && <span className="name">{effect.name}</span>}
              <span className="watt">{effect.value}W</span>
            </MenuItemDiv>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const MenuItemDiv = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  .name {
    margin-right: 1rem;
  }

  .watt {
    color: #66d4fa;
    font-size: 0.8rem;
  }
`;
