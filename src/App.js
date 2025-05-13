import React from 'react';
import UserCard from './components/UserCard';

function App() {
  return (
    <div>
      <h1>User List</h1>
      <UserCard
        name="John Doe"
        role="Software Engineer"
        email="johndoe@email.com"
        status="Active"
      />
      <UserCard
        name="Jane Smith"
        role="Project Manager"
        email="jane@example.com"
        status="Inactive"
      />
      <UserCard
        name="Alice Johnson"
        role="UX Designer"
        email="alice@example.com"
        status="Active"
      />

    </div>
  )
}

export default App;
