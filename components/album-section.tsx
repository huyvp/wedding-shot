export default function AlbumSection({ images }: { images: string[] }) {
  return (
    <div className="h-full flex flex-col pt-8 pb-4">
      <div className="mb-8 flex justify-between items-end">
        <h3 className="inline-block bg-[#70d6ff] border-4 border-black px-6 py-3 font-[900] uppercase text-2xl shadow-[6px_6px_0px_0px_#000] rotate-1">
          ALBUM
        </h3>
        <span className="neo-badge mb-2">GALLERY</span>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-4 overflow-hidden p-1">
        {images.map((img, i) => (
          <div key={i} className={`neo-card p-2 flex flex-col ${i % 2 === 0 ? 'translate-y-2' : '-translate-y-2'}`}>
            <div className="flex-1 border-2 border-black overflow-hidden shadow-[3px_3px_0px_0px_#000]">
              <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="wedding" />
            </div>
            <p className="text-[8px] font-black mt-2 text-center uppercase">Wedding Moment 0{i+1}</p>
          </div>
        ))}
      </div>

      <button className="mt-8 neo-card bg-black text-white font-black text-sm py-4 hover:bg-white hover:text-black transition-colors uppercase tracking-widest">
        Xem tất cả ảnh →
      </button>
    </div>
  );
}