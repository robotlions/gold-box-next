import Image from "next/image";
import Link from "next/link";

import poolRadCoverImage from "../../public/images/poolRadCover800.jpg";
import azureCoverImage from "../../public/images/azure800.jpg";
import silverBladesCoverImage from "../../public/images/silverBlades800.jpg";
import podCoverImage from "../../public/images/pod800.jpg";

export default function Home() {
  const boxImages = [
    { name: "Pool of Radiance", image: poolRadCoverImage, alt:"pool of radiance game box", href:"/poolofradiance" },
    { name: "Curse of the Azure Bonds", image: azureCoverImage, alt: "curse of the azure bonds game box", href:"/azurebonds" },
    { name: "Secret of the Silver Blades", image: silverBladesCoverImage, alt: "secret of the silver blades game box", href:"/silverblades" },
    { name: "Pools of Darkness", image: podCoverImage, alt: "pools of darkness game box", href:"/poolsofdarkness" },
  ];

  function BoxImagesList(){

    return(
      boxImages.map((boxImage)=>{
        return(
          <div className="text-center hover:scale-110" key={boxImage.name}>
            <Link href={boxImage.href}>
            <Image height={400} src={boxImage.image} alt={boxImage.alt} style={{width:"auto"}}/>
            <h6 className="text-lg">{boxImage.name}</h6>
            </Link>
          </div>
        )
      })
    )
  }

  return (
    <div className="mt-10 mb-20">
      <h2 className="text-center mb-10 font-bold text-3xl">
        Online editor for the Advanced Dungeons and Dragons gold box games.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center md:mx-10">
        <BoxImagesList />
      </div> 
    </div>
  );
}
