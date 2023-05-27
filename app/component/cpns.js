import '../css/div_style.css'
import '../css/title_style.less'
import '../css/bg_style.css'

import bg03 from '../img/body_bg03.png'

const divE1 = document.createElement("div")
divE1.textContent = "Hello World"
divE1.classList.add("content")
document.body.append(divE1)

const titleE1 = document.createElement("div")
titleE1.textContent = "Hello less"
titleE1.classList.add("title")
document.body.append(titleE1)

const imgE1 = document.createElement("img")
imgE1.src = bg03
document.body.append(imgE1)

const divBgE1 = document.createElement("div")
divBgE1.classList.add("img-bg")
document.body.append(divBgE1)