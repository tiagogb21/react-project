import { FC, ReactNode } from "react";

// Define um tipo genérico para os componentes que aceitam children
type ChildrenProps = { children: ReactNode };

// Define uma função para combinar vários componentes
export const combineComponents = <P extends ChildrenProps>(...components: FC<P>[]): FC<P> => {
    // Usa o método reduce para compor os componentes
    return components.reduce(
        (AccumulatedComponents, CurrentComponent) => {
            // Retorna um novo componente que encapsula os componentes acumulados e o componente atual
            const CombinedComponent: FC<P> = (props) => {
                return (
                    <AccumulatedComponents {...props}>
                        <CurrentComponent {...props} />
                    </AccumulatedComponents>
                );
            };
            return CombinedComponent;
        },
        // Inicializa o acumulador com um componente que simplesmente renderiza seus filhos
        ({ children }) => <>{children}</>
    );
};

// // Exemplo de uso
// const ComponentA: FC<ChildrenProps> = ({ children }) => <div className="component-a">{children}</div>;
// const ComponentB: FC<ChildrenProps> = ({ children }) => <div className="component-b">{children}</div>;
