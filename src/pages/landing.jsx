/*import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only URL Shortener <br /> you&rsquo;ll ever need! 👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          placeholder="Enter your loooong URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
           className="h-full flex-1 py-4 px-4 border border-[#559393] focus:border-[#4a8282] outline-none"
        />
   <Button
  type="submit"
  className="h-full bg-[#559393] hover:bg-[#4a8282] text-white"
>
  Shorten!
</Button>


      </form>
      <img
        src="/banner1.jpg" // replace with 2 in small screens
        className="w-full my-11 md:px-11"
      />
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does SNAPURL works?
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
*/
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="min-h-screen bg-[#0B1C2C] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Navy-tone bubbles */}
      <div className="absolute w-20 h-20 bg-[#12293D] rounded-full top-10 left-10 opacity-30"></div>
      <div className="absolute w-32 h-32 bg-[#193750] rounded-full bottom-20 right-16 opacity-20"></div>
      <div className="absolute w-10 h-10 bg-[#102434] rounded-full bottom-10 left-24 opacity-20"></div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center mb-12">
        Shorten Your Link
      </h2>

      {/* Input Form */}
      <form
        onSubmit={handleShorten}
        className="flex flex-col sm:flex-row items-center gap-4 bg-[#12293D] p-4 rounded-xl shadow-lg w-full max-w-xl"
      >
        <Input
          type="url"
          placeholder="https://www.example.com"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="flex-1 py-4 px-4 rounded-lg bg-[#102434] text-white placeholder:text-teal-300 border-none focus:ring-2 focus:ring-teal-300"
        />
        <Button
          type="submit"
          className="px-6 py-3 bg-teal-400 text-teal-900 font-semibold rounded-lg hover:bg-teal-300 transition"
        >
          Shorten
        </Button>
      </form>

  
      <img
  src="/img1.jpg"
  alt="Decorative"
 className="mt-8 w-20 h-18 object-contain mx-auto"
/>


      {/* FAQ Section */}
     <Accordion type="multiple" collapsible className="w-full md:px-11 mt-20">
  <AccordionItem value="item-1">
    <AccordionTrigger>
      How does SNAPURL works?
    </AccordionTrigger>
    <AccordionContent>
      When you enter a long URL, our system generates a shorter version of
      that URL. This shortened URL redirects to the original long URL when
      accessed.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>
      Do I need an account to use the app?
    </AccordionTrigger>
    <AccordionContent>
      Yes. Creating an account allows you to manage your URLs, view
      analytics, and customize your short URLs.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>
      What analytics are available for my shortened URLs?
    </AccordionTrigger>
    <AccordionContent>
      You can view the number of clicks, geolocation data of the clicks
      and device types (mobile/desktop) for each of your shortened URLs.
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  );
};

export default LandingPage;
