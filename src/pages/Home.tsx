import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-bold text-xl text-slate-900">Puck Builder</span>
        </div>
        <Link
          to="/edit"
          className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Open Editor
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="px-6 py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Drag & Drop Page Builder
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Build Beautiful Pages
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Without Code
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Create stunning, responsive pages in minutes using our intuitive drag-and-drop editor.
            No coding skills required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/edit"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Building
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/preview"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-200 border border-slate-200 shadow-sm"
            >
              View Preview
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-5xl mx-auto mt-24 sm:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🎨",
                title: "Beautiful Components",
                description: "Pre-designed, responsive components ready to use",
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Optimized for performance and instant previews",
              },
              {
                icon: "📱",
                title: "Fully Responsive",
                description: "Looks great on every device, from mobile to desktop",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-slate-500 text-sm">
        Built with Puck + React + Tailwind CSS
      </footer>
    </div>
  );
}
