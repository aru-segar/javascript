import React from "react";

const styles = {
    base: {
        padding: `10px 20px`,
        margin: `10px`,
        borderRadius: `4px`,
        border: `none`,
        cursor: `pointer`,
        fontSize: `16px`,
        transition: `background-color 0.3s ease`,
    },
    primary: {
        backgroundColor: `#007BFF`,
        color: `#fff`,
    },
    secondary: {
        backgroundColor: `#6C757D`,
        color: `#fff`,
    },
    success: {
        backgroundColor: `#28A745`,
        color: `#fff`,
    },
}

const Button = ({ label, variant = `primary`, onClick }) => {
    const combinedStyles = {
        ...styles.base,
        ...(styles[variant] || styles.primary),
    };

    return (
        <button style={combinedStyles} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
