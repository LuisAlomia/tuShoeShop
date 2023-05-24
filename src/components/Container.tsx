import Navigation from "./Navigation";

type Prop = {
  children: React.ReactNode;
};

const Container = ({ children }: Prop) => {
  return (
    <main className="max-w-7xl mx-auto px-6 flex flex-col justify-cente">
      <Navigation />
      {children}
    </main>
  );
};

export default Container;
