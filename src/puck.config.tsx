import type { Config } from "@measured/puck";

// Define the props for each component
type Props = {
  Heading: { title: string; level: "h1" | "h2" | "h3" };
  Text: { content: string; align: "left" | "center" | "right" };
  Button: { label: string; variant: "primary" | "secondary" };
  Image: { src: string; alt: string };
  Card: { title: string; description: string };
  Spacer: { height: number };
};

// Puck configuration with basic components
export const config: Config<Props> = {
  components: {
    Heading: {
      fields: {
        title: { type: "text" },
        level: {
          type: "select",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
          ],
        },
      },
      defaultProps: {
        title: "Heading",
        level: "h1",
      },
      render: ({ title, level }) => {
        const Tag = level;
        const sizes = { h1: "2.5rem", h2: "2rem", h3: "1.5rem" };
        return (
          <Tag style={{ fontSize: sizes[level], margin: "0.5rem 0" }}>
            {title}
          </Tag>
        );
      },
    },

    Text: {
      fields: {
        content: { type: "textarea" },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        content: "Enter your text here...",
        align: "left",
      },
      render: ({ content, align }) => (
        <p style={{ textAlign: align, lineHeight: 1.6, margin: "0.5rem 0" }}>
          {content}
        </p>
      ),
    },

    Button: {
      fields: {
        label: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
      },
      defaultProps: {
        label: "Click me",
        variant: "primary",
      },
      render: ({ label, variant }) => (
        <button
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            border: variant === "secondary" ? "2px solid #333" : "none",
            borderRadius: "6px",
            backgroundColor: variant === "primary" ? "#3b82f6" : "transparent",
            color: variant === "primary" ? "white" : "#333",
            cursor: "pointer",
          }}
        >
          {label}
        </button>
      ),
    },

    Image: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
      },
      defaultProps: {
        src: "https://via.placeholder.com/400x200",
        alt: "Placeholder image",
      },
      render: ({ src, alt }) => (
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      ),
    },

    Card: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
      },
      defaultProps: {
        title: "Card Title",
        description: "Card description goes here...",
      },
      render: ({ title, description }) => (
        <div
          style={{
            padding: "1.5rem",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>
            {title}
          </h3>
          <p style={{ margin: 0, color: "#6b7280", lineHeight: 1.5 }}>
            {description}
          </p>
        </div>
      ),
    },

    Spacer: {
      fields: {
        height: {
          type: "number",
          min: 8,
          max: 200,
        },
      },
      defaultProps: {
        height: 24,
      },
      render: ({ height }) => <div style={{ height: `${height}px` }} />,
    },
  },
};
