import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import ResentPost from './ResentPost';

const Category = ({fetchData, recentBlog}) => {
    return (
        <div className="w-full h-auto bg-white py-8 px-4 rounded-lg">
        {/* <div className="w-full">
          <form className="form-input">
            <input onChange={(e)=> {
              const value = e.target.value;
              if(value.length >= 3){
                fetchData(value);
              }
            }} className="input-cls" type="text" name="" placeholder="Search..." />
            <button type="submit" className="btn-class">
              <SearchIcon classNameName="text-gray" />
            </button>
          </form>
        </div> */}
  
    
  
        {/* Recent post */}
        <div className="mt-8">
          <p className="lg:text-2xl md:text-xl text-lg lg:mt-8 mt-4 font-medium">
            Recent Posts
          </p>
        

  
          {/* {
            
            recentBlog?.data?.map((item, index) => 
             <>
               <ResentPost key={index} item={item}/>
             </>
            )
          } */}

          <ResentPost/>


        </div>
      </div>
    );
};

export default Category;