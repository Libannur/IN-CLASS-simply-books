import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function Signout() {
  return (
    <Button type="button" size="lg" className="btn-danger" onClick={signOut}>
      Signout
    </Button>
  );
}

export default Signout;
