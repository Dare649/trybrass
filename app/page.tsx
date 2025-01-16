'use client'

import BusinessInsider from "@/public/logo/businessInsider";
import TechCrunch from "@/public/logo/techCrunch";
import Yahoo from "@/public/logo/yahoo";
import { section1, sec2, int, cust, faq, footer } from "@/components/dummy";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { selectVideo as selectVideoAction} from "@/redux/features/videoSlice";
import { useEffect } from "react";
import { nextSlide , setSlide} from "@/redux/features/sliderSlice";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { toggleFaq } from "@/redux/features/faqSlice";
import Logo1 from "@/public/logo/logo1";
import Ios from "@/public/logo/ios";
import Android from "@/public/logo/android";
import { setVid } from "@/redux/features/vidSlice";
import { toggleFoot } from "@/redux/features/footSlice";
import Link from "next/link";



export default function Home() {
  const dispatch: AppDispatch = useDispatch();

  const selectedVideoId = useSelector((state: RootState) => state.video.selectedVideoId);

  useEffect(() => {
    if (!selectedVideoId && section1.length > 0) {
      dispatch(selectVideoAction(section1[0].id));
    }
  }, [dispatch, selectedVideoId])

  const currentVideo = section1.find((item) => item.id === selectedVideoId)

  const currentIndex = useSelector((state: RootState) => state.slider.currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide({ totalSlides: sec2.length}));
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch]);


  const openFaq = useSelector((state: RootState) => state.faq.openFaq);


  const openFoot = useSelector((state: RootState) => state.foot.openFoot);


  const currentVid = useSelector((state: RootState) => state.vid.currentSlide);

  const handleDotClick = (index: number) => {
    dispatch(setVid(index)); 
  };
  
  return (
    <div className="w-full">
      
      <section className="w-full bg-black-2 text-white-1 lg:px-[120px] sm:px-[0px] lg:py-[70px] sm:py-[0px]">
        <div className="w-full flex lg:flex-row sm:flex-col-reverse gap-x-3 gap-y-24 p-5 sm:pb-10 lg:pb-0">
          <div className="lg:w-[50%] sm:w-full">
            <h1 className="first-letter:capitalize font-bold lg:text-7xl sm:text-4xl">banking that <br />works for your <br />business</h1>
            <p className="mt-10 lg:text-xl sm:text-md font-medium">Do more with a business account that comes with top-end financial tools and integrations to help grow your business.</p>
            <div className="mt-10 lg:flex sm:hidden">
              <Link href={'pages/auth/signup'} className="text-white-1 bg-green-1 rounded-lg py-5 px-8 first-letter:capitalize">open an account in 10 minutes</Link>
            </div>
            <div className="w-full lg:hidden sm:flex fixed bottom-0 z-50">
              <button className="text-white-1 bg-green-1 py-5 px-8 first-letter:capitalize">open an account in 10 minutes</button>
            </div>
            <div className="grid grid-cols-2 lg:mt-28 sm:mt-20 gap-5 w-full text-left">
              <a href=" https://techcrunch.com/2021/10/21/ventures-platform-hustle-fund-back-nigerian-fintech-brass-in-1-7m-round/" target="_blank" rel="noopener noreferrer" >
                <TechCrunch />
              </a>
              <a href=" https://www.yahoo.com/now/ventures-platform-hustle-fund-back-080006151.html?guccounter=1" target="_blank" rel="noopener noreferrer" >
                <Yahoo />
              </a>
              <a href=" https://africa.businessinsider.com/local/markets/nigerian-fintech-brass-secures-dollar17mn-financing-round-to-power-expansion-into/74mwmjq" target="_blank" rel="noopener noreferrer" >
                <BusinessInsider />
              </a>
            </div>
          </div>
          <div className="lg:w-[50%] sm:w-full">
            <video 
              src="https://www.trybrass.com/static/Payments-8fb7dc6bc3585e4167c7fde6ed0c3db7.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            ></video>
          </div>
        </div>
      </section>
      <section className="bg-white lg:px-[120px] sm:px[0px] text-black-2">
        <div className="lg:pt-[96px] sm:pt-[15%] sm:px-5 lg:px-0">   
          <div className="text-center">
            <h1 className="font-bold lg:text-3xl sm:text-2xl text-black-0 mb-[16px]">The complete financial stack for your business</h1>
            <p className="lg:text-lg sm:text-md font-medium">Top-end financial tools to help your business with its financial operations and cash flow.</p>
            <p className="lg:text-lg sm:text-md font-medium">We help companies of all types work better, save time and money with a simply better banking <br />service that works.</p>
          </div>
          <div className="py-[100px] flex lg:flex-row sm:flex-col items-start gap-8">
            <div className="lg:[25%] sm:w-full flex lg:flex-row sm:flex-col gap-4 items-center">
              <div className="text-center lg:w-[40%] sm:w-[20%]">
                <img src="https://www.trybrass.com/static/Speed-380c66374f966230f03d2a0a04f5f9df.gif" alt="trybrass" className="rounded-lg w-full"/>
              </div>
              <div className="sm:text-center lg:text-left">
                <h4 className="text-black-0 font-medium capitalize lg:text-2xl sm:text-xl mb-2">speed</h4>
                <p className="leading-relaxed tracking-wider lg:text-base sm:text-sm">Open a commercial-grade current account from anywhere in 10 minutes</p>
              </div>
            </div>
            <div className="lg:[25%] sm:w-full flex lg:flex-row sm:flex-col gap-4 items-center">
              <div className="text-center lg:w-[40%] sm:w-[20%]">
                <img src="https://www.trybrass.com/static/Security-8606df9d466b5169007c86f054bd9f66.gif" alt="trybrass" className="rounded-lg w-full"/>
              </div>
              <div className="sm:text-center lg:text-left">
                <h4 className="text-black-0 font-medium capitalize lg:text-2xl sm:text-xl mb-2">security</h4>
                <p className="leading-relaxed tracking-wider lg:text-base sm:text-sm">Rely on bank-grade security with all your monies fully insured by NDIC</p>
              </div>
            </div>
            <div className="lg:[25%] sm:w-full flex lg:flex-row sm:flex-col gap-4 items-center">
             <div className="text-center lg:w-[40%] sm:w-[20%]">
              <img src="https://www.trybrass.com/static/Support-d41f6dd61ca6643249745571fb73fb66.gif" alt="trybrass" className="rounded-lg w-full"/>
             </div>
              <div className="sm:text-center lg:text-left">
                <h4 className="text-black-0 font-medium capitalize lg:text-2xl sm:text-xl mb-2">support</h4>
                <p className="leading-relaxed tracking-wider lg:text-base sm:text-sm">Get access to a trusted support team and resources whenever you want</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mt-[20%] sm:mt-[10%] bg-white lg:px-[120px] sm:px-5 w-full">
        <h1 className="lg:text-5xl sm:text-3xl font-bold lg:text-left sm:text-center">Everything you need, less of <br />what you don't.</h1>

        <div className="desktop-view w-full lg:flex sm:hidden">
          <div className="flex lg:flex-row sm:flex-col-reverse items-center gap-10 w-full mt-10">
            {/* Content section */}
            <div className="lg:w-[50%] sm:w-full">
              {section1.map((item) => (
                <div
                  key={item.id}
                  className={`border-l-4 cursor-pointer p-4 ${
                    selectedVideoId === item.id ? "border-blue-500 text-black-1" : "border-gray-100 text-gray-1"
                  }`}
                  onClick={() => dispatch(selectVideoAction(item.id))}
                >
                  <div className="lg:w-full">
                    <h3 className="text-xl  font-bold capitalize">{item.title}</h3>
                    <p className=" text-md leading-relaxed tracking-wider">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Video section that covers the whole content */}
            <div className="lg:w-[50%] sm:w-full bg-gray-100 rounded-lg py-10">
              {currentVideo && (
                <video
                  key={currentVideo.id}
                  src={currentVideo.vid}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] rounded-lg"
                ></video>
              )}
            </div>
          </div>
        </div>

        <div className="mobile-view w-full lg:hidden sm:flex flex-col items-center">
      <div className="p-5">
        {/* Display the current slide */}
        <div className="w-full flex flex-col">
          <div className="w-full bg-gray-1 rounded-lg p-3 my-5">
            <video
              src={section1[currentVid].vid}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg"
            ></video>
          </div>
          {/* Render dots for navigation */}
          <div className="flex justify-center gap-2 mb-16">
            {section1.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentVid === index ? 'bg-black-1' : 'bg-gray-1'
                }`}
              ></button>
            ))}
          </div>
          <div className="mt-3 text-center mx-auto">
            <h3 className="text-xl font-semibold capitalize">{section1[currentVid].title}</h3>
            <p className="text-md text-gray-1 leading-relaxed tracking-wider">{section1[currentVid].content}</p>
          </div>
        </div>
      </div>
    </div>

       <div className="lg:pt-[200px] sm:pt-[30%] text-center">
          <h1 className="lg:text-4xl sm:text-3xl font-bold text-black-0">Built for today’s ambitious <br /> businesses</h1>
          <p className="py-10 lg:text-xl sm:text-sm text-black-1">Thousands of forward-thinking businesses rely on Brass everyday to turbo- <br />charge their business financial operations</p>
       </div>
      </section>


      <section className="w-full bg-black-2 relative" style={{ zIndex: -0 }}>
        {
          sec2.map((item, index) => (
            <div 
              key={item.id}
              className={`flex lg:flex-row sm:flex-col-reverse items-center transition-transform duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } ${index === currentIndex ? "translate-x-0" : "-translate-x-full"}`}>
              {
                index === currentIndex && (
                  <>
                    <div className="lg:w-[50%] lg:py-[112px] sm:py-[50px] lg:px-[116px] sm:px-5 sm:w-full text-center text-white-1">
                      <h2 className="lg:text-xl sm:text-lg font-medium">"{item.content}"</h2>
                      <h5 className="mt-20 text-sm text-gray-2">{item.name}</h5>
                      <div className="flex items-center justify-center my-8 ">
                        {sec2.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            onClick={() => dispatch(setSlide({ index: dotIndex }))}
                            className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                              dotIndex === currentIndex
                                ? "bg-white-1"
                                : "bg-gray-2"
                            }`}
                          ></div>
                        ))}
                      </div>
                      <div className="mt-10 lg:w-[25%] sm:w-[50%] flex flex-col items-center mx-auto">
                        <img src={item.logo} alt={item.name} className="w-full "/>
                      </div>
                    </div>
                   
                    <div className="lg:w-[50%] sm:w-full">
                      <img src={item.img} alt={item.name} className="w-full"/>
                    </div>
                  </>
                )
              }
            </div>
          ))
        }
        
      </section>

      <section className="lg:pt-[200px] sm:pt-[30%] lg:px-[120px] sm:px-5 bg-white-1 w-full">
        <div className="w-full">
          <h1 className="lg:text-4xl sm:text-3xl font-bold first-letter:capitalize">integrations that matters</h1>
          <p className="text-sm mt-5 leading-relaxed tracking-wider">Brass is seamlessly integrated with the tools your team is already familiar with.</p>
          <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 w-full">
            {
              int.map((item, id) => (
                <div
                  key={id}
                  className="border-gray-1 border-2 rounded-lg px-5 py-10"
                >
                  <div className="py-5">
                    {item.img}
                  </div>
                  <h2 className="font-bold lg:text-xl sm:text-lg capitalize py-3">{item.title}</h2>
                  <p className="lg:text-md sm:text-sm text-black-2 leading-relaxed tracking-wider">{item.constent}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="w-full my-[100px] gap-5 bg-white flex lg:flex-row items-center justify-between sm:flex-col">
        <div className="lg:[50%] sm:w-full">
          <img src="https://www.trybrass.com/static/b7a847ddec3b5b95509c25675c6e3df9/4c215/support.webp" alt="trybrass" className="w-full"/>
        </div>
        <div className="lg:[50%] sm:w-full text-left sm:px-5 lg:px-0">
          <h6 className="text-gray-1 uppercase text-xs font-bold">support when you need it</h6>
          <h1 className="lg:text-4xl sm:text-2xl font-bold text-black-2 first-letter:capitalize py-5 leading-relaxed tracking-wider">our support team is <br />your team</h1>
          <p className="lg:text-md sm:text-sm leading-relaxed tracking-wider">Our support team are a mix of bankers and growth experts ready to <br /> help you. With a Brass account, you get a team that is genuinely <br /> seeking to understand your business and provide solutions for its <br />financial operations. <br /><br />   We are committed to going beyond issue resolution to becoming your <br /> partner in the growing and smooth running of your business.</p>
        </div>
      </section>

      <section className="w-full bg-white lg:py-[100px] sm:py-[10%] lg:px-[120px] sm:px-5">
        <div className="">
          <h1 className="font-bold lg:text-4xl sm:text-3xl first-letter:capitalize text-center text-md leading-relaxed tracking-wide">go further with resources to <br /> get start</h1>
          <p className="text-center lg:text-lg sm:text-sm leading-relaxed tracking-wider py-5 ">We have partnered with businesses on the same mission as ours to help <br />local businesses. We have also added resources you need to start, run <br /> and grow your business.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 sm:grid-cols-1 gap-3 w-full"> 
          {
            cust.map((item, id) => (
              <div
                key={id}
                className="border-2 border-gray-1 rounded-lg"
              >
                <div className="flex flex-col">
                  <img src={item.img} alt="trybrass" />
                  <div className="lg:p-5 sm:p-2">
                    <h4 className="text-md font-bold">{item.header}</h4>
                    <p className="tracking-wide leading-relaxed text-xs">{item.content}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="w-full bg-black-2  text-white-1">
        <div className="w-full lg:pt-[200px] sm:py-[10%] lg:pb-[96px] lg:px-[120px] sm:px-5 flex lg:flex-row sm:flex-col gap-5 border-b-2 border-gray-3">
          <div className="text-left lg:w-[50%] sm:w-full">
            <h1 className="font-bold text-3xl leading-relaxed">Some of the things you <br />may want to know</h1>
            <p className="mt-5 text-sm text-center">We answered questions so you don’t have to ask them.</p>
          </div>
          <div className="text-left lg:w-[50%] sm:w-full">
            {
              faq.map((item) => (
                <div 
                  key={item.id}
                  className={`border-b-2 border-gray-2 w-full transition-all duration-300 lg:p-5 sm:p-3 ${ openFaq === item.id ? 'bg-gray-3' : 'bg-black-2'}`}
                >
                  <div 
                    className="w-full flex flex-row items-center justify-between lg:py-8 sm:py-4"
                    onClick={() => dispatch(toggleFaq(item.id))}
                  >
                    <h5>{item.qst}</h5>
                    {
                      openFaq === item.id ? (
                        <IoIosArrowUp className="text-xl transition-transform duration-500 text-gray-2 cursor-pointer" />
                      ) : (
                        <IoIosArrowDown className="text-xl transition-transform duration-500 text-gray-2 cursor-pointer" />
                      )
                    }
                    
                  </div>
                  {
                    openFaq === item.id && (
                      <div className="">
                        <p className="tracking-wide leading-relaxed">{item.ans}</p>
                      </div>
                    )
                  }
                </div>
              ))
            }
          </div>
        </div>

        <div className="border-b-2 border-gray-3 w-full lg:px-[120px] sm:px-5">
          <div className="lg:py-[100px] sm:py-[10%] w-full text-center">
            <h1 className="font-bold text-4xl first-letter:capitalize text-center text-md leading-relaxed tracking-wide">Get started for free in 10 minutes</h1>
            <p className="mt-5 text-md leading-relaxed tracking-wider">
              Get all the best financial products for your business growth for
              free.  <br />  Open the last current account you will ever need for
              your business
            </p>
            <div className="mt-10">
              <Link href={'pages/auth/signup'} className="text-white-1 bg-green-1 rounded-lg py-5 px-8 first-letter:capitalize">get started in minutes</Link>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-gray-3 w-full lg:px-[120px] sm:px-5 lg:pt-[100px] sm:py-[10%] lg:pb-[200px]">
          <div className="desktop-view w-full lg:flex sm:hidden">
            <div className="w-full grid grid-cols-7 gap-5">
              {footer.map((item, id) => (
                <div key={id} className="flex flex-col">
                  {/* Header */}
                  <h4 className="font-semibold mb-2 capitalize text-black-1">{item.head}</h4>
                  {/* Underlings */}
                  <ul className="space-y-5">
                    {item.underlings.map((underling, index) => (
                      <li key={index} className="capitalize text-md cursor-pointer">
                        {underling}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mobile-view lg:hidden sm:flex">
          <div className="text-left w-full">
            {footer.map((item) => (
              <div
                key={item.id}
                className={` w-full transition-all duration-300 p-2 `}
              >
                <div
                  className="w-full flex flex-row items-center justify-between py-2 cursor-pointer"
                  onClick={() => dispatch(toggleFoot(item.id))}
                >
                  <h5 className="text-md text-gray-2 capitalize">{item.head}</h5>
                  {openFoot === item.id ? (
                    <IoIosArrowUp className="text-xl text-gray-2 transition-transform duration-500" />
                  ) : (
                    <IoIosArrowDown className="text-xl text-gray-2 transition-transform duration-500" />
                  )}
                </div>
                {openFoot === item.id && (
                  <div className="">
                    <ul className="list-none">
                      {item.underlings.map((underling, index) => (
                        <li key={index} className="text-white-1 text-md leading-relaxed capitalize">
                          {underling}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
          <div className="lg:pt-[200px] sm:pt-[10%]">
            <div className="flex gap-2">
              <Logo1/>
              <h3 className="first-letter:capitalize mt-4">big starts small.</h3>
            </div>
            <p className="text-left first-letter:capitalize text-sm py-2">available on web and also on</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="bg-gray-3 text-white-1 rounded-lg lg:p-2 sm:p-1">
                <a href="https://play.google.com/store/apps/details?id=com.brass.mobile" className="text-white-1"><Android/></a>
              </div>
              <div className="bg-gray-3 text-white-1 rounded-lg lg:p-2 sm:p-1">
                <a href="https://apps.apple.com/ng/app/brass-banking-for-businesses/id1571096526" className="text-white-1"><Ios/></a>
              </div>
            </div>
            <div className="lg:mt-[64px] sm:mt-[20%] text-white text-sm leading-relaxed tracking-wide">
              <p>Banking services backed by Wema Bank & Titan Trust Bank and regulated by the Central Bank of Nigeria. <br /> Brass web and mobile applications are properties of Copper Brass Limited, a company registered with the Corporate Affairs Commission with RC Number: 7483800.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
