import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch =()=>{
    const [data, setDate] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '6cea82154dmshc756303655c2ac3p1b99d6jsn7150a2b9bf82',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }

}

export default useFetch