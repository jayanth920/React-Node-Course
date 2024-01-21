import "./box.css"


function inputBox({ 
  label, 
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectCurrency = "usd",
  amountDisable = "false",
  currencyDisable = "false"
 }) {
  return (
    <div className="box" >
      <label>{label}</label>
      <input 
      onChange={(e) => onAmountChange && onAmountChange(e.target.value)} 
      disabled={amountDisable}
      value={amount} 
      ></input>

      <selection
      onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
      disabled={currencyDisable}
      value={selectCurrency}
      >
      
      {currencyOptions.map((currencyOption, index)=>{
        <option value={currencyOption} key={index}>{currencyOption}</option>
      })}

      </selection>
      
      </div>
  );
}
export default inputBox