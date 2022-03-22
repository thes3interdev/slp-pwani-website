import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PageHome from './pages/PageHome';

/** configure the apollo client */
const client = new ApolloClient({
	uri:
		process.env.NODE_ENV === 'production'
			? 'https://baas.aerocruise-safaris.co.ke/graphql'
			: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<Router>
			<ApolloProvider client={client}>
				<div>
					<div className="content">
						<Routes>
							<Route path="/" element={<PageHome />} />
						</Routes>
					</div>
				</div>
			</ApolloProvider>
		</Router>
	);
};

export default App;
