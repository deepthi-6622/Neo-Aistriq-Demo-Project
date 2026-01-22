import bg1 from "../assets/bg1.avif";//Importing the login background image

const BACKEND_URL = "http://localhost:5000/auth/discord";//Backend URL that handles Discord OAuth login

export default function Login() {
    //redirects the user to backend OAuth login
    const handleLogin = () => {
        window.location.href = BACKEND_URL;
    };

    return (
        <div
            style={{
                // Making the container full screen
                height: "100vh",
                width: "100%",
                // Applying the neon background image
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Uni Sans', sans-serif",
            }}
        >
            {/*animations*/}
            <style>
                {`
          @keyframes popCard {
            0% { opacity: 0; transform: translate(-50%, -60%) scale(0.85); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          }

          @keyframes fadeInText {
            0% { opacity: 0; letter-spacing: 2px; }
            100% { opacity: 1; letter-spacing: 0px; }
          }

          @keyframes glowPulse {
            0% { text-shadow: 0 0 15px rgba(255,255,255,0.9); }
            100% { text-shadow: 0 0 25px rgba(255,255,255,1); }
          }
        `}
            </style>

            {/* CARD */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",

                    width: "430px",
                    padding: "40px 32px",

                    background: "#110a1900",
                    borderRadius: "16px",
                    border: "0.5px solid rgba(200,150,255,0.25)",
                    boxShadow: "0 0 10px rgba(150,100,255,0.20)",
                    backdropFilter: "blur(5px)",

                    animation: "popCard 0.55s ease-out",

                    textAlign: "center",
                    transition: "0.25s ease",
                }}

                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.03)";
                    e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(180,120,255,0.55)";
                }}

                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
                    e.currentTarget.style.boxShadow =
                        "0 0 10px rgba(150,100,255,0.20)";
                }}
            >

                {/* TITLE */}
                <h1
                    style={{
                        fontSize: "36px",
                        fontWeight: "900",
                        marginBottom: "18px",
                        color: "#ffffff",
                        animation: "fadeInText 0.8s ease forwards, glowPulse 2s infinite alternate",
                    }}
                >
                    Log in to GGLife
                </h1>

                {/* DISCORD BUTTON */}
                <button
                    onClick={handleLogin}
                    style={{
                        width: "100%",
                        padding: "15px 22px",
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "white",

                        background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                        borderRadius: "12px",
                        border: "none",
                        cursor: "pointer",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "18px",

                        boxShadow: "0 8px 20px rgba(124,58,237,0.6)",
                        transition: "0.25s ease",
                    }}
                    // Hover lift animation
                    onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-3px)";
                        e.target.style.boxShadow =
                            "0 15px 40px rgba(140, 82, 255, 0.9), 0 0 25px rgba(0,200,255,0.6)";
                    }}
                    // Restore on mouse leave
                    onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow =
                            "0 8px 20px rgba(124,58,237,0.6)";
                    }}
                >
                    <img
                        src="https://images.icon-icons.com/4040/PNG/512/discord_logo_icon_256797.png"
                        style={{
                            width: "34px",
                            height: "34px",
                            filter: "brightness(0) invert(1)", // Ensures pure white icon
                            dropShadow: "0 0 12px white",
                        }}
                    />
                    Sign in with Discord
                </button>
            </div>
        </div >
    );
}
