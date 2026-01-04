export default function GallerySection({ images }: { images: string[] }) {
  return (
    <section className="space-y-6">
      <div className="inline-block bg-[#ffbd00] border-[3px] border-black px-4 py-1 font-black uppercase shadow-[4px_4px_0px_0px_#000] rotate-[1deg]">
        Gallery
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className="neo-card p-2 bg-white">
            <img src={img} className="w-full aspect-square object-cover border-2 border-black shadow-[2px_2px_0px_0px_#000]" alt="Wedding" />
          </div>
        ))}
      </div>
    </section>
  );
}