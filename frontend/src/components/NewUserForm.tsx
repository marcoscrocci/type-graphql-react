import { gql, useMutation } from "@apollo/client"; 
import { FormEvent, useState } from "react";
import { GET_USER } from "../App";
import { client } from "../lib/apollo";

const CREATE_USER = gql`
    mutation ($name: String!) {
        createUser (name: $name) {
            id
            name
        }
    }
`
export function NewUserForm() {
    const [name, setName] = useState('');
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER)

    function handleCreateUser(event: FormEvent) {
        event .preventDefault();

        if (!name) {
            return;
        }

        createUser({
            variables: {
                name
            },
            //refetchQueries: [GET_USER] // ou para não ter que fazer mais uma requisição
            update: (cache, { data: { createUser } }) => {
                const { users } = client.readQuery({ query: GET_USER });

                cache.writeQuery({
                    query: GET_USER,
                    data: {
                        users: [
                            ...users,
                            createUser
                        ]
                    }
                })
            },
            onCompleted(data, clientOptions) {
                console.log('onCompleted - data:', data);
                console.log('onCompleted - clientOptions:', clientOptions);
            },
        }).then((res) => {
            console.log('res:', res);
            console.log('data:', data);
        }).catch((error) => console.log(error));

    }

    return (
        <form onSubmit={handleCreateUser}>
            <input type="text" value={name} onChange={e => setName(e. target. value)} />
            <button type="submit">Enviar</button> 
        </form>
    );
}
