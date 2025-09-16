import Display from './Display';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';
import CreateCategory from './CreateCategory';

function App({ mode, products }) {
    switch (mode) {
        case 'detail':
            return <Display products={products} />;
        case 'get_insert':
            return <CreateContent />
        default:
            return null;
    }

}

export default App;