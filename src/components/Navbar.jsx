import React from "react";

function Navbar({ isAuth, logout, auth }) {
  return (
    <div className="relative flex items-center border-b-2 border-black bg-blue-400 h-16">
      {/* Title (Centered) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-5xl text-white">
        GossipGrid
      </div>

      {isAuth && (
        <div className="ml-auto flex items-center space-x-4 mr-4">
          {/* User's Name */}
          <div className="text-white text-lg font-medium">
            {auth.currentUser?.displayName}
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
