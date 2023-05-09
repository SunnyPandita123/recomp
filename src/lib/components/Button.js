import React from 'react';

function Button(props) {
    const { message, onClick, isPrimary } = {...props};
    return (
        <button style={{
            padding: "10px 30px",
            backgroundColor: `${isPrimary} ? "yellow" : "grey"`,
            border: "none",
            boxShadow: '1px 2px 9px rgb(50 47 48 / 23%)',
          }}
          onClick={onClick}
        >{message}</button>
    );
}

export default Button;
