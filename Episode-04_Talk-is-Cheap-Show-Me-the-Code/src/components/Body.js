import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [mainData, setMainData] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  //console.log("Body component rendered.");

  useEffect(() => {
    console.log("Body UseEffect");
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

  //conditional rendering
  if (dataArr.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={textSearch}
            onChange={(e) => {
              setTextSearch(e.target.value);
            }}
          />
          <button onClick={searchHandler}>Search</button>
        </div>
        <div>
          <button
            className="filter-btn"
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
        </div>
      </div>

      <div className="res-container">
        {dataArr.map((resData) => (
          <Link to={"/restaurants/" + resData.info.id} key={resData.info.id}>
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
