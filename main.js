const mbo = document.getElementById("MBO")
const di = document.getElementById("DI")
const salary_html = document.getElementById("salary")
const button = document.getElementById("button")
let salary_num = 0
button.addEventListener("click" , () => {
    if(di.value.length > 0){
        di.style.borderColor = 'green'
        salary_num += (parseInt(di.value) / 100) * 98000
        if(mbo.value.length > 0){
            mbo.style.borderColor = 'green'
            salary_num += (parseInt(mbo.value) / 100) * 45000 + 45000
            salary_html.innerHTML = `Ваша зарплата: ${salary_num} ₽ <br/>
            \n Оклад 25 числа: 22500 ₽ <br/>
            Зарплата 10 числа: ${salary_num - 22500} ₽`
            salary_num = 0
            console.log(salary_num);
            
        }else{
        mbo.style.borderColor = 'red'

        }
    }else{
        di.style.borderColor = 'red'
    }
})