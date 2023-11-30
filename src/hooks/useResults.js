import { useEffect, useState } from "react";
import cookbook from "../api/cookbook";

export default (term) => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
        console.log('1st run');
        try {
            const response = await cookbook.get(`/${term}`);
            setResults(response.data);
        
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        searchApi();
    }, []);

    return [results, errorMessage];
};