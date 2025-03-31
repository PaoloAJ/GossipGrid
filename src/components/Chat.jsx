import React, { useState, useEffect, useRef } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../configs/firebase";

function Chat({ room, setRoom }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "messages");
  const messagesEndRef = useRef(null);

  const deleteAllDocuments = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const deletePromises = querySnapshot.docs.map((docItem) =>
        deleteDoc(doc(db, collectionName, docItem.id))
      );

      await Promise.all(deletePromises);
      console.log(`All documents in "${collectionName}" deleted successfully!`);
    } catch (error) {
      console.error("Error deleting documents: ", error);
    }
  };

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [room]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    try {
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: auth.currentUser?.displayName || "Anonymous",
        room,
      });

      setNewMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-full p-4 border-2 border-gray-400 rounded-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b-2 border-gray-400 mb-2 p-2">
        <button
          onClick={() => setRoom(false)}
          className="bg-gray-300 font-bold p-2 rounded hover:bg-gray-400 transition-all duration-150"
        >
          Back
        </button>

        <button
          onClick={() => deleteAllDocuments("messages")}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 hover:scale-105 transition-all duration-500 delay-75"
        >
          Clear Chat
        </button>
        <div className="text-center font-bold text-lg">{room}</div>
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto space-y-2 p-2">
        {messages.map((message) => {
          const isCurrentUser = message.user === auth.currentUser?.displayName;
          return (
            <div
              key={message.id}
              className={`flex ${
                isCurrentUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg shadow max-w-full break-words ${
                  isCurrentUser
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <h2 className="font-bold mb-1">{message.user}</h2>
                <p>{message.text}</p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Section */}
      <form onSubmit={handleSubmit} className="flex mt-4 space-x-2">
        <input
          placeholder="Message"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
          className="flex-1 border p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
