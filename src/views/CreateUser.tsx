import { Button, TextField } from '@mui/material';
import { AxiosResponse } from 'axios';
import { UserDTO } from 'dtos/UserDTO';
import React, { useState } from 'react';
import { NodeAPI } from 'services/Service';

export default function CreateUser() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function createUserHandler() {
        const userDTO = new UserDTO(name, email, password);

        try{
            const postResponse: AxiosResponse = await NodeAPI.post(`${process.env.REACT_APP_API_URL}/usuario`, userDTO);
            console.log(postResponse)

        }catch(error){
            console.log(error)

        }

        console.log(userDTO)
    };


    // useEffect(() => {
    //     console.log(`Nome: ${name}`);
    //     console.log(`Email: ${email}`);
    //     console.log(`Password: ${password}`);
    // }, [name, email, password]);

    return (
        <div style={
            {
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <div style={
                {
                    height: '90%',
                    width: '45%',
                    display: 'flex',
                    justifyContent: 'center'   /*display: 'flex'= ficar flexivel | justifyContent: 'center' =  o conteudo ficar centralizado*/
                }
            }>
                <div style={{ width: '100%' }}>

                    <div style={{
                        marginBottom: '15px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'

                    }}> {/*usado para fazer a margem de baixo do campo*/}

                    </div>

                    <div style={{
                        marginBottom: '15px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <TextField
                            onChange={(event) => setName(event.target.value)}
                            label={'Nome do usuario'}
                            variant='outlined'
                            style={{
                                backgroundColor: 'white',
                                width: '50%',
                            }} />
                    </div>
                    <div style={{
                        marginBottom: '15px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <TextField
                            onChange={(event) => setEmail(event.target.value)}
                            label={'Email'}
                            variant='outlined'
                            style={{
                                backgroundColor: 'white',
                                width: '50%'
                            }} />
                    </div>
                    <div style={{
                        marginBottom: '15px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <TextField
                            security=''
                            label={'Senha'}
                            type={"password"}
                            onChange={(event) => setPassword(event.target.value)}
                            variant='outlined'
                            style={{
                                backgroundColor: 'white',
                                width: '50%',
                            }} />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
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
        </div>
    );
}