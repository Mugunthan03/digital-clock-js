function clock()
{

let dateTime = new Date()
let h = dateTime.getHours()
let m = dateTime.getMinutes()
let s = dateTime.getSeconds()

let date = dateTime.getDate()
let day = getdayname(dateTime.getDay())
let month = getmonthname(dateTime.getMonth())
let year = dateTime.getFullYear()


document.getElementById('h').innerHTML = addzero(h)
document.getElementById('m').innerHTML = addzero(m)
document.getElementById('s').innerHTML = addzero(s)

document.getElementById('current').innerHTML = `${date} ${day} ${month} ${year}`

let am = document.getElementById('am')

if(h > 12)
{
    h = h-12
    am.innerHTML = 'pm'
}

function addzero(num)
{

    return num < 10?'0'+num : num
}

function getmonthname(currmonth)
{
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    return months[currmonth]
}

function getdayname(currday)
{
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return days[currday]
}

}

setInterval(clock,500)
