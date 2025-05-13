import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [showAddress, setShowAddress] = useState({});

  // Fetch user data
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Get unique company names for dropdown
  const companies = [...new Set(users.map(user => user.company.name))];

  // Handle filters
  const filteredUsers = users.filter(user => {
    const matchesName = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCompany = selectedCompany ? user.company.name === selectedCompany : true;
    return matchesName && matchesCompany;
  });

  const toggleAddress = (id) => {
    setShowAddress(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List (with Search & Filter)</h2>

      {/* Search and Filter Controls */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        >
          <option value="">All Companies</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>{company}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => {
            const address = user.address;
            return (
              <React.Fragment key={user.id}>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                  <td>
                    <button onClick={() => toggleAddress(user.id)}>
                      {showAddress[user.id] ? 'Hide Address' : 'Show Address'}
                    </button>
                  </td>
                </tr>
                {showAddress[user.id] && (
                  <tr>
                    <td colSpan="4" style={{ backgroundColor: '#f9f9f9', paddingLeft: '20px' }}>
                      📍 <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
