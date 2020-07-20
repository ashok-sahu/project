import React,{useEffect,useState} from 'react'
import Axios from "axios";


const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await Axios.get("/api/attendance");
        setProducts(data);
      };
      fetchData();
    }, []);
    console.log(products);
    return (
        <div>
            ht
        </div>
    )
}

export default Dashboard
