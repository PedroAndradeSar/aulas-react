import { Button, TextField } from '@mui/material';
import React from 'react';

export default function CreateUser() {

    return (
        <div style={
            {
                backgroundColor: 'red',
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <div style={
                {
                    backgroundColor: 'green',
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
                            variant='outlined'
                            style={{ 
                                backgroundColor: 'white',
                                width: '50%',
                                 }} />
                    </div>
                    <div style={{
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Button
                            variant={'contained'}
                            style={{
                                height: '50px',
                                width: '100px',
                                backgroundColor: 'blue'
                            }}>

                            {'Criar'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}