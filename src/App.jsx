// src/App.jsx
import React from 'react';
import ColorfulText from './components/ColorfulText';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 gap-4">
      <ColorfulText text="Hello in Red!" color="text-red-500" />
      <ColorfulText text="Hello in Green!" color="text-green-600" />
      <ColorfulText text="Hello in Blue!" color="text-blue-700" />
    </div>
  );
}

export default App;
