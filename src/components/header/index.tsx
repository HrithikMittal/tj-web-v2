import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  console.log("Header");
  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <div>
          <Link href="/">
            <Image
              src={"https://www.techjockey.com/assets/V2/img/logo.svg"}
              alt="tech jockey logo"
              width={150}
              height={200}
            />
          </Link>
        </div>
        <div className="flex">
          <button className="flex bg-green-700 text-white rounded-full px-5 py-2 items-center">
            <Image
              alt="Get Free Advice"
              src="https://www.techjockey.com/assets/V2/img/call_icon_inactive.svg"
              width={20}
              height={20}
              className="hover:hidden"
            />
            <Image
              alt="Get Free Advice"
              src="https://www.techjockey.com/assets/V2/img/call_icon_active.svg"
              width={20}
              height={20}
              className="hidden hover:block"
            />
            <span className="ml-2"> Get Free Advice</span>
          </button>
          <button className="flex text-gray-900 rounded-full px-5 py-2 items-center">
            <Image
              alt="Get Free Advice"
              src="https://www.techjockey.com/assets/V2/img/icon_seller.svg"
              width={20}
              height={20}
            />
            <span className="ml-2 font-semibold"> Become a Seller</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
