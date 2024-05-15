import React, { useEffect, useState } from 'react';
import "./App.css";
import axios from 'axios';
function Map() {
   const [search, setSearch] = useState('');
   const [myData, setData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);

   const handleChange = (e) => {
      setSearch(e.target.value);
   };

   useEffect(() => {
       axios.get("http://127.0.0.1:8000/getUsers")
       .then((response)=>{
         setData(response.data);
         setFilteredData(response.data);
         console.log(response);

       },[])
      

      //  const fetchUsers = async () => {
      //     try {
            
      //         const response = axios.get('http://127.0.0.1:8000/getUsers');
      //         const data = await response.json();
      //         setData(data);
      //       setFilteredData(data); // Initially set filteredData to all data
      //       console.log(data);
      //     } catch (error) {
      //       console.log(error);
      //     }
      //  };

      //  fetchUsers();
   }, []);

   useEffect(() => {
      // Filter myData based on search term
      const filtered = myData.filter((user) =>{
        return( user.name.toLowerCase().includes(search.toLowerCase())||
        user.location.toLowerCase().includes(search.toLowerCase()))
      }
        

      );
      setFilteredData(filtered);
      console.log(filtered);
   }, [search, myData]);


   return (
      <div className='main_head'>
         <div className='head'>
           <h2 >Company data</h2>
            <input type="text" onChange={handleChange} placeholder='search...' />
         </div>

         <table>
            <thead>
               <tr>
                 
                  <th>Name</th>
                  <th>Location</th>
                  <th>Founded_year</th>
                  <th>alexa_ranking</th>
                  <th>website_url</th>
                  <th>Revenue</th>
               </tr>
            </thead>
            <tbody>
               {filteredData.map((val, index) => (
                  <tr key={index}>
                 
                     <td>{val.name}</td>
                     <td>{val.location}</td>
                     <td>{val.founded_year}</td> {/* Assuming 'address' is an object containing 'city' */}
                     <td>{val.alexa_ranking}</td>
                     <td>{val.website_url}</td>
                     <td>{val.Revenue}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default Map;
