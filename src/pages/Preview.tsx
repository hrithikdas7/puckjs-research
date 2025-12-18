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
    <div className="min-h-screen bg-white">
      {/* Navigation bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <div>
              <span className="font-semibold text-slate-900">Page Preview</span>
              <span className="hidden sm:inline text-slate-400 text-sm ml-2">• Live Preview Mode</span>
            </div>
          </div>
          <Link
            to="/edit"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Page
          </Link>
        </div>
      </nav>

      {/* Page content */}
      <main>
        {hasContent ? (
          <div className="bg-slate-50 min-h-[calc(100vh-60px)]">
            <div className="max-w-7xl mx-auto">
              <Render config={config} data={data} />
            </div>
          </div>
        ) : (
          <div className="min-h-[calc(100vh-60px)] flex items-center justify-center bg-slate-50">
            <div className="text-center px-6 py-16">
              <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">No Content Yet</h2>
              <p className="text-slate-500 mb-8 max-w-md">
                Your page is empty. Head to the editor to start building your page with drag-and-drop components.
              </p>
              <Link
                to="/edit"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Open Editor
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
