export default function HeroSection() {
  return (
    <div className="h-full max-w-full overflow-y-auto overflow-x-hidden">
      <div className="w-full mt-[10px]">
        <h1
          role="heading"
          className="text-5xl font-bold 2xl:leading-10 leading-0 text-center text-primary-color"
        >
          Touching hundreds of lives
        </h1>
        <h2
          role="contentinfo"
          className="text-base leading-normal text-center text-light-color mt-5"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text Lorem
          Ipsum is simply dummy text of the printing
        </h2>
      </div>
      <div className="mt-[30px] mb-[80px] w-full flex flex-row flex-wrap gap-4 overflow-x-hidden">
        <img src="https://i.ibb.co/jRbF1KF/Rectangle-4.png" alt="guy smiling" />
        <img
          src="https://i.ibb.co/9nLBtjx/Rectangle-3.png"
          alt="guy winking"
          className="w-48 h-36 rounded-lg"
        />
        <img
          src="https://i.ibb.co/kBgtHK6/Rectangle-5.png"
          alt="girl with blue background"
          className="w-20 h-20 rounded-lg"
        />
        <img
          src="https://i.ibb.co/Sf4Q94L/Rectangle-6.png"
          alt="girl with bluw background"
          className="w-48 h-48 rounded-lg"
        />
        <img
          src="https://i.ibb.co/fnNqJrx/Rectangle-7.png"
          alt="guy with glasses"
          className="w-20 h-20 rounded-lg flex-shrink-0 object-cover object-fit"
        />
      </div>
    </div>
  );
}
