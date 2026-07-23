export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono antialiased flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      
      {/* Encabezado Técnico */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl">☸️</span>
            <span className="font-bold text-sm tracking-wider text-slate-200">PROJECT_KUB // MANIFEST_INFO</span>
          </div>
          <div className="text-xs text-slate-500">
            CLUSTER: <span className="text-indigo-400 font-bold">KIND (default)</span>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-3xl mx-auto w-full px-4 py-12 flex-grow flex flex-col justify-center">
        
        {/* Bloque Informativo Principal */}
        <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />
          
          <h1 className="text-2xl font-bold tracking-tight text-white mb-4">
            About Project 'kub'
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            This page is a live demonstration of a modern frontend stack deployed inside an isolated container orchestration environment. It serves as an educational sandbox to validate continuous deployment mechanisms.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Instead of running as a typical standalone web server, this entire user interface is bundled, optimized, and served through a resilient infrastructure layer that maps repository modifications directly to cluster workloads.
          </p>
        </div>

        {/* Sección de Objetivos del Proyecto */}
        <div className="mb-8">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Objectives</h2>
          <div className="space-y-3">
            <div className="bg-slate-900/20 border border-slate-900 rounded-lg p-4">
              <span className="text-indigo-400 font-bold">01 / Declarative Deployment</span>
              <p className="text-xs text-slate-400 mt-1">Eliminate manual server configuration by using version-controlled YAML files as the single source of truth for the entire application state.</p>
            </div>
            <div className="bg-slate-900/20 border border-slate-900 rounded-lg p-4">
              <span className="text-indigo-400 font-bold">02 / High Availability (2 Replicas)</span>
              <p className="text-xs text-slate-400 mt-1">The application runs across two identical, parallel instances (Pods). If one worker instance fails, the cluster maintains availability without interrupting user traffic.</p>
            </div>
          </div>
        </div>

        {/* Especificaciones de la Arquitectura */}
        <div className="bg-slate-900/20 border border-slate-900 rounded-xl p-6">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 pb-2 border-b border-slate-900">
            Pipeline & Infrastructure Specs
          </h2>

          <div className="space-y-4 text-xs">
            {/* Componente 1 */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-slate-900/60 pb-3">
              <span className="font-bold text-slate-300 w-44">Build Runtime:</span>
              <span className="text-slate-400 flex-1">Node.js v24.15.0 managed with pnpm via a multi-stage Dockerfile.</span>
            </div>

            {/* Componente 2 */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-slate-900/60 pb-3">
              <span className="font-bold text-slate-300 w-44">Web Proxy Layer:</span>
              <span className="text-slate-400 flex-1">Nginx Alpine serving compiled static production assets on port 80.</span>
            </div>

            {/* Componente 3 */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-slate-900/60 pb-3">
              <span className="font-bold text-slate-300 w-44">Container Registry:</span>
              <span className="text-slate-400 flex-1">GitHub Container Registry (ghcr.io) hosting secure versioned packages.</span>
            </div>

            {/* Componente 4 */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between">
              <span className="font-bold text-slate-300 w-44">GitOps Controller:</span>
              <span className="text-slate-400 flex-1">Argo CD enforcing Automated Sync and Self-Healing policies against the /k8s directory.</span>
            </div>
          </div>
        </div>

      </main>

      {/* Pie de Página Técnico */}
      <footer className="border-t border-slate-900 py-6 text-center text-[11px] text-slate-600">
        <p>Resource Reference: apps/v1 Deployment [replicas: 2] // v1 Service [type: NodePort]</p>
        <p className="mt-1">Project 'kub' is operating under regular state parameters.</p>
      </footer>

    </div>
  );
}
