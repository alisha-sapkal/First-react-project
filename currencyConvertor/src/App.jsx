import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount * (currencyInfo[to] || 1));
        setAmount(convertedAmount);
    };

    const convert = () => {
        if (currencyInfo && currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        }
    };

    return (
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/030/468/386/large_2x/3d-blue-finance-graph-on-coin-background-symbolizes-success-in-stock-market-vertical-mobile-wallpaper-ai-generated-free-photo.jpg')", backgroundSize: 'cover' }}>
            <div className="flex justify-center items-center w-full h-full">
                <div className="w-full max-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-lg" style={{ backgroundImage: "url('https://your-image-url.com/background-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="mb-4">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                selectCurrency={from}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(newAmount) => setAmount(newAmount)}
                            />
                        </div>
                        <div className="flex justify-center my-4">
                            <button
                                type="button"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                selectCurrency={to}
                                onCurrencyChange={(currency) => setTo(currency)}
                                amountDisable
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
