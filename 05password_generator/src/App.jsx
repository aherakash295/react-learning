import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let newPass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) str += "!@#$%^&*()_+=[]{}~";

    if (numberAllowed) str += "0123456789";

    for (let i = 0; i < length; i++) {
      let char = str[Math.floor(Math.random() * str.length)];
      newPass += char;
    }

    setPassword(newPass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full my-8 p-8 max-w-lg mx-auto shadow-md rounded-lg  bg-gray-800">
        <h1 className="text-center text-white mb-4">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 text-tomato">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 bg-white text-black"
            value={password}
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />

          <button
            className="bg-blue-700 text-white px-3 py-0.5 shrink-0 copyBtn"
            onClick={copyPasswordToClipBoard}
            title="Copy the password"
          >
            copy
          </button>
        </div>

        <div className="flex justify-between text-orange-600 font-semibold">
          <div className="flex text-sm gap-x-2">
            <input
              type="range"
              className="cursor-pointer"
              value={length}
              min={8}
              max={50}
              onChange={(e) => setLength(e.target.value)}
              title="Set password length"
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label title="Add Numbers">Numbers</label>
          </div>

          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setcharAllowed((prev) => !prev)}
            />
            <label title="Add characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
