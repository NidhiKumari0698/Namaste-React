import MOCK_DATA from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
    let [dataArr, setDataArr] = useState(MOCK_DATA);
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                console.log('button clicked!');
                const filterData = dataArr.filter((resData)=>resData?.info.avgRating>=4.5);
                console.log('filterData::',filterData,filterData.length);
                setDataArr(filterData);
                
            }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {dataArr.map((resData) => (
            <RestaurantCard key={resData.info.id} resData={resData} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;