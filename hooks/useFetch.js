import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch =()=>{
    const [data, setDate] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

}

export default useFetch