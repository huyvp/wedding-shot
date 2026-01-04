export default function CoupleSection({ groom, bride }: { groom: any; bride: any }) {
  const Card = ({ person, color }: { person: any; color: string }) => (
    <div className="neo-card flex-1 flex flex-col justify-center">
      <div className="flex items-center gap-6 mb-8">
        <div className={`w-20 h-20 border-4 border-black flex-shrink-0 shadow-[4px_4px_0px_0px_#000] p-1 ${color}`}>
          <img src={person.image} className="w-full h-full object-cover" alt={person.name} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <span className="neo-badge">FREE</span>
            <span className="text-[10px] font-black italic opacity-40">{person.role}</span>
          </div>
          <h2 className="text-2xl font-[900] uppercase leading-none tracking-tight">
            {person.name}
          </h2>
        </div>
      </div>
      
      {/* Phân cách nội dung với khoảng cách rộng rãi */}
      <div className="space-y-6 border-t-4 border-black pt-8">
        <div>
          <span className="bg-yellow-300 border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase mb-3 inline-block">
            GIA ĐÌNH
          </span>
          <div className="pl-2 space-y-1">
            <p className="font-extrabold text-base">Bố: {person.family.father}</p>
            <p className="font-extrabold text-base">Mẹ: {person.family.mother}</p>
          </div>
        </div>
        
        <div className="bg-gray-100 border-2 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
          <span className="text-[10px] font-black text-gray-500 uppercase block mb-1">QUÊ QUÁN</span>
          <p className="font-black text-xs uppercase leading-relaxed">{person.family.address}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col gap-6 py-4">
      <Card person={groom} color="bg-[#80ffdb]" />
      <Card person={bride} color="bg-[#ff90e8]" />
    </div>
  );
}