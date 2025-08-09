import React from "react";
import one from "../assets/reviews/globaltradingAcademy1.png";
import two from "../assets/reviews/globaltradingAcademy2.png";
import three from "../assets/reviews/globaltradingAcademy3.png";
import four from "../assets/reviews/globaltradingAcademy4.png";
import five from "../assets/reviews/globaltradingAcademy5.png";
import six from "../assets/reviews/globaltradingAcademy6.png";
import seven from "../assets/reviews/globaltradingAcademy7.png";
import eight from "../assets/reviews/globaltradingAcademy8.png";
import nine from "../assets/reviews/globaltradingAcademy9.png";
import ten from "../assets/reviews/globaltradingAcademy10.png";
import eleven from "../assets/reviews/globaltradingAcademy11.png";
import twelve from "../assets/reviews/globaltradingAcademy12.png";

function Aboutus() {
  const workImagesOne = [
    {
      image: one,
      name: "Rohit Mehra",
      role: "College Student",
      text: "Before joining this course, I had zero knowledge about trading. Now, I can confidently analyze charts and make profitable decisions. It's life-changing!",
    },
    {
      image: two,
      name: "Neha Sharma",
      role: "Working Professional",
      text: "The strategies taught are practical and easy to apply. I started seeing consistent profits within the first month itself.",
    },
    {
      image: three,
      name: "Simran Kaur",
      role: "Housewife",
      text: "I've taken multiple trading courses before, but none were this detailed and beginner-friendly. Highly recommend for anyone serious about trading.",
    },
    {
      image: four,
      name: "Aditya Khanna",
      role: "Investment Banker",
      text: "This course gave me clarity and confidence. No longer depend on tips or guesswork. The mentor is truly experienced and patient.",
    },
    {
      image: five,
      name: "Ravi Kulkarni",
      role: "Working Professional",
      text: "What I liked the most was the one-on-one mentorship and real-time market guidance. I recovered my course fee within 2 weeks of trading!",
    },
    {
      image: six,
      name: "Tanya Sethi",
      role: "Job Seeker",
      text: "As someone with a full-time job, the flexibility and recorded sessions were a blessing. The community support is also fantastic.",
    },
    {
      image: seven,
      name: "Mohammed Asif",
      role: "Working Professional",
      text: "I joined to learn about intraday trading, but this course opened my eyes to many other profitable ways. It's more than just a course; it's a system!",
    },
    {
      image: eight,
      name: "Anonymous",
      role: "",
      text: "Excellent value for money. I finally understand risk management, psychology, and strategy — all things that make or break a trader.",
    },
    {
      image: nine,
      name: "Ankita Verma",
      role: "Housewife",
      text: "This course made me confident in trading. I overcame my fear of trading and gradually started growing my capital.",
    },
    {
      image: ten,
      name: "Rahul Singh",
      role: "Working Professional",
      text: "From a complete beginner to making my first profitable trade — all in just a few weeks. Highly recommended!",
    },
    {
      image: eleven,
      name: "Sneha Rao",
      role: "Housewife",
      text: "I loved the hands-on approach. We were analyzing live charts and applying strategies from day one.",
    },
    {
      image: twelve,
      name: "Nitesh Jain",
      role: "College Student",
      text: "Earlier, I was just gambling in the market. Now, I trade with logic and confidence.",
    },
  ];

  const workImagesTwo = [
    {
      image: one,
      name: "Rohit Mehra",
      role: "College Student",
      text: "Before joining this course, I had zero knowledge about trading. Now, I can confidently analyze charts and make profitable decisions. It's life-changing!",
    },
    {
      image: two,
      name: "Neha Sharma",
      role: "Working Professional",
      text: "The strategies taught are practical and easy to apply. I started seeing consistent profits within the first month itself.",
    },
    {
      image: three,
      name: "Simran Kaur",
      role: "Housewife",
      text: "I've taken multiple trading courses before, but none were this detailed and beginner-friendly. Highly recommend for anyone serious about trading.",
    },
    {
      image: four,
      name: "Aditya Khanna",
      role: "Investment Banker",
      text: "This course gave me clarity and confidence. No longer depend on tips or guesswork. The mentor is truly experienced and patient.",
    },
    {
      image: five,
      name: "Ravi Kulkarni",
      role: "Working Professional",
      text: "What I liked the most was the one-on-one mentorship and real-time market guidance. I recovered my course fee within 2 weeks of trading!",
    },
    {
      image: six,
      name: "Tanya Sethi",
      role: "Job Seeker",
      text: "As someone with a full-time job, the flexibility and recorded sessions were a blessing. The community support is also fantastic.",
    },
    {
      image: seven,
      name: "Mohammed Asif",
      role: "Working Professional",
      text: "I joined to learn about intraday trading, but this course opened my eyes to many other profitable ways. It's more than just a course; it's a system!",
    },
    {
      image: eight,
      name: "Anonymous",
      role: "",
      text: "Excellent value for money. I finally understand risk management, psychology, and strategy — all things that make or break a trader.",
    },
    {
      image: nine,
      name: "Ankita Verma",
      role: "Housewife",
      text: "This course made me confident in trading. I overcame my fear of trading and gradually started growing my capital.",
    },
    {
      image: ten,
      name: "Rahul Singh",
      role: "Working Professional",
      text: "From a complete beginner to making my first profitable trade — all in just a few weeks. Highly recommended!",
    },
    {
      image: eleven,
      name: "Sneha Rao",
      role: "Housewife",
      text: "I loved the hands-on approach. We were analyzing live charts and applying strategies from day one.",
    },
    {
      image: twelve,
      name: "Nitesh Jain",
      role: "College Student",
      text: "Earlier, I was just gambling in the market. Now, I trade with logic and confidence.",
    },
  ];

  const workImagesThree = [
    {
      image: one,
      name: "Rohit Mehra",
      role: "College Student",
      text: "Before joining this course, I had zero knowledge about trading. Now, I can confidently analyze charts and make profitable decisions. It's life-changing!",
    },
    {
      image: two,
      name: "Neha Sharma",
      role: "Working Professional",
      text: "The strategies taught are practical and easy to apply. I started seeing consistent profits within the first month itself.",
    },
    {
      image: three,
      name: "Simran Kaur",
      role: "Housewife",
      text: "I've taken multiple trading courses before, but none were this detailed and beginner-friendly. Highly recommend for anyone serious about trading.",
    },
    {
      image: four,
      name: "Aditya Khanna",
      role: "Investment Banker",
      text: "This course gave me clarity and confidence. No longer depend on tips or guesswork. The mentor is truly experienced and patient.",
    },
    {
      image: five,
      name: "Ravi Kulkarni",
      role: "Working Professional",
      text: "What I liked the most was the one-on-one mentorship and real-time market guidance. I recovered my course fee within 2 weeks of trading!",
    },
    {
      image: six,
      name: "Tanya Sethi",
      role: "Job Seeker",
      text: "As someone with a full-time job, the flexibility and recorded sessions were a blessing. The community support is also fantastic.",
    },
    {
      image: seven,
      name: "Mohammed Asif",
      role: "Working Professional",
      text: "I joined to learn about intraday trading, but this course opened my eyes to many other profitable ways. It's more than just a course; it's a system!",
    },
    {
      image: eight,
      name: "Anonymous",
      role: "",
      text: "Excellent value for money. I finally understand risk management, psychology, and strategy — all things that make or break a trader.",
    },
    {
      image: nine,
      name: "Ankita Verma",
      role: "Housewife",
      text: "This course made me confident in trading. I overcame my fear of trading and gradually started growing my capital.",
    },
    {
      image: ten,
      name: "Rahul Singh",
      role: "Working Professional",
      text: "From a complete beginner to making my first profitable trade — all in just a few weeks. Highly recommended!",
    },
    {
      image: eleven,
      name: "Sneha Rao",
      role: "Housewife",
      text: "I loved the hands-on approach. We were analyzing live charts and applying strategies from day one.",
    },
    {
      image: twelve,
      name: "Nitesh Jain",
      role: "College Student",
      text: "Earlier, I was just gambling in the market. Now, I trade with logic and confidence.",
    },
  ];

  // Helper to repeat images for seamless scroll
  const repeatImages = (arr, times = 2) => Array(times).fill(arr).flat();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="max-w-[7xl] mx-auto">
        <h2 className="uppercase text-[20px] xs:text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] 
                       pt-[80px] sm:pt-[120px] lg:pt-[200px] xl:pt-[250px] 
                       pb-[30px] sm:pb-[40px] xl:pb-[81px] 
                       text-center font-[900] leading-tight text-white mb-4 sm:mb-8 px-2">
          our &nbsp;
          <span
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            students &nbsp;
          </span>
          can't stop <br className="block xl:hidden"/> talking
          <span
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            &nbsp; about us
          </span>
        </h2>
      </div>

      {/* Reviews Carousel */}
      <div className="space-y-2 sm:space-y-4 lg:space-y-6">
        {/* Layer 1: scroll right */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-2 sm:gap-3 lg:gap-4 animate-scroll-right"
            style={{ width: "max-content" }}
          >
            {[...workImagesOne, ...workImagesOne].map((data, idx) => (
              <div
                key={idx}
                className="flex w-[240px] sm:w-[320px] lg:w-[460px] 
                          h-[140px] sm:h-[180px] lg:h-[240px] 
                          rounded-lg sm:rounded-xl overflow-hidden shadow-lg font-inter flex-shrink-0"
              >
                {/* Left - Text Section */}
                <div className="bg-[#0C111F] text-white flex-1 flex items-center justify-center 
                               px-2 sm:px-4 lg:px-6 text-center 
                               text-[10px] sm:text-[12px] lg:text-[14px] 
                               leading-[14px] sm:leading-[18px] lg:leading-[22px] font-medium">
                  <p className="line-clamp-4 sm:line-clamp-6 lg:line-clamp-none">{data.text}</p>
                </div>

                {/* Right - Image and Name Section */}
                <div className="bg-[#2F4F30] w-[110px] sm:w-[140px] lg:w-[180px] 
                               flex flex-col items-center justify-center gap-1 sm:gap-2 
                               px-2 sm:px-3 lg:px-4 py-2 sm:py-3 lg:py-4 text-white">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[121px] lg:h-[121px] 
                              rounded-full object-cover flex-shrink-0"
                  />
                  <div className="text-center mt-1 sm:mt-2 min-h-0">
                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-bold 
                                 leading-[14px] sm:leading-[16px] lg:leading-[20px] 
                                 line-clamp-2">
                      {data.name}
                    </p>
                    {data.role && (
                      <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#CFCFCF] 
                                   mt-0.5 sm:mt-1 line-clamp-1">
                        {data.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 2: scroll left */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-2 sm:gap-3 lg:gap-4 animate-scroll-left"
            style={{ width: "max-content" }}
          >
            {[...workImagesTwo, ...workImagesTwo].map((data, idx) => (
              <div
                key={idx}
                className="flex w-[280px] sm:w-[380px] lg:w-[460px] 
                          h-[180px] sm:h-[200px] lg:h-[240px] 
                          rounded-lg sm:rounded-xl overflow-hidden shadow-lg font-inter flex-shrink-0"
              >
                {/* Left - Text Section */}
                <div className="bg-[#0C111F] text-white flex-1 flex items-center justify-center 
                               px-3 sm:px-4 lg:px-6 text-center 
                               text-[11px] sm:text-[12px] lg:text-[14px] 
                               leading-[16px] sm:leading-[18px] lg:leading-[22px] font-medium">
                  <p className="line-clamp-6 sm:line-clamp-none">{data.text}</p>
                </div>

                {/* Right - Image and Name Section */}
                <div className="bg-[#2F4F30] w-[110px] sm:w-[140px] lg:w-[180px] 
                               flex flex-col items-center justify-center gap-1 sm:gap-2 
                               px-2 sm:px-3 lg:px-4 py-2 sm:py-3 lg:py-4 text-white">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[121px] lg:h-[121px] 
                              rounded-full object-cover flex-shrink-0"
                  />
                  <div className="text-center mt-1 sm:mt-2 min-h-0">
                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-bold 
                                 leading-[14px] sm:leading-[16px] lg:leading-[20px] 
                                 line-clamp-2">
                      {data.name}
                    </p>
                    {data.role && (
                      <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#CFCFCF] 
                                   mt-0.5 sm:mt-1 line-clamp-1">
                        {data.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 3: scroll right (slower) */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-2 sm:gap-3 lg:gap-4 animate-scroll-right-slow"
            style={{ width: "max-content" }}
          >
            {repeatImages(workImagesThree).map((data, idx) => (
              <div
                key={idx}
                className="flex w-[280px] sm:w-[380px] lg:w-[460px] 
                          h-[180px] sm:h-[200px] lg:h-[240px] 
                          rounded-lg sm:rounded-xl overflow-hidden shadow-lg font-inter flex-shrink-0"
              >
                {/* Left - Text Section */}
                <div className="bg-[#0C111F] text-white flex-1 flex items-center justify-center 
                               px-3 sm:px-4 lg:px-6 text-center 
                               text-[11px] sm:text-[12px] lg:text-[14px] 
                               leading-[16px] sm:leading-[18px] lg:leading-[22px] font-medium">
                  <p className="line-clamp-6 sm:line-clamp-none">{data.text}</p>
                </div>

                {/* Right - Image and Name Section */}
                <div className="bg-[#2F4F30] w-[110px] sm:w-[140px] lg:w-[180px] 
                               flex flex-col items-center justify-center gap-1 sm:gap-2 
                               px-2 sm:px-3 lg:px-4 py-2 sm:py-3 lg:py-4 text-white">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[121px] lg:h-[121px] 
                              rounded-full object-cover flex-shrink-0"
                  />
                  <div className="text-center mt-1 sm:mt-2 min-h-0">
                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-bold 
                                 leading-[14px] sm:leading-[16px] lg:leading-[20px] 
                                 line-clamp-2">
                      {data.name}
                    </p>
                    {data.role && (
                      <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#CFCFCF] 
                                   mt-0.5 sm:mt-1 line-clamp-1">
                        {data.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add required CSS for animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        
        .animate-scroll-right-slow {
          animation: scroll-right 80s linear infinite;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 640px) {
          .animate-scroll-right {
            animation: scroll-right 80s linear infinite;
          }
          
          .animate-scroll-left {
            animation: scroll-left 60s linear infinite;
          }
          
          .animate-scroll-right-slow {
            animation: scroll-right 70s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}

export default Aboutus;