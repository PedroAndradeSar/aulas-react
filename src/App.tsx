import { AxiosResponse } from 'axios';
import { WelcomeMessageDTO } from 'dtos/WelcomeMenssageDTO';
import React, { useEffect, useState } from 'react';
import { NodeAPI } from 'services/Service';
import { ListUsers } from 'views/ListUsers';
import './App.css';

function App() {
  const [message, setMessage] = useState<string>('');

  async function getWelcomeMessage() {
    try {
      const welcomeMessage: AxiosResponse<WelcomeMessageDTO> =
        await NodeAPI.get(`${process.env.REACT_APP_API_URL}`);

      console.log(welcomeMessage.data.mensagem);
      setMessage(welcomeMessage.data.mensagem);
    } catch (error) {
      setMessage('Erro na chamada da API');
    }
  }

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <>
      <ListUsers />
    </>
  );
}

export default App;