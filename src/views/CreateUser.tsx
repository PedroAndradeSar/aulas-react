import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { AxiosResponse } from 'axios';
import { UserDTO } from 'dtos/UserDTO';
import React, { useState } from 'react';
import { NodeAPI } from 'services/Service';

export default function CreateUser() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(true);

  async function createUserHandler() {
    const userDTO = new UserDTO(name, email, password);

    try {
      const postResponse: AxiosResponse = await NodeAPI.post(
        `${process.env.REACT_APP_API_URL}/usuario`,
        userDTO
      );
      console.log(postResponse);
    } catch (error) {
      console.log(error);
    }
  }

  function closeSnackbar() {
    setIsOpen(false);
  }

  /*
   useEffect(() => {

  }, []); 
  */

  return (
    <div
      style={{
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          height: '90%',
          width: '45%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '100%' }}>
          <div
            style={{
              marginBottom: '15px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <TextField
              onChange={(event) => setName(event.target.value)}
              label={'Nome do usuário'}
              variant="outlined"
              style={{ width: '50%', backgroundColor: 'white' }}
            />
          </div>

          <div
            style={{
              marginBottom: '15px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <TextField
              label={'Email'}
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
              style={{ width: '50%', backgroundColor: 'white' }}
            />
          </div>

          <div
            style={{
              marginBottom: '15px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <TextField
              label={'Senha'}
              variant="outlined"
              type={'password'}
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: '50%', backgroundColor: 'white' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant={'contained'}
              style={{
                height: '50px',
                width: '100px',
              }}
              onClick={createUserHandler}
            >
              {'Criar'}
            </Button>
          </div>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
      >
        <Alert
          onClose={closeSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}