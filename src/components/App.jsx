import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactList />
    </Layout>
  );
};
