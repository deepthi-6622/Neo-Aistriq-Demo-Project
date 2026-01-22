import bg2 from "../assets/bg2.jpg";
import { useState, useEffect } from "react";

export default function Dashboard() {
  // Username + avatar fetched from localStorage
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    // Retrieving user details after OAuth login
    const storedName = localStorage.getItem("discordUsername");
    const storedAvatar = localStorage.getItem("discordAvatar");
    // Setting state (to display on UI)
    if (storedName) setUsername(storedName);
    if (storedAvatar) setAvatar(storedAvatar);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Uni Sans', sans-serif",
      }}
    >
      {/* Animations */}
      <style>
        {`
          @keyframes popCard {
            0% { opacity: 0; transform: translate(-50%, -55%) scale(0.88); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          }

          @keyframes fadeInText {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes avatarGlow {
            0% { box-shadow: 0 0 10px rgba(114,137,218,0.5); }
            100% { box-shadow: 0 0 20px rgba(114,137,218,1); }
          }
        `}
      </style>

      
      <div
        style={{
          position: "absolute",
          top: "45%",                 
          left: "50%",                
          transform: "translate(-50%, -50%)",  

          width: "420px",
          padding: "35px 30px",
          borderRadius: "12px",
          border: "none",

          

          animation: "popCard 0.55s ease-out",
          textAlign: "center",
        }}
      >
        {/* AVATAR */}
        <div
          style={{
            width: "110px",
            height: "110px",
            margin: "0 auto 20px auto",
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid rgba(255,255,255,0.4)",
            boxShadow: "0 0 20px rgba(114,137,218,0.8)",
            animation: "avatarGlow 1.4s ease-in-out infinite alternate",
          }}
        >
          <img
            src={
              avatar ||
              "https://images.icon-icons.com/3882/PNG/256/discord_icon_245605.png"
            }
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* TITLE */}
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "900",
            marginBottom: "18px",
            color: "#ffffff",
            textShadow: "0 0 15px rgba(255,255,255,0.9)",
            animation: "fadeInText 0.7s ease-out",
          }}
        >
          Welcome <strong style={{ color: "#fff" }}>{username || ""}</strong>!
        </h1>
      </div>
    </div>
  );
}
