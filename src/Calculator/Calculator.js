import {Container, Grid, Toolbar, Typography, Button} from '@mui/material';
import {Box} from '@mui/system';
import React, {useRef, useState} from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LabelButton from './components/LabelButton';
import DigitButton from './components/DigitButton';

function Calculator() {
  const [digits, setDigits] = useState('');

  const ref = useRef(null);

  const equals = () => {
    setDigits(eval(digits));
  };

  const allClear = () => {
    setDigits('');
  };

  const show = (e) => {
    setDigits(digits + e.target.innerText);
  };

  const clear = () => {
    setDigits(digits.slice(0, -1));
  };

  return (
    <div>
      <Box style={{width: '300px', margin: 'auto', marginTop: '10%'}}>
        <Container
          style={{
            borderRadius: '5px',
            background: '#303336',
            marginBottom: '10px',
            width: '295px',
            marginLeft: '-1px',
          }}
        >
          <Toolbar>
            <Typography sx={{flexGrow: 1, color: 'white'}}></Typography>
            <Typography sx={{color: 'white'}}>{digits}</Typography>
          </Toolbar>
        </Container>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={1}
          style={{marginBottom: '10px'}}
        >
          <Grid item xs={3}>
            <LabelButton onClick={clear} style={{width: '90%'}}>
              <ArrowRightAltIcon />
            </LabelButton>
          </Grid>
          <Grid item xs={3}>
            <Button
              ref={ref}
              onClick={show}
              style={{width: '90%'}}
              variant="contained"
              color="error"
            >
              *
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              ref={ref}
              onClick={allClear}
              style={{width: '117%', backgroundColor: 'orange'}}
              variant="contained"
            >
              AC
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={1}
          style={{marginBottom: '10px'}}
        >
          <Grid item xs={3}>
            <DigitButton onClick={show} style={{width: '90%'}}>
              1
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton onClick={show} style={{width: '90%'}}>
              2
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton onClick={show} style={{width: '90%'}}>
              3
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <Button
              ref={ref}
              onClick={show}
              style={{width: '90%'}}
              variant="contained"
              color="error"
            >
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <DigitButton onClick={show} style={{width: '90%'}}>
              4
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton onClick={show} style={{width: '90%'}}>
              5
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton onClick={show} style={{width: '90%'}}>
              6
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <Button
              ref={ref}
              onClick={show}
              style={{width: '90%'}}
              variant="contained"
              color="error"
            >
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <DigitButton onClick={show} style={{width: '90%'}}>
              7
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton onClick={show} style={{width: '90%'}}>
              8
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton onClick={show} style={{width: '90%'}}>
              9
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <Button
              ref={ref}
              onClick={show}
              style={{width: '90%'}}
              variant="contained"
              color="error"
            >
              /
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={1}
          style={{marginBottom: '10px'}}
        >
          <Grid item xs={3}>
            <LabelButton onClick={show} style={{width: '90%'}}>
              .
            </LabelButton>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={show} style={{width: '90%'}} variant="contained">
              0
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              ref={ref}
              onClick={equals}
              style={{width: '118%', backgroundColor: 'orange'}}
              variant="contained"
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Calculator;
