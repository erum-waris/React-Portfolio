// import React from "react";

// const ContactSection = () => {
//   return (
//     <section>
//       <div className="container mx-auto px-4 lg:px-8 py-8">
//         <h2 className="lg:text-5xl md:text-5xl text-4xl font-bold font-serif text-center mb-12 text-white">
//           Contact{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
//             Me
//           </span>
//         </h2>
//         <form className="transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_6px_rgba(182,27,79)] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent rounded-lg border-2 border-pink-600 border-r-2">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//             {/* For left side */}
//             <div className="flex flex-col space-y-4 md:space-y-6">
//               {/* For full name */}
//               <div>
//                 <label
//                   htmlFor="fullName"
//                   className="block text-sm  font-medium text-white md:text-xl mb-1"
//                 >
//                   FullName
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   placeholder="Full Name"
//                   className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 text-white mt-1 p-2 sm:p-3 border-2 border-purple-500 bg-transparent rounded w-full focus:bg-white focus:text-black"
//                 />
//               </div>
//                {/* For Father Name */}
//                <div>
//                 <label
//                   htmlFor="Father Name "
//                   className="block text-sm font-medium text-white md:text-xl mb-1"
//                 >
//                   Father Name 
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   placeholder="Subject"
//                   className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 text-white mt-1 p-2 sm:p-3 rounded border-2 border-purple-500 bg-transparent w-full focus:bg-white focus:text-black"
//                 />
//               </div>

//               {/* For email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-white md:text-xl mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   id="email"
//                   placeholder="Email"
//                   className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 text-white mt-1 p-2 sm:p-3 border-2 border-purple-500 bg-transparent rounded w-full focus:bg-white focus:text-black"
//                 />
//               </div>

//               {/* For phone number */}
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-white md:text-xl mb-1"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   id="phone"
//                   placeholder="Phone Number"
//                   className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 text-white mt-1 p-2 sm:p-3 border-2 border-purple-500 bg-transparent rounded w-full focus:bg-white focus:text-black"
//                 />
//               </div>


//             </div>

//             {/* For right side */}
//             <div className="flex flex-col space-y-4 md:space-y-6">
//             <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-white md:text-xl mb-1"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   placeholder="Message"
//                   className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105  mt-1 p-2 sm:p-3 h-32 sm:h-48  rounded border-2 border-purple-500 bg-transparent w-full
//                   resize-none text-white focus:bg-white focus:text-black"
//                 />
//               </div>
//               <button type="submit" 
//               className="transition-all transform duration-1000 ease-in-out shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 w-full p-2 sm:p-3 text-white rounded bg-purple-700 hover:bg-pink-600 md:text-xl "
//               >Send Message</button>
//             </div>

//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; 
const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(
      "service_eo4083j",
      "template_et8d3k6",
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Environment Variable
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

return (
  <section>
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <h2 className="lg:text-5xl md:text-5xl text-4xl font-bold font-serif text-center mb-12 text-white">
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
          Me
        </span>
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_6px_rgba(182,27,79)] max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent rounded-lg border-2 border-pink-600 border-r-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Side */}
          <div className="flex flex-col space-y-4 md:space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white md:text-xl mb-1">
                FullName
              </label>
              <input
                type="text"
                id="fullName"
                name="user_name" // EmailJS Template Variable
                placeholder="Full Name"
                className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 text-white mt-1 p-2 sm:p-3 border-2 border-purple-500 bg-transparent rounded w-full focus:bg-white focus:text-black"
                required
              />
            </div>

            {/* Father Name */}
            <div>
              <label htmlFor="fatherName" className="block text-sm font-medium text-white md:text-xl mb-1">
                Father Name
              </label>
              <input
                type="text"
                id="fatherName"
                name="father_name" // EmailJS Template Variable
                placeholder="Father Name"
                className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 text-white mt-1 p-2 sm:p-3 rounded border-2 border-purple-500 bg-transparent w-full focus:bg-white focus:text-black"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white md:text-xl mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email" // EmailJS Template Variable
                placeholder="Email"
                className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 text-white mt-1 p-2 sm:p-3 border-2 border-purple-500 bg-transparent rounded w-full focus:bg-white focus:text-black"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white md:text-xl mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone_number" // EmailJS Template Variable
                placeholder="Phone Number"
                className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 text-white mt-1 p-2 sm:p-3 border-2 border-purple-500 bg-transparent rounded w-full focus:bg-white focus:text-black"
                required
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col space-y-4 md:space-y-6">
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white md:text-xl mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message" // EmailJS Template Variable
                placeholder="Message"
                className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 mt-1 p-2 sm:p-3 h-32 sm:h-48 rounded border-2 border-purple-500 bg-transparent w-full resize-none text-white focus:bg-white focus:text-black"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="transition-all transform duration-1000 ease-in-out shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 w-full p-2 sm:p-3 text-white rounded bg-purple-700 hover:bg-pink-600 md:text-xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
);
};

export default ContactSection;