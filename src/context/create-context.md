4 Etapas para Criar e Utilizar o Context em React:

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
