

import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return(
        <div className=" sticky  flex justify-center font-serif text-md   border-2 border-inherit items-center  ">
            <p className="text-black">Made by Naveen Kannan &nbsp;</p>
            <a
            className="hover:bg-red-900 rounded-full"
            href="https://github.com/naveenkkannan/todow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />{" "}
          </a>
            </div>
    )
}

{/* <div className="flex justify-center items-center">
Made by Naveen Kannan &nbsp;
<a
  className="hover:bg-red-900 rounded-full"
  href="https://github.com/naveenkkannan/Recipe-App"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub size={30} />{" "}
</a>
</div> */}