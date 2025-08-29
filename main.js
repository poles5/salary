const mbo = document.getElementById("MBO")
const di = document.getElementById("DI")
const salary_html = document.getElementById("salary")
const button = document.getElementById("button")
let salary_num = 0

// Универсальная функция анимации числа
function animateValue(element, start, end, duration, prefix = "", suffix = "") {
    let startTimestamp = null
    let lastJackpot = 0

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const value = Math.floor(progress * (end - start) + start)
        element.innerHTML = `${prefix}${value.toLocaleString("ru-RU")} ${suffix}`

        // 🎰 Проверка на джекпот (каждые 30000 ₽)
        

        if (progress < 1) {
            requestAnimationFrame(step)
        }
    }
    requestAnimationFrame(step)
}


button.addEventListener("click", () => {
    if (di.value.length > 0) {
        di.style.borderColor = 'green'
        salary_num += (parseInt(di.value) / 100) * 91350

        if (mbo.value.length > 0) {
            mbo.style.borderColor = 'green'
            salary_num += (parseInt(mbo.value) / 100) * 45675 + 45675

            // Очищаем блок и перезапускаем анимацию появления
            salary_html.classList.remove("animate-salary")
            void salary_html.offsetWidth
            salary_html.classList.add("animate-salary")

            // Создаем три отдельных span для анимации чисел
            salary_html.innerHTML = `
                <div id="total"></div>
                <div id="oklad"></div>
                <div id="zp10"></div>
            `

            const totalDiv = document.getElementById("total")
            const okladDiv = document.getElementById("oklad")
            const zp10Div = document.getElementById("zp10")
            // 🚀 Запускаем три независимые анимации
            animateValue(totalDiv, 0, salary_num, 6500, "Ваша зарплата: ", "₽")
            animateValue(okladDiv, 0, 22500, 6500, "Оклад 25 числа: ", "₽")
            animateValue(zp10Div, 0, salary_num - 22500, 6500, "Зарплата 10 числа: ", "₽")

            salary_num = 0
        } else {
            mbo.style.borderColor = 'red'
        }
    } else {
        di.style.borderColor = 'red'
    }
})




