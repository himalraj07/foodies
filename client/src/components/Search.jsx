import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaCircleArrowLeft } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(false);
  const [isMobile] = useMobile();

  useEffect(() => {
    const isSearch = location.pathname === "/search";
    setIsSearchPage(isSearch);
  }, [location]);

  const redirectToSearchPage = () => {
    navigate("/search");
  };

  return (
    <div className="w-full  min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-sky-500">
      <div>
        {isMobile && isSearchPage ? (
          <Link
            to={"/"}
            className="flex justify-center items-center h-full p-3 group-focus-within:text-sky-500"
          >
            <FaCircleArrowLeft size={22} />
          </Link>
        ) : (
          <button className="flex justify-center items-center h-full p-3 group-focus-within:text-sky-500">
            <IoSearch size={22} />
          </button>
        )}
      </div>

      <div className="w-full h-full">
        {!isSearchPage ? (
          // not in search page
          <div
            onClick={redirectToSearchPage}
            className="w-full h-full flex items-center"
          >
            <TypeAnimation
              sequence={[
                'Search "Biryani"',
                1000,
                'Search "Burgers"',
                1000,
                'Search "North Indian"',
                1000,
                'Search "Noodles"',
                1000,
                'Search "Momos"',
                1000,
                'Search "Ice Cream"',
                1000,
                'Search "Chinese"',
                1000,
                'Search "Rolls"',
                1000,
                'Search "Cakes"',
                1000,
                'Search "Paratha"',
                1000,
                'Search "Pizza"',
                1000,
                'Search "Sandwich"',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        ) : (
          // when i was in search page
          <div className="w-full h-full">
            <input
              type="text"
              placeholder="Search for food items..."
              autoFocus
              className="bg-transparent w-full h-full outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
