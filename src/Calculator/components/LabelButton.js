import {Button} from '@mui/material';
import React from 'react';

function LabelButton({children, style, onClick}) {
  return (
    <div>
      <Button
        onClick={onClick}
        variant="contained"
        color="secondary"
        style={style}
      >
        {children}
      </Button>
    </div>
  );
}

export default LabelButton;
