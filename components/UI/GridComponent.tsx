const GridComponent = ({ content }: { content: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {content.map((item: any, index: number) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default GridComponent;
