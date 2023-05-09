import React from 'react';

function Chip(props) {
    const { message } = props;
    return (
        <span style={{
            padding: "5px 20px",
            backgroundColor: `#61dafb`,
            borderRadius: "20px",
            border: "none",
            boxShadow: '1px 2px 9px rgb(50 47 48 / 23%)',
            fontSize: "12px"
          }}
        >{message}</span>
    );
}

export default Chip;
