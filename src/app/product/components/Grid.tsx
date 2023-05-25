type Prop = {
  children: React.ReactNode;
};

const Grid = ({ children }: Prop) => {
  return (
    <section className="mt-8 mb-24 grid justify-items-center items-center grid-cols-4 max-[1000px]:grid-cols-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1 gap-3">
      {children}
    </section>
  );
};

export default Grid;
