function randomizeMethod(value,obj,{isfloor=false}={}){
  let randomDigit = Math.random() * (obj.maxBoost - obj.minBoost) + obj.minBoost,
  Digit = value + (isfloor ? Math.floor(randomDigit - obj.minBoost) + obj.minBoost:randomDigit),
  output = Digit<=obj.minLimit?obj.minLimit:(Digit<=obj.maxLimit?Digit:obj.maxLimit);
  console.log(output)
  return output;
}
export default randomizeMethod;