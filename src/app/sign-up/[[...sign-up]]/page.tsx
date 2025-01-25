import {  SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row items-center h-[120vh] lg:h-[130vh] px-6 lg:px-12 py-[100px] gap-8 lg:gap-24">
      {/* Left Section: Image */}
      <div className="flex-shrink-0 hidden lg:block w-1/2">
        <Image
          alt="mobile"
          src="https://s3-alpha-sig.figma.com/img/7843/84ee/37569bf147f74d2ca44831a4a6ef3ee5?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-YpwT8BMHj53wBElCy5CBYVUOs1fC7aUITxPEmqVmYis9hq5MaiMLA44IIk4kMejWqW7HuMSGbBHBXRqfVXOyVfhWpCKc-LSury~qCDOm3eV6Ct28siNfQ-r~GsI21rg5UZvasFCwVSxN99nCrMKOuaxhd4-N8zNHryFklT5mn~1rOouQ4EbBHFKlQ~gpos~VuPo95PmgtwWmcbKOHn-kZB2EHIqJR666Hqqm0V0C7fZbpKHjbDjDWORIfr5qOMG1~p9IchcjYgrKnb2eDKMSLPRW5qJyVRfwbplWO3Jf3qgxRUCG-66FDG5GfJewNaAtytseDxibri0Ro9RXvg6g__"
          height={506}
          width={500}
          className=" h-auto object-contain"
        />
      </div>
      <SignUp />
    </div>
  );
}
