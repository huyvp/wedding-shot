export default function EventSection({ events }: { events: any[] }) {
  return (
    <div className="h-full flex flex-col pt-6 pb-2">
      <div className="mb-6">
        <h3 className="inline-block bg-[#57cc99] border-4 border-black px-6 py-2 font-[900] uppercase text-xl shadow-[5px_5px_0px_0px_#000] text-white">
          LỊCH TRÌNH TIỆC
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 pr-1 custom-scrollbar">
        {events.map((ev, i) => (
          <div key={i} className="neo-card relative">
            <div className="absolute top-4 right-4 neo-badge">SAVE DATE</div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xl">📅</span>
              </div>
              <div>
                <h4 className="font-black uppercase text-base leading-none">{ev.name}</h4>
                <p className="text-[10px] font-bold text-gray-500 mt-1">{ev.date} — {ev.time}</p>
              </div>
            </div>

            <div className="border-t-4 border-black pt-4">
              <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Địa điểm:</p>
              <p className="font-black text-xs mb-1">{ev.location}</p>
              <p className="text-[10px] font-medium text-gray-600 mb-4">{ev.address}</p>
              
              <button className="neo-btn w-full justify-center bg-yellow-300 text-xs py-3 active:translate-y-1 transition-all">
                CHỈ ĐƯỜNG ĐẾN TIỆC →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}