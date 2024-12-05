export default function Section() {
  return (
    <section className="">
        <h2 className="text-center mb-16 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 [text-shadow:_0_0_20px_rgb(34_211_238_/_50%)] tracking-wider">
          OUR STATS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00fe9c] to-[#00fe9c] ">
              27,000+
            </p>
            <p className="text-gray-500 uppercase tracking-wider text-sm">
              Products Delivered
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00fe9c] to-[#00fe9c] [text-shadow:_0_0_20px_rgb(34_211_238_/_50%)]">
              19,000+
            </p>
            <p className="text-gray-500 uppercase tracking-wider text-sm">
              Satisfied Clients
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00fe9c] to-[#00fe9c] [text-shadow:_0_0_20px_rgb(34_211_238_/_50%)]">
              12,000+
            </p>
            <p className="text-gray-500 uppercase tracking-wider text-sm">
              Hours Worked
            </p>
          </div>
        </div>
    </section>
  );
}
