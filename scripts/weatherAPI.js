const key ='RGe0rvxgu1YCKVGwzHXdZii1gmwN8Q2Q'


const getCity=async (city)=>{
    const baset ='http://dataservice.accuweather.com/locations/v1/cities/search'
    const query =`?apikey=${key}&q=${city}`
    const result=await fetch(baset+query)
    const data= await result.json()
    // console.log(data[0])
    return data[0];
}

const CurrentCondition=async(CityKey)=>{
    const baset='http://dataservice.accuweather.com/currentconditions/v1/'
    const query=`${CityKey}?apikey=${key}`
    const result=await fetch(baset+query)
    const data=await result.json()
    // console.log(data[0])
    return data[0];
}
