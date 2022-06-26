import '../styles/tailwind.css';
import Layout from '../components/Layout';
import apolloClient from '../lib/apollo';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
