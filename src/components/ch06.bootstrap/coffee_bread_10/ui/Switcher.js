import Display from './Display';

function App({ mode, products }) {
    switch (mode) {
        case 'detail':
            return <Display products={products} />;
        default:
            return null;
    }

}

export default App;