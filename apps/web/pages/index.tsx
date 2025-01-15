import Image from "next/image";
import { Inter } from "next/font/google";
import { BannerCard } from "ui";
// import { ProfileCard } from "ui";

const inter = Inter({ subsets: ["latin"] });

export interface ProfileCardProps {
  name: string;
}

export interface DataCardProps {
  val1: string;
  val2: string;
}

const DataCard: React.FC<DataCardProps> = (props) => {
  return (
    <div className="w-fit px-4 py-2 bg-[#FEF6FF] border border-[#FDE5FF] rounded-xl box-border flex flex-col items-center">
      <label className="text-[#AF0BB8] font-bold">{props.val1}</label>
      <label className="text-[#AF0BB8]">{props.val2}</label>
    </div>
  );
};

const CARDVALUES = [
  { val1: "51,368", val2: "Followers" },
  { val1: "163", val2: "Articles" },
  { val1: "9/10", val2: "Ratings" },
];

const SVGLIST = [
  "/youtube.svg",
  "/twitter.svg",
  "/linkedin.svg",
  "/github.svg",
  "/instagram.svg",
];

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  return (
    <div className="relative w-fit shrink-0 rounded-lg overflow-hidden pb-8 px-6 bg-white border border-slate-100">
      <div className="absolute w-full h-32 object-none -mx-6">
        <Image
          src="/header.jpg"
          width={500}
          height={200}
          alt="Header image"
          className="h-32"
        />
      </div>
      <div className="absolute bg-red-200 w-full h-32 backdrop-blur-md bg-white/30 -mx-6"></div>
      <div className="flex flex-col items-center">
        <div className="relative h-[100px] w-[100px] rounded-full mt-[84px] z-10">
          <Image
            src="/ProfilePic.png"
            width={500}
            height={200}
            alt="Picture of the author"
            className="h-[100px]"
          />
          <div className="absolute bottom-2 right-2 rounded-full h-4 w-4 bg-green-500"></div>
        </div>
        <label className="text-2xl font-bold mt-4">John Doe</label>
        <label className="text-slate-400 mt-2">Product Designer, Zomato</label>
        <div className="flex w-full justify-center gap-x-10 mt-9">
          {CARDVALUES.map((cardValue, index) => {
            return <DataCard key={index} {...cardValue} />;
          })}
        </div>
        <div className="mt-9 flex gap-4">
          {SVGLIST.map((svg, index) => {
            return (
              <Image
                key={index + svg}
                src={svg}
                width={24}
                height={24}
                alt={"Icon For " + svg}
                className="h-6 w-6 cursor-pointer"
              />
            );
          })}
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-blue-300"></div> */}
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-8 w-[100px] h-[100px] blur-2xl bg-[#8BE2FE] rounded-full"></div>
      <div className="absolute top-24 right-0 translate-x-1/2 translate-y-1/2 w-[100px] h-[100px] blur-2xl bg-[#8BE2FE] rounded-full"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex justify-center">
      <ProfileCard name="shrey" />
      <BannerCard />
    </div>
  );
}
