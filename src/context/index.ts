import { createContext } from "react";

// Context permite compartilhar facilmente o estado entre componentes de sua aplicação.

    // Estado(state): um objeto que armazena dados, que podem mudar ao longo do tempo.

        // Permite gerenciar e atualizar dados, que podem mudar ao longo do tempo

        // Permite passar e consumir dados em qualquer componente SEM usar props

// Quando usar: quando trabalhar com dados que não precisam ser atualizados com frequência
    // Tema (claro/escuro)
    // Autenticação do usuário
    // Dados de preferência (ex.: idioma)

// Ajuda a evitar o problema de propagação de propriedades (props drilling)
    // props drilling: evento que ocorre quando precisamos passar props por vários níveis até o componente aninhado, e os componentes intermediários não precisam delas.

export const context = createContext();
