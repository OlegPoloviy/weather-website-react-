import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';

export function BurgerMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-controls="burger-menu"
                aria-haspopup="true"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="burger-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
            </Menu>
        </div>
    );
}

