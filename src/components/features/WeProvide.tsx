import Card from "../ui/Card";

const WeProvide = ({
  title,
  subtitle,
  cardsData,
}: {
  title: string;
  subtitle: string;
  cardsData: { id: number; icon: string; title: string; description: string }[];
}) => {
  return (
    <div className="w-[90%] md:w-[80%] mt-12 md:mt-24 flex flex-col  items-center justify-center">
      <h4 className="text-white font-avenir opacity-60 font-medium text-sm md:text-xl ">
        {subtitle}
      </h4>
      <h1 className="text-white font-geometric font-bold text-xl md:text-3xl text-center mt-4">
        {title}
      </h1>

      <div className="grid  md:grid-cols-3 auto-cols-fr mt-6 md:mt-12 place-items-center gap-8">
        {cardsData?.map((item) => (
          <Card
            href=""
            type="square"
            key={item.id}
            imgHref={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WeProvide;
