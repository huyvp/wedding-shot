import { weddingData } from "@/data/wedding-data";
import HeroSection from "@/components/hero-section";
import CoupleSection from "@/components/couple-section";
import TimelineSection from "@/components/timeline-section";
import AlbumSection from "@/components/album-section";
import EventSection from "@/components/event-section";

export default function Page() {
  return (
    <main className="max-w-[480px] mx-auto bg-white">
      <div className="snap-container">
        
        <section className="snap-section bg-[#b9f2ff]">
          <HeroSection data={weddingData.hero} />
        </section>

        <section className="snap-section">
          <CoupleSection groom={weddingData.groom} bride={weddingData.bride} />
        </section>

        <section className="snap-section bg-[#f3f3f3]">
          <TimelineSection data={weddingData.timeline} />
        </section>

        <section className="snap-section">
          <EventSection events={weddingData.events} />
        </section>

        <section className="snap-section">
          <AlbumSection images={weddingData.album} />
        </section>

        <section className="snap-section bg-black text-white p-12 flex flex-col justify-center items-center text-center">
          <div className="border-4 border-white p-8 shadow-[8px_8px_0px_0px_#ff70a6]">
            <h2 className="text-4xl font-black italic mb-4">HẸN GẶP LẠI!</h2>
            <p className="text-[10px] tracking-widest font-bold opacity-60 uppercase">Phú Thọ • Hà Tĩnh</p>
          </div>
        </section>

      </div>
    </main>
  );
}