import Image from "next/image";
import { BackgroundBeams } from "../ui/background-beams";

function ProjectCard({
  src,
  title,
  subtitle,
}: {
  src: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="z-10 relative h-[380px] md:h-[480px] min-w-[280px] min-h-[300px] bg-zinc-900 rounded-lg overflow-clip flex flex-col justify-between">
      <BackgroundBeams />

      <div className="mx-8 mt-8">
        <h2 className="text-white font-bold text-xl md:text-3xl">{title}</h2>
        <h4 className="text-white text:sm md:text-xl">{subtitle}</h4>
      </div>

      <Image
        src={src}
        alt="image"
        width={378}
        height={326}
        className="mx-auto z-20"
      />
    </div>
  );
}

export default ProjectCard;
