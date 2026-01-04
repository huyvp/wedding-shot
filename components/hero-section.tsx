export default function HeroSection({ data }: { data: any }) {
  return (
    <div className="p-8 h-full flex flex-col justify-between items-center text-center bg-[#b9f2ff]">
      <div className="mt-10 animate-float">
        <div className="bg-[#ff70a6] border-4 border-black p-4 inline-block shadow-[6px_6px_0px_0px_#000]">
          <span className="text-6xl text-white font-black italic">W</span>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-6xl font-[900] leading-none tracking-tighter uppercase">
          {data.title}
        </h1>
        <p className="bg-white border-2 border-black px-4 py-1 font-bold inline-block shadow-[4px_4px_0px_0px_#000]">
          {data.subTitle}
        </p>
      </div>

      <div className="mb-10 w-full">
        <div className="bg-yellow-300 border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000]">
          <p className="text-2xl font-black uppercase tracking-widest">{data.date}</p>
        </div>
      </div>
    </div>
  );
}