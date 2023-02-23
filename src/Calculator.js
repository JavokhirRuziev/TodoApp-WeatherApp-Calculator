import { Container, Grid, Toolbar, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import Button1 from './Button1'
import Button4 from './Button4'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Calculator() {
  const [digits,setDigits] = useState('');
  let digit;
  
  const ref = useRef(null);
  
  const equals = ()=>{
    setDigits(eval(digits)) 
  }

  const allClear = ()=>{
    setDigits('')
  }
  
  const show = (e)=>{
    setDigits(digits+e.target.innerText)
  }

  const clear = ()=>{
    setDigits(digits.slice(0,-1))
  }

  const plus = ()=>{
    digit = digits.valueOf(digits)
    console.log(digit);
  }


  return (
    <div>
      <Box style={{width:'300px',margin:'auto',marginTop:'15%'}}>
        <Container style={{borderRadius:'5px',background:'#303336',marginBottom:'10px',width:'295px',marginLeft:'-1px'}}>
          <Toolbar>
            <Typography sx={{flexGrow:1}}></Typography>
            <Typography sx={{color:'white'}}>{digits}</Typography>
          </Toolbar>
        </Container>
      <Grid container rowSpacing={1} columnSpacing={1} style={{marginBottom:'10px'}}>
          <Grid item xs={3}><Button4 onClick={clear} style={{width:'90%'}}><ArrowRightAltIcon/></Button4></Grid>
          <Grid item xs={3}><Button ref={ref} onClick={show} style={{width:'90%'}} variant='contained' color='error'>*</Button></Grid>
          <Grid item xs={5}><Button ref={ref} onClick={allClear} style={{width:'117%',backgroundColor:'orange'}} variant='contained'>AC</Button></Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={1} style={{marginBottom:'10px'}}>
        <Grid item xs={3}><Button1 onClick={show} style={{width:'90%'}}>1</Button1></Grid>
        <Grid item xs={3}><Button1 onClick={show} style={{width:'90%'}}>2</Button1></Grid>
        <Grid item xs={3}><Button1 onClick={show} style={{width:'90%'}}>3</Button1></Grid>
        <Grid item xs={3}><Button ref={ref} onClick={show} style={{width:'90%'}} variant='contained' color='error'>-</Button></Grid>
        <Grid item xs={3}><Button1 onClick={show} style={{width:'90%'}}>4</Button1></Grid>
        <Grid item xs={3}><Button1 onClick={show} style={{width:'90%'}}>5</Button1></Grid>
        <Grid item xs={3}><Button1 onClick={show} style={{width:'90%'}}>6</Button1></Grid>
        <Grid item xs={3}><Button ref={ref} onClick={show} style={{width:'90%'}} variant='contained' color='error'>+</Button></Grid>
        <Grid item xs={3}><Button1 onClick={show} style={{width:'90%'}}>7</Button1></Grid>
        <Grid item xs={3}><Button1 onClick={show} style={{width:'90%'}}>8</Button1></Grid>
        <Grid item xs={3}><Button1 onClick={show} style={{width:'90%'}}>9</Button1></Grid>
        <Grid item xs={3}><Button ref={ref} onClick={show} style={{width:'90%'}} variant='contained' color='error'>/</Button></Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={1} style={{marginBottom:'10px'}}>
        <Grid item xs={3}><Button4 onClick={show} style={{width:'90%'}}>.</Button4></Grid>
        <Grid item xs={3}><Button onClick={show} style={{width:'90%'}} variant='contained'>0</Button></Grid>
        <Grid item xs={5}><Button ref={ref} onClick={equals} style={{width:'118%',backgroundColor:'orange'}} variant='contained'>=</Button></Grid>
      </Grid>
      </Box>
    </div>
  )
}

export default Calculator