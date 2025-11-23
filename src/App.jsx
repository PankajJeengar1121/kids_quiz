import { useState } from "react";
import { subjects, quizzes } from "./data";

export default function App() {
  const [page, setPage] = useState("home");
  const [subject, setSubject] = useState(null);
  const [score, setScore] = useState(null);

  const containerStyle = {
    padding: 20,
    textAlign: "center",
    animation: "fadeIn 0.6s",
  };

  const buttonStyle = {
    display: "block",
    margin: "12px auto",
    padding: "12px 20px",
    width: "250px",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "16px",
    border: "none",
    cursor: "pointer",
    background: "#ffafcc",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "0.3s",
  };

  const optionStyle = {
    ...buttonStyle,
    background: "#bde0fe",
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      button:hover {
        transform: scale(1.07);
      }
    `}
      </style>

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <h1 style={{ fontSize: "40px", color: "#ff006e" }}>
            🎉 Kids Quiz App 🎉
          </h1>

          {subjects.map((sub) => (
            <button
              key={sub}
              style={buttonStyle}
              onClick={() => {
                setSubject(sub);
                setPage("quiz");
              }}
            >
              📚 {sub}
            </button>
          ))}
        </>
      )}

      {/* QUIZ PAGE */}
      {page === "quiz" && (
        <>
          <button
            onClick={() => setPage("home")}
            style={{ ...buttonStyle, width: "150px", background: "#ffc8dd" }}
          >
            ⬅ Back
          </button>

          <h2 style={{ fontSize: "30px", color: "#8338ec" }}>
            {subject} Quiz
          </h2>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ fontSize: "24px" }}>
              {quizzes[subject][0].question}
            </h3>
          </div>

          {quizzes[subject][0].options.map((opt) => (
            <button
              key={opt}
              style={optionStyle}
              onClick={() => {
                setScore(
                  opt === quizzes[subject][0].answer ? "🎉 Correct!" : "❌ Wrong!"
                );
                setPage("result");
              }}
            >
              {opt}
            </button>
          ))}
        </>
      )}

      {/* RESULT PAGE */}
      {page === "result" && (
        <>
          <h1
            style={{
              fontSize: "40px",
              color: score.includes("Correct") ? "#2ecc71" : "#e63946",
            }}
          >
            {score}
          </h1>

          <button
            style={{ ...buttonStyle, width: "200px", background: "#a2d2ff" }}
            onClick={() => setPage("home")}
          >
            🔙 Back to Subjects
          </button>
        </>
      )}
    </div>
  );
}
