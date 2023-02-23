import axios from "axios";
import { useState } from "react";
import { Button, Container, IconButton, Typography } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GrainIcon from '@mui/icons-material/Grain';
import CloudIcon from '@mui/icons-material/Cloud';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import { width } from "@mui/system";
import classes from './weatherStyles.css'
import RecipeReviewCard from "./RecipeReviewCard";

// 'http://api.weatherapi.com/v1/current.json?key=89e495f27f4b4ddca1044654231502&q=Tashkent&aqi=yes'
function WeatherApp() {

  const [gradus,setGradus] = useState('');
  const [error,setError] = useState('')
  const [weather1,setWeather1] = useState('')
  const [region,setRegion] = useState('')
  const [country,setCountry] = useState('')
  const [time,setTime] = useState('')
  const someFunc = ()=>{
    axios
    .get('http://api.weatherapi.com/v1/current.json?key=89e495f27f4b4ddca1044654231502&q=Tashkent&aqi=yes')
    .then( (response)=>{
    setGradus(response.data.current.temp_c)
    setWeather1(response.data.current.condition.text)
    setCountry(response.data.location.country);
    setRegion(response.data.location.region);
    setTime(response.data.location.localtime);
    console.log(response.data.current.condition.text);
    })
    .catch( (reject)=>{
      setError('Please check and reload')
    })
    }
    
    window.addEventListener('load',()=>{
      someFunc()
    })



  return (
      <div style={{margin:'auto',width:'400px',marginTop:'15%'}}>
        <RecipeReviewCard
        time={ <Typography sx={{fontFamily:'fantasy',fontSize:'35px'}}>{country}</Typography> }
        region={<Typography sx={{fontFamily:'fantasy',fontSize:'35px'}}>{region}</Typography>}
        country={<Typography sx={{fontFamily:'fantasy',fontSize:'35px'}}>{time}</Typography>}
         weather={
          weather1 === 'Rain' ?  
          <ThunderstormIcon sx={{width:'250px',height:'300px',color:'darkblue'}}></ThunderstormIcon> : <WbSunnyIcon sx={{width:'250px',height:'300px',color:'#e8e041'}}></WbSunnyIcon>
        } 
         text={weather1 ? 'Rain' : 'Sunny'}

         number={ <div style={{position:'relative'}}>
         { gradus ? <Typography sx={{fontFamily:'fantasy',fontSize:'35px'}}>{gradus + ' C'}</Typography> : null}
         { error ? <Typography sx={{fontFamily:'fantasy',fontSize:'15px',paddingTop:'15px',paddingRight:'10px'}}>{error}</Typography> : null}
       </div>  }
         refresh={<IconButton onClick={someFunc}>
         <ReplayCircleFilledIcon sx={{color:'black'}}></ReplayCircleFilledIcon>
       </IconButton>}
         />
        <div>
        </div>
        
        
      </div>
  );
}

export default WeatherApp;
