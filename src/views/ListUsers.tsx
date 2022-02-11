import { AxiosResponse } from 'axios';
import { UserDTO } from 'dtos/UserDTO';
import React, { useEffect, useState } from 'react';
import { NodeAPI } from 'services/Service';

export function ListUsers() {
  const [listOfUsers, setListOfUsers] = useState<Array<UserDTO>>();

  async function getListOfUsers() {
    try {
      const list: AxiosResponse<Array<UserDTO>> = await NodeAPI.get(
        `${process.env.REACT_APP_API_URL}/usuario`
      );
      setListOfUsers([...list.data]);
      console.log([...list.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListOfUsers();
  }, []);

  return (
    <>
      {listOfUsers !== undefined && listOfUsers.length > 0 ? (
        listOfUsers.map((user) => {
          return (
            <div
              onClick={() => {
                console.log(user.id);
              }}
            >
              {user.nome}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}