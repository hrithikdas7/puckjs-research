import type { Config } from "@measured/puck";

// Define the props for each component
type Props = {
  Hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundStyle: "gradient" | "solid" | "image";
  };
  Heading: {
    title: string;
    level: "h1" | "h2" | "h3";
    align: "left" | "center" | "right";
  };
  Text: {
    content: string;
    align: "left" | "center" | "right";
    size: "sm" | "base" | "lg";
  };
  Button: {
    label: string;
    variant: "primary" | "secondary" | "outline";
    size: "sm" | "md" | "lg";
    fullWidth: boolean;
  };
  Image: {
    src: string;
    alt: string;
    rounded: "none" | "md" | "lg" | "full";
    shadow: boolean;
  };
  Card: {
    title: string;
    description: string;
    variant: "default" | "bordered" | "elevated";
  };
  Features: {
    heading: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  Columns: {
    columns: "2" | "3" | "4";
    gap: "sm" | "md" | "lg";
  };
  Spacer: {
    height: "sm" | "md" | "lg" | "xl";
  };
  Divider: {
    style: "solid" | "dashed" | "dotted";
  };
  Testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  CTA: {
    heading: string;
    description: string;
    buttonText: string;
    variant: "primary" | "dark";
  };
};

// Puck configuration with Tailwind-styled components
export const config: Config<Props> = {
  categories: {
    layout: {
      components: ["Columns", "Spacer", "Divider"],
    },
    typography: {
      components: ["Heading", "Text"],
    },
    media: {
      components: ["Image"],
    },
    interactive: {
      components: ["Button"],
    },
    sections: {
      components: ["Hero", "Card", "Features", "Testimonial", "CTA"],
    },
  },
  components: {
    Hero: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        buttonText: { type: "text" },
        backgroundStyle: {
          type: "radio",
          options: [
            { label: "Gradient", value: "gradient" },
            { label: "Solid", value: "solid" },
            { label: "Image", value: "image" },
          ],
        },
      },
      defaultProps: {
        title: "Build Something Amazing",
        subtitle: "Create beautiful, responsive pages with our drag-and-drop builder. No coding required.",
        buttonText: "Get Started",
        backgroundStyle: "gradient",
      },
      render: ({ title, subtitle, buttonText, backgroundStyle }) => {
        const bgClasses = {
          gradient: "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700",
          solid: "bg-slate-900",
          image: "bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1600')]",
        };
        return (
          <section className={`${bgClasses[backgroundStyle]} text-white py-16 px-4 sm:py-24 md:py-32`}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
              <button className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {buttonText}
              </button>
            </div>
          </section>
        );
      },
    },

    Heading: {
      fields: {
        title: { type: "text" },
        level: {
          type: "select",
          options: [
            { label: "H1 - Main Title", value: "h1" },
            { label: "H2 - Section Title", value: "h2" },
            { label: "H3 - Subsection", value: "h3" },
          ],
        },
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
        title: "Section Heading",
        level: "h2",
        align: "left",
      },
      render: ({ title, level, align }) => {
        const sizeClasses = {
          h1: "text-3xl sm:text-4xl md:text-5xl font-bold",
          h2: "text-2xl sm:text-3xl md:text-4xl font-bold",
          h3: "text-xl sm:text-2xl md:text-3xl font-semibold",
        };
        const alignClasses = {
          left: "text-left",
          center: "text-center",
          right: "text-right",
        };
        const Tag = level;
        return (
          <Tag className={`${sizeClasses[level]} ${alignClasses[align]} text-slate-900 py-2`}>
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
        size: {
          type: "radio",
          options: [
            { label: "Small", value: "sm" },
            { label: "Normal", value: "base" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      defaultProps: {
        content: "Add your content here. This text block supports multiple lines and will wrap naturally based on the container width.",
        align: "left",
        size: "base",
      },
      render: ({ content, align, size }) => {
        const sizeClasses = {
          sm: "text-sm sm:text-base",
          base: "text-base sm:text-lg",
          lg: "text-lg sm:text-xl",
        };
        const alignClasses = {
          left: "text-left",
          center: "text-center",
          right: "text-right",
        };
        return (
          <p className={`${sizeClasses[size]} ${alignClasses[align]} text-slate-600 leading-relaxed py-2`}>
            {content}
          </p>
        );
      },
    },

    Button: {
      fields: {
        label: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Outline", value: "outline" },
          ],
        },
        size: {
          type: "radio",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        fullWidth: { type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
      },
      defaultProps: {
        label: "Click me",
        variant: "primary",
        size: "md",
        fullWidth: false,
      },
      render: ({ label, variant, size, fullWidth }) => {
        const variantClasses = {
          primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
          secondary: "bg-slate-800 text-white hover:bg-slate-900 shadow-md hover:shadow-lg",
          outline: "bg-transparent text-slate-800 border-2 border-slate-800 hover:bg-slate-800 hover:text-white",
        };
        const sizeClasses = {
          sm: "px-4 py-2 text-sm",
          md: "px-6 py-3 text-base",
          lg: "px-8 py-4 text-lg",
        };
        return (
          <button
            className={`${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5`}
          >
            {label}
          </button>
        );
      },
    },

    Image: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
        rounded: {
          type: "radio",
          options: [
            { label: "None", value: "none" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Full", value: "full" },
          ],
        },
        shadow: { type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
      },
      defaultProps: {
        src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop",
        alt: "Placeholder image",
        rounded: "lg",
        shadow: true,
      },
      render: ({ src, alt, rounded, shadow }) => {
        const roundedClasses = {
          none: "rounded-none",
          md: "rounded-md",
          lg: "rounded-xl",
          full: "rounded-full",
        };
        return (
          <img
            src={src}
            alt={alt}
            className={`w-full h-auto ${roundedClasses[rounded]} ${shadow ? "shadow-xl" : ""} object-cover`}
          />
        );
      },
    },

    Card: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        variant: {
          type: "radio",
          options: [
            { label: "Default", value: "default" },
            { label: "Bordered", value: "bordered" },
            { label: "Elevated", value: "elevated" },
          ],
        },
      },
      defaultProps: {
        title: "Card Title",
        description: "This is a card component with customizable styling. Use it to highlight important content or features.",
        variant: "elevated",
      },
      render: ({ title, description, variant }) => {
        const variantClasses = {
          default: "bg-white border border-slate-200",
          bordered: "bg-white border-2 border-slate-300",
          elevated: "bg-white shadow-xl border border-slate-100",
        };
        return (
          <div className={`${variantClasses[variant]} rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-2xl`}>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              {title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>
        );
      },
    },

    Features: {
      fields: {
        heading: { type: "text" },
        feature1Title: { type: "text" },
        feature1Desc: { type: "textarea" },
        feature2Title: { type: "text" },
        feature2Desc: { type: "textarea" },
        feature3Title: { type: "text" },
        feature3Desc: { type: "textarea" },
      },
      defaultProps: {
        heading: "Why Choose Us",
        feature1Title: "Lightning Fast",
        feature1Desc: "Optimized performance ensures your pages load instantly.",
        feature2Title: "Fully Responsive",
        feature2Desc: "Looks great on every device, from mobile to desktop.",
        feature3Title: "Easy to Use",
        feature3Desc: "Intuitive drag-and-drop interface for everyone.",
      },
      render: ({ heading, feature1Title, feature1Desc, feature2Title, feature2Desc, feature3Title, feature3Desc }) => (
        <section className="py-12 sm:py-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 sm:mb-12">
            {heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { title: feature1Title, desc: feature1Desc, icon: "⚡" },
              { title: feature2Title, desc: feature2Desc, icon: "📱" },
              { title: feature3Title, desc: feature3Desc, icon: "✨" },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ),
    },

    Columns: {
      fields: {
        columns: {
          type: "radio",
          options: [
            { label: "2 Columns", value: "2" },
            { label: "3 Columns", value: "3" },
            { label: "4 Columns", value: "4" },
          ],
        },
        gap: {
          type: "radio",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      defaultProps: {
        columns: "3",
        gap: "md",
      },
      render: ({ columns, gap }) => {
        const colClasses = {
          "2": "grid-cols-1 sm:grid-cols-2",
          "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        };
        const gapClasses = {
          sm: "gap-4",
          md: "gap-6",
          lg: "gap-8",
        };
        return (
          <div className={`grid ${colClasses[columns]} ${gapClasses[gap]} py-4`}>
            {Array.from({ length: parseInt(columns) }).map((_, i) => (
              <div key={i} className="bg-slate-100 rounded-xl p-6 min-h-[120px] flex items-center justify-center text-slate-500 border-2 border-dashed border-slate-300">
                Column {i + 1}
              </div>
            ))}
          </div>
        );
      },
    },

    Spacer: {
      fields: {
        height: {
          type: "radio",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Extra Large", value: "xl" },
          ],
        },
      },
      defaultProps: {
        height: "md",
      },
      render: ({ height }) => {
        const heightClasses = {
          sm: "h-4 sm:h-6",
          md: "h-8 sm:h-12",
          lg: "h-12 sm:h-16",
          xl: "h-16 sm:h-24",
        };
        return <div className={heightClasses[height]} />;
      },
    },

    Divider: {
      fields: {
        style: {
          type: "radio",
          options: [
            { label: "Solid", value: "solid" },
            { label: "Dashed", value: "dashed" },
            { label: "Dotted", value: "dotted" },
          ],
        },
      },
      defaultProps: {
        style: "solid",
      },
      render: ({ style }) => {
        const styleClasses = {
          solid: "border-solid",
          dashed: "border-dashed",
          dotted: "border-dotted",
        };
        return <hr className={`${styleClasses[style]} border-t-2 border-slate-200 my-6`} />;
      },
    },

    Testimonial: {
      fields: {
        quote: { type: "textarea" },
        author: { type: "text" },
        role: { type: "text" },
      },
      defaultProps: {
        quote: "This page builder is amazing! It's so easy to use and the results look professional. Highly recommended!",
        author: "John Doe",
        role: "CEO, Example Company",
      },
      render: ({ quote, author, role }) => (
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 sm:p-10 text-center max-w-3xl mx-auto">
          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-4 sm:mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-lg sm:text-xl text-slate-700 italic mb-6 leading-relaxed">
            "{quote}"
          </p>
          <div>
            <p className="font-bold text-slate-900">{author}</p>
            <p className="text-slate-500 text-sm">{role}</p>
          </div>
        </div>
      ),
    },

    CTA: {
      fields: {
        heading: { type: "text" },
        description: { type: "textarea" },
        buttonText: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { label: "Primary Blue", value: "primary" },
            { label: "Dark", value: "dark" },
          ],
        },
      },
      defaultProps: {
        heading: "Ready to Get Started?",
        description: "Join thousands of users who are already building amazing pages.",
        buttonText: "Start Building Now",
        variant: "primary",
      },
      render: ({ heading, description, buttonText, variant }) => {
        const bgClasses = {
          primary: "bg-gradient-to-r from-blue-600 to-indigo-600",
          dark: "bg-slate-900",
        };
        return (
          <section className={`${bgClasses[variant]} text-white py-12 sm:py-16 px-4 rounded-2xl`}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {heading}
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
                {description}
              </p>
              <button className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {buttonText}
              </button>
            </div>
          </section>
        );
      },
    },
  },
};
