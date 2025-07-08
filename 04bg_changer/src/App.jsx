import { useState } from "react";

function App() {
  const [color, setColor] = useState('black');
  return (
    <div className="w-full h-screen duration-700" style={{ backgroundColor: color }}>
      <div className="fixed top-10 inset-x-0 px-4 flex flex-wrap justify-center">
        <div className="bg-white rounded-2xl flex flex-wrap gap-3 px-5 py-3 justify-center">
          <button className="bg-red-500 px-5 py-2 rounded-full" onClick={() => setColor('red')}>Red </button>
          <button className="bg-green-500 px-5 py-2 rounded-full" onClick={() => setColor('green')}>Green </button>
          <button className="bg-blue-500 px-5 py-2 rounded-full" onClick={() => setColor('blue')}>Blue </button>
          <button className="bg-yellow-500 px-5 py-2 rounded-full" onClick={() => setColor('yellow')}>Yellow </button>
          <button className="bg-purple-500 px-5 py-2 rounded-full" onClick={() => setColor('purple')}>Purple </button>
          <button className="bg-black px-5 py-2 rounded-full" onClick={() => setColor('black')}>Black </button>
        </div>

      </div>

    </div>
  );
}

export default App;