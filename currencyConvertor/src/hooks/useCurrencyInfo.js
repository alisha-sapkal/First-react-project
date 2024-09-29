import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.rates);
            } catch (err) {
                setError(err);
                console.error('Failed to fetch currency data:', err);
            }
        };

        fetchCurrencyData();
    }, [baseCurrency]);

    if (error) {
        return { error };
    }

    return data;
}

export default useCurrencyInfo;
