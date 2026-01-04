export default function TimelineSection({ data }: { data: any[] }) {
  return (
    <div className="h-full flex flex-col pt-8 pb-4">
      <div className="mb-8">
        <h3 className="inline-block bg-[#ffbd00] border-4 border-black px-6 py-3 font-[900] uppercase text-2xl shadow-[6px_6px_0px_0px_#000] -rotate-2">
          LOVE STORY
        </h3>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 space-y-8 custom-scrollbar">
        {data.map((item, i) => (
          <div key={i} className="neo-card bg-white relative ml-4">
            {/* Index badge giống ảnh mẫu */}
            <div className="absolute -left-8 top-4 w-10 h-10 bg-black border-4 border-white flex items-center justify-center text-white font-black shadow-[4px_4px_0px_0px_#000]">
              {i + 1}
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#57cc99] border-2 border-black px-2 py-1 text-[10px] font-black text-white">
                {item.time}
              </span>
              <h4 className="font-[900] uppercase text-sm tracking-tight">{item.title}</h4>
            </div>
            
            <div className="border-t-2 border-black/10 pt-4">
              <p className="text-xs font-bold text-gray-700 leading-relaxed italic mb-3">
                "{item.content}"
              </p>
              <p className="text-[11px] font-medium leading-relaxed bg-blue-50 p-3 border-2 border-black/5">
                {item.fullStory}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-4">
        <p className="text-[10px] font-black animate-bounce">VUỐT XUỐNG ĐỂ TIẾP TỤC ↓</p>
      </div>
    </div>
  );
}