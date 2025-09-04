function App({ goodbye, comment }) {
    console.log('샘플');
    return (
        <article>
            <h2>{goodbye}</h2>
            <p>{comment}</p>
        </article>
    );
}

export default App;