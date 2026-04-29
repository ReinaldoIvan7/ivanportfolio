const brandLogos = [
  "./src/assets/vn.png",
  "./src/assets/photoshop.png",
  "./src/assets/snapseed.png",
  "./src/assets/photoshop-lightroom.png",
  "./src/assets/canva-icon.png",
  "./src/assets/capcut-icon.png",
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Tools I Use</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I leverage a range of modern and industry-standard tools to bring
          ideas to life with precision and creativity. From design to final
          output, I use tools like Adobe Photoshop, CapCut, Snapseed, Canva, and
          VN editor to craft visually compelling and high-quality content that
          meets professional standards.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 pt-10">
        {brandLogos.map((logo, index) => (
          <button
            key={index}
            type="button"
            className="focus:outline-none"
            onClick={() => console.log(`Clicked logo ${index}`)}
          >
            <img
              src={logo}
              alt={`brand-logo-${index}`}
              className="h-12 sm:h-16 md:h-20 object-contain
                         transform transition duration-300
                         hover:scale-110 active:scale-95 cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
