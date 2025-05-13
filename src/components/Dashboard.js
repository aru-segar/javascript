import React from 'react'

const Card = ({ title, content }) => {
  return (
    <div style={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '20px',
        margin: '10px',
        width: '200px'
    }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
    }}>
      <h1>Dashboard</h1>
      <div style={{
          display: 'flex',
          justifyContent: 'center'
      }}>
        <Card title="Card 1" content="This is the first card." />
        <Card title="Card 2" content="This is the second card." />
        <Card title="Card 3" content="This is the third card." />
      </div>
      
    </div>
  )
}

export default Dashboard
