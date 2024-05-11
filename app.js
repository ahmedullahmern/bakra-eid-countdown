
var seconds = document.getElementById("seconds")
var minutes = document.getElementById("minutes")
var hours = document.getElementById("hours")
var days = document.getElementById("days")
var months = document.getElementById("months")
var years = document.getElementById("years")


setInterval(function () {
    var now = new Date()
    var bakra = new Date("06/16/2024")
    var milisecond = now.getTime()
    var bakramilleseconds = bakra.getTime()
    var diff = bakramilleseconds - milisecond
    seconds.innerHTML =  "seconds : "+ Math.round(diff / 1000)
    minutes.innerHTML =  "minutes : "+ Math.round(diff / 1000 / 60)
    hours.innerHTML =  "horus : "+ Math.round(diff / 1000 / 60 / 60)
    days.innerHTML =  "days : "+ Math.round(diff / 1000 / 60 / 60 / 24)
    months.innerHTML =  "months : "+ Math.round(diff / 1000 / 60 / 60 / 24 / 30)
    years.innerHTML =  "yesrs : "+ Math.round(diff / 1000 / 60 / 60 / 24 / 30 / 12)

}, 1000,)


















