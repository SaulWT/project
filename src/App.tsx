function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-neutral-900"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-900 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-900 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="border-t border-b border-amber-700/50 py-8 px-16">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-amber-50 tracking-tight leading-none">
                  SWT
                </h1>
              </div>
            </div>

            <p className="text-3xl md:text-4xl font-serif text-amber-100/90 tracking-wide">
              is a G
            </p>
          </div>

          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>

          <p className="text-amber-200/60 text-sm tracking-[0.3em] uppercase font-sans">
            Class • Style • Respect
          </p>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-amber-900/40 text-xs tracking-widest uppercase font-sans">
            An Offer You Can't Refuse
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
