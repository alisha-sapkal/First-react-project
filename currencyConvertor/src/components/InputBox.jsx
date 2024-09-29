import React from "react";

function InputBox({ label, amount, currencyOptions, selectCurrency, onCurrencyChange, onAmountChange, amountDisable }) {
    return (
        <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-800">{label}</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => onAmountChange(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded-lg"
                disabled={amountDisable}
            />
            <select
                value={selectCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InputBox;
