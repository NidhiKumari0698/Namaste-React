import RestaurantCard, { promotedRestaurantCard } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [mainData, setMainData] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const PromotedRestaurantCard = promotedRestaurantCard(RestaurantCard);
  //console.log("Body component rendered.");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resultSet = await response.json();
    //console.log('resultSet::::',resultSet.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    const data =
      resultSet?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants;
    setDataArr(data);
    setMainData(data);
  };

  const searchHandler = () => {
    //console.log("textSearch::::", textSearch);
    //console.log("mainData::::", mainData);
    const filterData = mainData.filter((data) =>
      data.info.name.toLowerCase().includes(textSearch.toLowerCase())
    );
    //console.log("filterData::::", filterData);

    setDataArr(filterData);
  };

  const { setUserName } = useContext(UserContext);

  //conditional rendering
  if (dataArr.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="flex flex-col">
      <div className="bg-yellow-500 flex gap-x-2 justify-center items-center p-2 m-x-2">
        <div className="search-container">
          <input
            type="text"
            className="border border-solid border-black mr-2 rounded p-2"
            placeholder="Type here..."
            value={textSearch}
            onChange={(e) => {
              setTextSearch(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 rounded"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-4 py-2 bg-green-100 rounded"
          onClick={() => {
            //console.log("button clicked!");
            const filterData = dataArr.filter(
              (resData) => resData?.info.avgRating >= 4.5
            );
            //console.log("filterData::", filterData, filterData.length);
            setDataArr(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2 m-2"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {dataArr.map((resData) => {
          return (
            <Link to={"/restaurants/" + resData.info.id} key={resData.info.id}>
              {resData.info.avgRating >= 4.5 ? (
                <PromotedRestaurantCard resData={resData} />
              ) : (
                <RestaurantCard resData={resData} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
