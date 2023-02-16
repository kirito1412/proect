const form=document.querySelector(".change-location")
const details=document.querySelector(".details")
const card=document.querySelector(".card")
const time =document.querySelector('img.time')
const icon=document.querySelector(".icon img")

const updataUI=(data)=>{
    const cityInfo= data.cityInfo
    const WeatherInfo=data.WeatherCondition 
    const cityName=`<h5 class="my-3">${cityInfo.LocalizedName}</h5>`
    const WeatherCondition=`<div class="my-3">${WeatherInfo.WeatherText}</div>`
    const temp=`
                <div class="display-4 my-4">
                    <span>${WeatherInfo.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>`
    details.innerHTML=cityName+WeatherCondition+temp

    const src= (WeatherInfo.IsDayTime)?time.src='/img/day.svg':time.src='/img/night.svg'
    time.src=src
    icon.src=`/img/icons/${WeatherInfo.WeatherIcon}.svg`

    if(card.classList.contains('d-none'))
     {
        card.classList.remove('d-none')
     }
}

const info=async (cityName)=>{
    const cityInfo= await getCity(cityName)
    const WeatherCondition=await CurrentCondition(cityInfo.Key)    
    return{
        cityInfo,
        WeatherCondition
    }
}

form.addEventListener("submit",e=>{
    e.preventDefault()
    const city =form.city.value.trim()
    form.reset()
    if(city.length>0)
        {
            info(city)
                .then((data)=>{updataUI(data)})
                .catch(err=>{console.log(err)})
        }
    //localStorage
    localStorage.setItem('city', city)
})

if(localStorage.getItem('city')!==null)
{
    info(localStorage.getItem('city'))
                .then((data)=>{updataUI(data)})
                .catch(err=>{console.log(err)})
}
// localStorage.clear()