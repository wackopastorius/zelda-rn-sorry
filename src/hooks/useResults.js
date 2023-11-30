import { useEffect, useState } from "react";
import cookbook from "../api/cookbook";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
        try {
            const response = await cookbook.get("/vegrecipes");
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