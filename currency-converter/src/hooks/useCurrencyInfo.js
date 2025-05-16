import { useState,useEffect } from "react";
const [data,setData]=useState({});

function useCurrencyInfo(currency){
    fetch(`https://v6.exchangerate-api.com/v6/88598b1411f07aa7a5e0cd73/latest/USD`).then(res.json()).then(setData(res[currency]));
    return data;
}
export default useCurrencyInfo;