import React from 'react'

const Sidebar = () => {
  return (
    <div style={{
        width: '200px',
        backgroundColor: '#282c34',
        color: '#fff',
        padding: '20px',
        display: 'flex',
    }}>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
        </ul>
    </div>
  )
}

export default Sidebar
