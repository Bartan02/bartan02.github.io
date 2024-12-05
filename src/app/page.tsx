import Image from "next/image";
import bartoszadamczyk from "../public/image/bartoszadamczyk.webp";
import {interTightHeader} from "@/app/ui/fonts";
import Navbar from "@/app/lib/Navbar";
import Footer from "@/app/lib/Footer";
import Link from "next/link";
import sporton from "@/public/image/projects/sporton.webp"
import jrcz from "@/public/image/projects/jrcz.webp"
import oopgame from "@/public/image/projects/oopgame.webp"
import stepup from "@/public/image/projects/stepup.webp"

export default function Home() {

  return (
      <div>
      <Navbar/>
      <div className={`h-svh w-full bg-[--landing-screen] flex md:justify-start justify-center overflow-hidden`}>
        <div className={`content-end`}>
            <Image
                className={`2xl:w-[calc(200px+35vw)] md:w-[calc(200px+35vw+10vh)]`}
                src={bartoszadamczyk}
                alt="Bartosz Adamczyk Photo"
            />
        </div>
          <div className={`absolute right-14 md:right-32 2xl:top-1/2 md:top-[25vw] top-[calc(25vw+10vh)] text-right -translate-y-1/2 ${interTightHeader.className}`}>
              <span className={"text-shadow-pop-right tracking-wide text-white text-[calc(24px+5vw)] leading-none inline-block"}> BARTOSZ <br/> ADAMCZYK </span>
          </div>
      </div>
      <div id={'about-me'} className={'w-full text-white block lg:grid lg:grid-cols-[48%,2%,48%] lg:gap-3 min-h-[500px] h-fit bg-[--about-me] place-items-center'}>
          <div className={`text-shadow-pop-about-me ${interTightHeader.className} pt-10 lg:pt-0 text-center text-[calc(24px+4vw)]`}>
              About me
          </div>
          <div className={`w-[1px] h-3/5 bg-white lg:block hidden`}>
          </div>
          <div className={`lg:text-2xl text-xl lg:pl-10 lg:pr-20 p-10`}>
              I am Bartosz Adamczyk, currently ICT student at HZ University of Applied Sciences, with a passion for technology, innovation, and creating impactful digital experiences. I would like to introduce mainly my educational and professional background more in details on this page.
              I am keen on programming and solving technical problems. I want to make world a better place through creating various applications, programs and websites. It gives me a lot of pleasure and satisfaction.
              Beyond tech, I love exploring new places, listening to great music, and embracing new experiences that fuel my creativity.
          </div>
      </div>
      <div className={'w-full p-5 py-12 md:p-20 min-h-screen bg-[--background]'}>
          <div>
              <div className={`${interTightHeader.className} pb-5 text-center text-[--about-me] text-shadow-pop-subheader text-6xl md:text-[calc(24px+4vw)]`}>
                  Experience
              </div>
              <div>
                  <div className={`xl:px-[calc(15vw)] lg:px-[calc(7vw)]`}>
                      <div className="space-y-8 text-2xl relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:bg-[--about-me] before:to-transparent">
                          <div className="relative flex justify-center items-center group">
                              <div className="flex items-center justify-center w-4 h-4 rounded-full border border-[--about-me] bg-[--about-me] text-[--about-me]">
                              </div>
                              <div className="w-[calc(100%)] p-4 text-left">
                                  <p> May 2021 </p>
                                  <p className={'text-4xl flex'}> Diebold Nixdorf </p>
                                  <p> Warsaw, Poland </p>
                                  <br/>
                                  <p> Apprenticeship </p>
                                  <br/>
                                  <ul className={`list-disc list-inside`}>
                                      <li>
                                          Creating the web application for searching appropriate install files for ATM
                                          machines and the desktop application changing some properties on Windows.
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className={`pt-20`}>
              <div className={`${interTightHeader.className} pb-5 text-center text-[--about-me] text-shadow-pop-subheader text-6xl md:text-[calc(24px+4vw)]`}>
                  Education
              </div>
              <div className={`xl:px-[calc(15vw)] lg:px-[calc(7vw)]`}>
                  <div className="space-y-8 text-2xl relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:bg-[--about-me] before:to-transparent">
                      <div className="relative flex justify-center items-center group">
                          <div className="flex items-center justify-center w-4 h-4 rounded-full border border-[--about-me] bg-[--about-me] text-[--about-me]">
                          </div>
                          <div className="w-[calc(100%)] p-4 text-left">
                              <p> September 2022 - Current </p>
                              <p className={'text-4xl flex'}> HZ University of Applied Sciences
                                  <Link href={'https://hz.nl/'} target={"_blank"} className={"pl-2"}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                    </svg>
                                  </Link>
                              </p>
                              <p> Middelburg, Netherlands </p>
                              <br/>
                              <p> BSc | Information and Communication Technology </p>
                          </div>
                      </div>
                      <div className="relative flex justify-center items-center group">
                          <div className="flex items-center justify-center w-4 h-4 rounded-full border border-[--about-me] bg-[--about-me] text-[--about-me]">
                          </div>
                          <div className="w-[calc(100%)] p-4 text-left">
                                  <p> September 2024 - Current </p>
                                  <p className={'text-4xl flex'}> The Hague University of Applied Sciences
                                      <Link href={'https://www.dehaagsehogeschool.nl/'} target={"_blank"} className={"pl-2"}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                          </svg>
                                      </Link>
                                  </p>
                                  <p> Zoetermeer, Netherlands </p>
                                  <br/>
                                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                                  <p> Minor | "Becoming the next successful online startup" </p>
                          </div>
                      </div>
                      <div className="relative flex justify-center items-center group">
                          <div className="flex items-center justify-center w-4 h-4 rounded-full border border-[--about-me] bg-[--about-me] text-[--about-me]">
                          </div>
                          <div className="w-[calc(100%)] p-4 text-left">
                                  <p> September 2018 - April 2022 </p>
                                  <p className={'text-4xl flex'}> Technical Secondary School of Mechatronics No 1
                                      <Link href={'https://tm1.edu.pl/'} target={"_blank"} className={"pl-2"}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                          </svg>
                                      </Link>
                                  </p>
                                  <p> Warsaw, Poland </p>
                                  <br/>
                                  <p> High School Diploma + Vocational qualifications </p>
                                  <br/>
                                  <ul className={`list-disc list-inside`}>
                                      <li>
                                          Passed and received EE.08 (Installation and operation of computer systems, peripherals and networks) and EE.09 (Programming, development and administration of websites and databases) qualifications issued by CKE (Polish examination board)
                                      </li>
                                  </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id={'portfolio'} className={'w-full text-white block lg:grid lg:grid-cols-[48%,2%,48%] lg:gap-3 md:min-h-[500px] h-fit bg-[--portfolio] place-items-center'}>
          <div className={`text-shadow-pop-portfolio ${interTightHeader.className} pt-10 lg:pt-0 text-center text-[calc(24px+4vw)] lg:order-last`}>
              Portfolio
          </div>
          <div className={`w-[1px] h-3/5 bg-white lg:block hidden`}>
          </div>
          <div className={`lg:text-2xl text-xl lg:pl-20 lg:pr-10 p-10 lg:order-first`}>
              Explore a collection of websites and applications developed with a focus on simplicity, functionality, and continuous improvement. These projects highlight a growing passion for technology and problem-solving.
          </div>
      </div>
      <div className={'w-full p-5 py-12 md:p-20 bg-[--background]]'}>
          <div>
              <div className={`${interTightHeader.className} pb-5 text-center text-[--portfolio] text-shadow-pop-subheader text-6xl md:text-[calc(24px+4vw)]`}>
                  University projects
              </div>
              <div className={'text-center py-10'}>
                  Hover (or click) on an image to find out more about a specific project
              </div>
              <div>
                  <div className={`xl:px-[calc(15vw)] lg:px-[calc(7vw)] grid md:grid-cols-2 gap-3`}>
                      <div className={'relative'}>
                          <Image src={sporton} alt="Sporton project" className="image"/>
                          <div className="block absolute transition top-0 bottom-0 left-0 right-0 ease-linear h-full w-full hover:opacity-100 opacity-0 bg-[--portfolio]">
                              <div className="text-white p-5 w-full text-center top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                                  <span className={`text-2xl lg:text-3xl ${interTightHeader.className}`}> SportON </span> <br/><br/>
                                  <span className={'lg:text-lg'}>
                                        A startup project that enhances the sports experience by providing a platform for broad finding, simple reserving, and easy accessing of sports facilities.
                                  </span> <br/><br/>
                                  <span> <Link href={'https://sporton.online'} className={'underline decoration-1'} target={"_blank"}> Website </Link></span>
                              </div>
                          </div>
                      </div>
                      <div className={'relative'}>
                          <Image src={stepup} alt="StepUP! project" className="image"/>
                          <div className="block absolute transition top-0 bottom-0 left-0 right-0 ease-linear h-full w-full hover:opacity-100 opacity-0 bg-[--portfolio]">
                              <div className="text-white p-5 w-full text-center top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                                  <span className={`text-2xl lg:text-3xl ${interTightHeader.className}`}> StepUp </span> <br/><br/>
                                  <span className={'lg:text-lg'}>
                                      An application that connects people through sports. It tracks your performance during activity and it also allows you to meet/chat with other sport colleagues.
                                  </span> <br/><br/>
                                  <span> <Link href={'https://github.com/Bartan02/positive-health-int-team-2'} className={'underline decoration-1'} target={"_blank"}> Source code </Link></span>
                              </div>
                          </div>
                      </div>
                      <div className={'relative'}>
                          <Image src={jrcz} alt="JRCZ Temperature Monitoring Application project" className="image"/>
                          <div className="block absolute transition top-0 bottom-0 left-0 right-0 ease-linear h-full w-full hover:opacity-100 opacity-0 bg-[--portfolio]">
                              <div className="text-white p-5 w-full text-center top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                                  <span className={`text-2xl lg:text-3xl ${interTightHeader.className}`}> JRCZ Temperature Monitoring Application </span> <br/><br/>
                                  <span className={'lg:text-lg'}>
                                        An application that provides with clear visualization of room records inside Joint Research Center Zeeland building and thus helps monitor past temperatures in order to analyze and reduce energy waste.
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div className={'relative'}>
                          <Image src={oopgame} alt="OOP Educational Game" className="image"/>
                          <div className="block absolute transition top-0 bottom-0 left-0 right-0 ease-linear h-full w-full hover:opacity-100 opacity-0 bg-[--portfolio]">
                              <div className="text-white p-5 w-full text-center top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                                  <span className={`text-2xl lg:text-3xl ${interTightHeader.className}`}> OOP Educational Game </span> <br/><br/>
                                  <span className={'lg:text-lg'}>
                                        An educational game for kids, aged around 8-10, about identity theft issue and preventing from it.
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}
