import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Frontend Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Affan Samaeng</span>
            </h1>
            <h2 className="h2 xl:pt-5 xl:pb-15  mx-auto h-full gap-8 ">
              Technology Leader and Innovator
            </h2>
            <p className="xl:pt-5 xl:pb-5 mx-auto  leading-[3] ">
              Driving Innovation through Technology, Blockchain, and AI
            </p>
            <div className="flex flex-col xl:flex-row items-center">
              {/*<Link href="/path/to/your/cv.pdf" download>*/}
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:text-accent"
                >
                  <span>Dowload CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              {/* </Link> */}
              <div className="mb-8 xl:mb-0 "></div>
              <Social
                containerStyles="flex gap-6 mx-5 "
                iconStyles="w-9 h-9  flex justify-center items-center text-white/ hover:text-accent hover:transition-all hover:border-accent duration-500 hover:h1"
              />
            </div>
          </div>
          <div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0"></div>
          </div>
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Home;
