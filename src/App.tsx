
import './App.css';
import React, { useEffect, useState } from 'react';
import { NodeAPI } from 'services/Service';
import { AxiosResponse } from 'axios';
import { WelcomeMessageDTO } from 'classes/WelcomeMenssageDTO';
import CreateUser from 'views/CreateUser';

function App() {
  const [mensage, setMessage] = useState<string>('');

  async function getWelcomeMassage() {
    try {
      const getWelcomeMassage: AxiosResponse<WelcomeMessageDTO> = await NodeAPI.get(`${process.env.REACT_APP_API_URL}`);

      console.log(getWelcomeMassage.data.mensagem);

      setMessage(getWelcomeMassage.data.mensagem);

    } catch (error) {
      console.log(error);
      setMessage('Erro na chamada da API');

    }

  }

  useEffect(() => {
    console.log('Renderezei meu componente');
    getWelcomeMassage();
    console.log(getWelcomeMassage);
  }, []);

  return <>
    <CreateUser />
  </>;
}

export default App;
