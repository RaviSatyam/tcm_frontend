/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PairHashPack from "../hashconnect/PairHashPack";
import Test from "./Test";
import "./Hero.css";
import plant from "../asset/image/plant.jpg";
import plant2 from "../asset/image/terrace.jpg";
import plant4 from "../asset/image/spinach.jpg";
import plant5 from "../asset/image/sunset.jpg";
import logo from "../asset/image/hash_logo.jpg";
import News from "./News";

function HeroSection() {
  const [showComponent, setShowComponent] = React.useState(false);

  useEffect(()=>{
    localStorage.clear();
  })

  const HashWallet = () => {
    setShowComponent(true);
  };
  return (
    <>
      {/* -----------------------hero section---------------------------------------- */}
      <section
        style={{ backgroundImage: `url(${plant})` }}
        className="bg-cover dark:bg-gray-900"
      >
         {/* <div className="flex">
            <div className="flex-grow"></div>
        <a
              onClick={HashWallet}
              style={{justifySelf: 'flex-end'}}
              className="inline-flex justify-center mt-4 bg-btn-custom mr-4 items-center cursor-pointer py-3 px-5 text-base font-medium text-center text-violet-700 text-white rounded-full border border-gray-300 hover: focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Connect HashPack
            </a>
            {showComponent && <PairHashPack />}
            </div>  */}
            
        <div className="py-8 px-4 h-[100vh] mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div
            className="inline-flex bg-{#efd002} bg-img-custom  justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-blue-700 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm text-slate-50 font-medium">
              Carbon Tracking is out! HashPack Wallet
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white  md:text-5xl lg:text-6xl dark:text-white">
            Carbon Footprint Tracking
          </h1>
          <p className="mb-8 text-lg font-normal text-yellow-300 lg:text-xl backdrop-blur-md sm:px-16 xl:px-48 dark:text-gray-400">
            Monitor and take action on your carbon footprint with our Hedera
            Hashgraph-Powered platform
          </p>

          <div className="flex flex-col mb-8 mt-20 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Connect Hashpack
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              onClick={HashWallet}
              className="inline-flex justify-center items-center cursor-pointer py-3 bg-btn-custom px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Connect Wallet
            </a>
            {showComponent && <PairHashPack />}
          </div>
          <div className="px-4 w-[367px] mt-[119px] mx-auto  text-center logo-custom md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <div className="flex flex-wrap  justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <img src={`${logo}`} alt="logo" />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------about section------------------------------------------- */}

      <section className="bg-{#118ab2} bg-image-custom dark:bg-gray-900">
        <div className="grid h-[100vh] max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl text-purple-400 mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              About
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              At Carbonverse, we are dedicated to helping organizations to make
              a positive impact on the environment by tracking and reducing
              their carbon footprint. Our platform leverages the power of Hedera
              Hashgraph, a secure and decentralized public ledger technology, to
              provide an efficient and transparent solution for carbon footprint
              tracking.
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              With the urgent need to address climate change and achieve
              sustainability goals, our website aims to empower users with the
              knowledge and tools to understand, monitor, and take action on
              their carbon emissions. We believe that by making carbon footprint
              tracking accessible and user-friendly, we can inspire collective
              action towards a greener future.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              To Know More
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Read More!
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={`${plant2}`} alt="mockup" />
          </div>
        </div>
      </section>
      {/* -----------------------------Swiper section------------------------------------------- */}
      <Test />

      {/* -----------------------------Card section------------------------------------------- */}

      <div className=" bg-grad-card py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Welcome to
            </h2>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Transparent Carbon Market
            </h1>
            <p className="mt-2 text-gray-600 text-xl">
              We believe that by empowering individuals and organizations with
              actionable insights and tools, we can collectively make a
              significant on mitigating climate change and creating a more
              sustainable future.
            </p>
          </div>
          <div className="mt-10 -mx-4 flex flex-wrap">
            <div className="mt-6 w-full md:w-1/2 px-4">
              <div className="rounded-lg shadow-lg ">
                <div className="bg-cover bg-center h-80 ">
                  {" "}
                  <img src={`${plant4}`} alt="spinach" />
                </div>
                <div className="">
                  <div className="backdrop-blur-md">
                    <h4 className="text-lg font-semibold text-white">
                      Card Title 1
                    </h4>
                    <p className="mt-1 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <button className="mt-4 mb-2 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline">
                    View More
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 w-full md:w-1/2 px-4">
              <div className="rounded-lg shadow-lg">
                <div className="bg-cover bg-center h-80 ">
                  <img src={`${plant5}`} alt="sunset" />
                </div>
                <div className="">
                  <div className="backdrop-blur-md ">
                    <h4 className="text-lg font-semibold text-white ">
                      Card Title 2
                    </h4>
                    <p className="mt-1 text-gray-600 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <button className="mt-4 mb-2 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------News Section------------------------------------- */}
      <News />
    </>
  );
}

export default HeroSection;
