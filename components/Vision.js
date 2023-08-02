import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

function Vision() {
  return (
    <div>
      <div className="bg-no-repeat bg-center bg-cover lg:w-full lg:h-[835px] md:h-[800px] w-full h-[398px] blur-  bg-[url('../public/background2.jpeg')]">
        <div className="ml-10 mr-10 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 ">
          <Navbar />
        </div>
        <div className="flex flex-col items-center w-full lg:mb-[80px] mt-32">
          {/* <p className="text-[14px] lg:text-[#0479CE] md:text-[#0479CE] text-white bg-[#FB491D] md:bg-transparent lg:p-0 md:p-0 p-3 rounded-3xl lg:bg-transparent font-semibold text-center font-jost lg:w-[444px] md:w-[400px] w-[262px] uppercase lg:mb-0 md:mb-0 mb-2 mt-40">
            Welcome to Heartfulness International Sports Center
          </p> */}
          <p className=" hidden md:block text-[#0479CE] lg:mb-0 md:mb-0 mb-2 mt-50">
            Welcome to Heartfulness International Sports Center (HISC)
          </p>
          <div className="flex flex-col items-center w-[315px] h-[474px] lg:bg-transparent md:bg-transparent bg-blue-50 rounded-[40px]">
            <p className=" md:hidden text-[#0479CE] text-base mt-8 mb-10 text-center font-bold w-[60vw]">
              Welcome to Heartfulness International Sports Center (HISC)
            </p>
            <h1 className="hidden  md:text-[35px]  sm:leading-[40px] lg:block md:block lg:text-[40px] text-[30px] text-center lg:w-[718px] md:w-[600px] font-700 leading-[40px] uppercase w-[262px] lg:mt-[-90px] md:mt-[-90px] text-sblack scale-y-150">
              Empowering Youth through<br></br>
              Sports Excellence
            </h1>
            <h1 className="lg  md:text-[35px]  sm:leading-[40px]:hidden md:hidden lg:text-[40px]  text-[25px] text-center lg:w-[718px]  font-700 leading-[30px] uppercase w-[262px] scale-y-150 text-sblack">
              <span className="whitespace-nowrap ">Empowering Youth</span>
              <span> through Sports</span> Excellence
            </h1>

            <p className="mt-8 font-roboto lg:text-[18px] md:text-[18px] text-[14px] lg:w-[960px] md:w-[600px] w-[283px] lg:mt-20 md:mt-3  text-center text-black">
              At the Heartfulness Institute, we are committed to fostering
              holistic well-being and empowering individuals to tap into the
              infinite potential of their hearts. Through the Heartfulness
              International Sports Center (HISC), we impact thousands of
              children and youth, helping them connect with their hearts'
              potential through sports.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col items-center rounded-3xl justify-center lg:mt-[-130px] md:mt-[-70px] mt-7  gap-4 lg:mb-16 md:mb-14">
          <div className="lg:w-[502px] lg:h-[249px]  relative  w-[315px] h-[264px] border-none rounded-xl overflow-hidden">
            <Image
              className="object-cover  lg:w-[502px] lg:h-[249px] md:w-[315px] md:h-[265px] w-[315px] h-[264px] lg:rounded-none md:rounded-none rounded-[40px] lg:blur-none md:blur-none blur-sm"
              src="/images/vision.png"
              width={315}
              height={264}
            />
            <h1 className=" scale-y-150 text-center lg:p-0 p-2  lg:relative lg:bottom-[140px]  lg:text-center relative bottom-[260px]  text-[30px]  font-bold font-bison lg:text-[40px] text-[#FB491D]">
              OUR VISION
            </h1>
            <p className="lg:hidden md:hidden absolute inset-0 bg-blur left-5 top-14 w-[269px] h-[160px] text-white text-center  text-14 lg:text-18">
              HISC was established in 2020 with guidance from renowned sports
              icons like Pullela Gopichand and P. V. Sindhu. We have partnered
              with esteemed organizations including the Ministry of Sports
              (Government of India), Khelo India, FIT India, and the Pullela
              Gopichand Badminton Academy.
            </p>
          </div>

          <div className="lg:w-[502px] lg:h-[249px] relative w-[316px] h-[265px] border-none overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5">
            <Image
              className="object-cover lg:w-[502px] lg:h-[249px] md:w-[315px] md:h-[265px] lg:rounded-none md:rounded-none rounded-[40px] w-[315px] h-[264px] lg:blur-none md:blur-none blur-sm"
              src="/images/origin.png"
              width={315}
              height={264}
            />
            <h1 className=" scale-y-150 text-center lg:p-0 p-2 lg:relative lg:bottom-[140px] lg:text-center relative bottom-[260px]  text-[30px]  font-bold font-bison lg:text-[40px] text-[#FB491D]">
              OUR ORIGINS
            </h1>
            <p className="lg:hidden md:hidden absolute inset-0 bg-blur left-5 top-14 w-[269px] h-[160px] text-white text-center text-[14px]  lg:text-18">
              HISC was established in 2020 with guidance from renowned sports
              icons like Pullela Gopichand and P. V. Sindhu. We have partnered
              with esteemed organizations including the Ministry of Sports
              (Government of India), Khelo India, FIT India, and the Pullela
              Gopichand Badminton Academy.
            </p>
          </div>
        </div>

        <div className="w-full lg:h-[488px] lg:mt-[-150px] md:mt-[-140px] mt-[-120px] md:h-[588px]  h-[790px] border-2 flex flex-col items-center justify-center lg:bg-[#0479CE] bg-[#FB491D]">
          <h1 className="sm:text-[40px]  sm:leading-[40px] text-center leading-[30px] font-bison md:w-full w-[300px] lg:mb-0 md:mt-[100px] mt-[150px] text-[30px] font-700 uppercase text-white scale-y-150  md:text-[35px] lg:text-[40px]">
            Inauguration and Location
          </h1>
          <p className="text-center lg:w-[70vw]  w-[315px] md:w-[500px] font-poppins text-[16px]lg:p-0  text-white mt-10 text-14 lg:text-18">
            HISC was inaugurated on 26th February 2023 at Kanha Shanti Vanam, a
            serene location known for holistic well-being and home to the
            world's largest meditation center. The inauguration ceremony was
            graced by the presence of Shri Shri Anurag Thakur - Union Minister
            for Information & Broadcasting and Youth Affairs & Sports,
            Government of India; Shri Srinivas Goud - Hon'ble Minister of
            Prohibition & Excise, Sports & Youth Services, Tourism & Culture and
            Archaeology of Telangana; Shri Pullela Gopichand - ace Indian
            Badminton Coach, and Shri Kamlesh Patel ‘Daaji’ – Guide of
            Heartfulness Meditation Worldwide and President of Shri Ram Chandra
            Mission.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision