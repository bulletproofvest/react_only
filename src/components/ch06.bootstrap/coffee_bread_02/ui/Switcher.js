import Display from './Display';

function App({ mode, products }) {
    console.log(`현재 모드 : ${mode}`);

    switch (mode) {
        case 'detail':
            return <Display product={products} />;
        default:
            return null;
    };
}


export default App;