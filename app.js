const weather = require('./weather');
const location = require('./location')
const city = process.argv[2];
if(city){
weather(city, (error,{body} = {})=>{
    if(error){
       return console.log(error);
    }
    else{

        console.log("Weather Forecast of "+body.location.name+" City is")
        console.log(body.current.weather_descriptions[0]+". It is currently " +body.current.temperature +" degrees out. It feels like " +body.current.feelslike +" degrees out.")
        location(body.location.name,(error,locResponse)=>{
            if(error){
                return console.log(error)
            }

        } )
    }

})
}
else{
    console.log("Please Enter City")
}