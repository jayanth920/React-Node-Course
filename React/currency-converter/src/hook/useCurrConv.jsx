import {useEffect, useState} from "react"

function useCurrencyInfo(frm,to){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_YSFfPGmOB86wFIwYzRCN5k3dJdqyWBR08nMtQ87o&currencies=${to}&base_currency=${frm}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        console.log(data);
    }, [frm,to])
    return [ data ]
}

export default useCurrencyInfo;