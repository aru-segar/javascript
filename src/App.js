import React from 'react';
import Button from './components/Button';


function App() {
  const handleClick = (label) => {
    console.log(`${label} button clicked!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Custom Button Variants</h2>
      <Button label="Primary Button" variant="primary" onClick={() => handleClick("Primary")} />
      <Button label="Secondary Button" variant="secondary" onClick={() => handleClick("Secondary")} />
      <Button label="Danger Button" variant="danger" onClick={() => handleClick("Danger")} />
</div>
  )
}

export default App;
