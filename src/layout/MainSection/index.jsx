import Logo from "../../components/Logo";

export default function MainSection({ children }) {
  return (
    <section className="h-full flex flex-col">
      <Logo />
      <div className="flex-1 flex flex-col justify-center">{children}</div>
    </section>
  );
}
