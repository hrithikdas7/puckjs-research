import { Render } from "@measured/puck";
import type { Data } from "@measured/puck";
import { config } from "../puck.config";
import { Link } from "react-router-dom";

const STORAGE_KEY = "puck-page-data";

export function Preview() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const data: Data = saved ? JSON.parse(saved) : { content: [], root: {} };

  const hasContent = data.content && data.content.length > 0;

  return (
    <div>
      {/* Navigation bar */}
      <nav
        style={{
          padding: "1rem",
          backgroundColor: "#f3f4f6",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Page Preview</span>
        <Link
          to="/edit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#3b82f6",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          Back to Editor
        </Link>
      </nav>

      {/* Page content */}
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        {hasContent ? (
          <Render config={config} data={data} />
        ) : (
          <div style={{ textAlign: "center", padding: "4rem", color: "#6b7280" }}>
            <p>No content yet. Go to the editor to create your page.</p>
            <Link
              to="/edit"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#3b82f6",
                color: "white",
                textDecoration: "none",
                borderRadius: "6px",
              }}
            >
              Open Editor
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
