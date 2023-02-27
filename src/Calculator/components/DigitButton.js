import * as React from 'react';
import Button from '@mui/material/Button';

export default function DigitButton({children,style,onClick}) {
  return (
    <div>
      <Button onClick={onClick} style={style} variant="contained">{children}</Button>
    </div>

  );
}
