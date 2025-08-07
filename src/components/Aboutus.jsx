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
      text: "I joined to learn about intraday trading, but this course opened my eyes to many other profitable ways. It’s more than just a course; it’s a system!",
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
      text: "I joined to learn about intraday trading, but this course opened my eyes to many other profitable ways. It’s more than just a course; it’s a system!",
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
      text: "I joined to learn about intraday trading, but this course opened my eyes to many other profitable ways. It’s more than just a course; it’s a system!",
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
    <div>
      <h2 className="uppercase text-[28px] sm:text-[36px] md:text-[44px] xl:text-[48px] pt-[120px] sm:pt-[200px] xl:pt-[399px] pb-[40px] xl:pb-[81px] text-center font-[900] leading-tight text-white mb-8">
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

      <div className="space-y-2 sm:space-y-6">
        {/* Layer 1: scroll right */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-2 sm:gap-4 animate-scroll-right"
            style={{ width: "max-content" }}
          >
            {[...workImagesOne, ...workImagesOne].map((data, idx) => (
              <div
                key={idx}
                className="flex w-[460px] h-[240px] rounded-xl overflow-hidden shadow-lg font-inter"
              >
                {/* Left - Text Section */}
                <div className="bg-[#0C111F] text-white flex-1 flex items-center justify-center px-6 text-center text-[14px] leading-[22px] font-medium">
                  <p>{data.text}</p>
                </div>

                {/* Right - Image and Name Section */}
                <div className="bg-[#2F4F30] w-[180px] flex flex-col items-center justify-center gap-2 px-4 py-4 text-white">
                  <img
                    src={data.image}
                    alt="Neha Sharma"
                    className="w-[121px] h-[121px] rounded-full object-cover"
                  />
                  <div className="text-center mt-2">
                    <p className="text-[16px] font-bold leading-[20px]">
                      {data.name}
                    </p>
                    <p className="text-[10px] text-[#CFCFCF] mt-1">
                      {data.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Layer 2: scroll left */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-2 sm:gap-4 animate-scroll-left"
            style={{ width: "max-content" }}
          >
            {[...workImagesTwo, ...workImagesTwo].map((data, idx) => (
              <div
                key={idx}
                className="flex w-[460px] h-[240px] rounded-xl overflow-hidden shadow-lg font-inter"
              >
                {/* Left - Text Section */}
                <div className="bg-[#0C111F] text-white flex-1 flex items-center justify-center px-6 text-center text-[14px] leading-[22px] font-medium">
                  <p>{data.text}</p>
                </div>

                {/* Right - Image and Name Section */}
                <div className="bg-[#2F4F30] w-[180px] flex flex-col items-center justify-center gap-2 px-4 py-4 text-white">
                  <img
                    src={data.image}
                    alt="Neha Sharma"
                    className="w-[121px] h-[121px] rounded-full object-cover"
                  />
                  <div className="text-center mt-2">
                    <p className="text-[16px] font-bold leading-[20px]">
                      {data.name}
                    </p>
                    <p className="text-[10px] text-[#CFCFCF] mt-1">
                      {data.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Layer 3: scroll right (slower) */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-2 sm:gap-4 animate-scroll-right-slow"
            style={{ width: "max-content" }}
          >
            {repeatImages(workImagesThree).map((data, idx) => (
              <div
                key={idx}
                className="flex w-[460px] h-[240px] rounded-xl overflow-hidden shadow-lg font-inter"
              >
                {/* Left - Text Section */}
                <div className="bg-[#0C111F] text-white flex-1 flex items-center justify-center px-6 text-center text-[14px] leading-[22px] font-medium">
                  <p>{data.text}</p>
                </div>

                {/* Right - Image and Name Section */}
                <div className="bg-[#2F4F30] w-[180px] flex flex-col items-center justify-center gap-2 px-4 py-4 text-white">
                  <img
                    src={data.image}
                    alt="Neha Sharma"
                    className="w-[121px] h-[121px] rounded-full object-cover"
                  />
                  <div className="text-center mt-2">
                    <p className="text-[16px] font-bold leading-[20px]">
                      {data.name}
                    </p>
                    <p className="text-[10px] text-[#CFCFCF] mt-1">
                      {data.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
