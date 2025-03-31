import React, { useState, useEffect, useRef } from "react";
import { Auth } from "./components/Auth";
import Navbar from "./components/Navbar";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./configs/firebase";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const roomInputRef = useRef(null);

  // Retrieve room from sessionStorage on component mount
  useEffect(() => {
    const storedRoom = sessionStorage.getItem("room");
    if (storedRoom) {
      setRoom(storedRoom);
    }
  }, []);

  const handleSetRoom = (roomName) => {
    if (roomName) {
      setRoom(roomName);
      sessionStorage.setItem("room", roomName); // Store room in sessionStorage
    }
  };

  const handleBack = () => {
    setRoom(null);
    sessionStorage.removeItem("room"); // Clear room from sessionStorage
  };

  const logout = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    sessionStorage.removeItem("room"); // Clear room on logout
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <Auth setIsAuth={setIsAuth} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-500 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <div className="p-4 font-bold text-lg border-b border-blue-400">
          GossipGrid
        </div>
        <nav className="p-4 space-y-2">
          <button
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex flex-1 items-center justify-center p-4">
          {room ? (
            <div className="w-full max-w-lg h-full border-2 border-gray-400 rounded-lg">
              <Chat room={room} setRoom={handleBack} />
            </div>
          ) : (
            <div className="flex flex-col items-center w-full max-w-md space-y-4">
              <label className="text-2xl font-bold text-center">
                Room Name
              </label>
              <input
                ref={roomInputRef}
                className="w-full border-2 border-blue-400 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={() => handleSetRoom(roomInputRef.current.value)}
                className="w-full p-2 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Enter
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Toggle Button (Mobile View) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full lg:hidden"
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>
    </div>
  );
}

export default App;
