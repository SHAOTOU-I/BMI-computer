// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
document.addEventListener("DOMContentLoaded" , () =>{
    const high = document.querySelector("#bodyHeight");
    const weight = document.querySelector("#bodyWeight");
    const result = document.querySelector("#resultText");
    const  btn = document.querySelector("button");

    btn.addEventListener("click" , function (){
        let h = Number(high.value) /100;
        let w = Number(weight.value) ;
        let bmi = w / (h *h );
        result.resultText = bmi;
        console.log(h , w)
    })

})