import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
        Puck Page Builder
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        Build pages with drag and drop
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link
          to="/edit"
          style={{
            padding: "0.75rem 2rem",
            backgroundColor: "#3b82f6",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          Open Editor
        </Link>
        <Link
          to="/preview"
          style={{
            padding: "0.75rem 2rem",
            backgroundColor: "white",
            color: "#333",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: 500,
            border: "1px solid #e5e7eb",
          }}
        >
          View Preview
        </Link>
      </div>
    </div>
  );
}
