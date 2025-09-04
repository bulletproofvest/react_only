// ui 폴더에 있는 Top01이라는 앱을 나는 Top라 부름
import Top from './ui/Top01';
import Content from './ui/Content01';
import Bottom from './ui/Bottom01';

function App() {
    // console.log('샘플');

    return (
        <div className="App">
            <Top />
            <Content />
            <Bottom />
        </div>
    );
}

export default App;