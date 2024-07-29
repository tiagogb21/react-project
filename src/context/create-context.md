# Context


## 4 Etapas para Criar e Utilizar o Context em React:

1 - Criar o Context

    Utilize a função `createContext` para criar um novo Context.

    O Context fornece um objeto com duas propriedades principais: Provider e Consumer.

    ```jsx
    import React, { createContext } from 'react';

    // Passa um valor padrão para o contexto (opcional)
    const MyContext = createContext(defaultValue);
    ```

2 - Envolver a Árvore de Componentes com o Provedor

    Utilize o `Provider` do Context para envolver a parte da árvore de componentes onde o Context deve estar disponível.

    O Provider aceita uma propriedade `value`, que define o valor que será acessível por todos os componentes filhos que consomem este Context.

    ```jsx
    const MyProvider = ({ children }) => {
        const contextValue = { /* valores e funções que você deseja fornecer */ };

                return (
                    <MyContext.Provider value={contextValue}>
                        {children}
                    </MyContext.Provider>
                );
            };
    ```

3 - Definir o Valor do Contexto

        Passe qualquer valor ou função que você deseja compartilhar através do Context para a propriedade value do Provider.

        Isso pode incluir estados, funções de manipulação, ou qualquer outro dado que deve ser acessível por componentes filhos.

    ```jsx
        const contextValue = {
            user: 'John Doe',
            isAuthenticated: true,
            logout: () => { /* lógica de logout */ }
        };

        return (
            <MyContext.Provider value={contextValue}>
                {children}
            </MyContext.Provider>
        );
    ```

4 - Consumir o Contexto em Componentes

        Utilize o useContext para acessar o valor do Context dentro de componentes funcionais.

        Para componentes de classe, use o componente Consumer fornecido pelo Context.

        ```jsx
            import React, { useContext } from 'react';

            const MyComponent = () => {
                const context = useContext(MyContext);

                return (
                    <div>
                        <p>User: {context.user}</p>
                        <button onClick={context.logout}>Logout</button>
                    </div>
                );
            };
        ```

## Resumo:

    - createContext(obj) --> cria o contexto

    - <MyContext.Provider value={contextValue}>

        - Provider --> Envolve a árvore de componentes

        - value --> Define o valor do contexto

    - useContext --> Consome o contexto
