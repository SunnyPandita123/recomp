import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectMenuRe(props) {
    const {menuLabel, menuValue, onAgeChange, selectMenuList } = {...props};

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">{menuLabel}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={menuValue}
                label={menuLabel}
                onChange={onAgeChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    selectMenuList.map((menu, index) => <MenuItem key={index} value={menu.value}>{menu.label}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
}

export default SelectMenuRe;
