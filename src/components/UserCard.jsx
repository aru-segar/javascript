import React from 'react';

const UserCard = ({ name, role, email, status }) => {
    const handleClick = () => {
        console.log(`Viewing details for ${name}`);
    };
    
    return (
        <div style={styles.card}>
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.role}><strong>Role:</strong> {role}</p>
            <p style={styles.email}><strong>Email:</strong> {email}</p>
            <p style={styles.status}><strong>Status:</strong> {status}</p>
            <button style={styles.button} onClick={handleClick}>View Details</button>
        </div>
    );
    }

    const styles = {
        card: {
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            width: '250px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            display: 'inline-block',
        },
        name: {
            fontSize: '20px',
            marginBottom: '8px',
        },
        role: {
            fontSize: '16px',
            marginBottom: '8px',
        },
        email: {
            fontSize: '16px',
            marginBottom: '8px',
        },
        status: {
            fontSize: '16px',
            marginBottom: '16px',
        },
        button: {
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 20px',
            cursor: 'pointer',
        }
    };

    export default UserCard;