export default function Logo() {
  return (
    <h1
      data-testid="logo"
      className="block z-10 font-bold text-primary-color text-[24px] underline"
    >
      Meu<span className="text-light-color">Logo</span>
      <span className="text-secondary-color">.</span>
    </h1>
  );
}
