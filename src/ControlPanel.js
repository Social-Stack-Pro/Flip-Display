import React, { useState } from 'react';

const ControlPanel = () => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('splitFlapMessage', inputText.toUpperCase());
    // Trigger storage event manually for same-page updates
    window.dispatchEvent(new Event('storage'));
    setInputText('');
  };

  return (
    <div className="control-panel">
      <h2>Control Panel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter new message"
          maxLength={20}
        />
        <button type="submit">Update Display</button>
      </form>
    </div>
  );
};

export default ControlPanel;