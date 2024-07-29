import { createRoot, Container, RootOptions, ErrorInfo } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { routes } from "./routes";

import "./index.css";

const rootElement = document.getElementById("root") as Container;

const sendErrorToMonitoringService = (error: unknown, errorInfo: ErrorInfo) => {
	console.error(`
		Recoverable error occurred: ${error}
		ErrorInfo: ${errorInfo})
	`);

	// Integração com serviços de monitoramento (como Sentry, LogRocket, etc.)
	// fetch('/log-error', {
    //     method: 'POST',
    //     body: JSON.stringify({ error, errorInfo }),
    // });
}

const options: RootOptions = {
	identifierPrefix: 'myApp-',
	onRecoverableError: (error: unknown, errorInfo: ErrorInfo) => {
		sendErrorToMonitoringService(error, errorInfo);
	},
};

// const root = createRoot(domNode, options?)
const root = createRoot(rootElement, options);

// createRoot --> cria um nó para exibir conteúdo dentro de um elemento DOM do navegador.
// React assume o gerenciamento do DOM.

	// domNode --> elemento do DOM. O React criará um root para esse elemento DOM e permitirá a chamada de funções no root, como exibir conteúdo React renderizado.

	// options (opcional) --> objeto que possui opções para o root

// Root.render permite exibir um componente React dentro do root
root.render(<RouterProvider router={routes} />);
