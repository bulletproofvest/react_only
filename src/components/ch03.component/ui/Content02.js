// props를 배열 형식으로 넘겨 받기
function App({ type = "ul", menus }) {
    // console.log('샘플');

    const ListTag = type === 'ul' ? 'ul' : 'ol';

    return (
        <nav>
            <ListTag>
                {menus.map((bread, index) => (
                    <li key={index}>
                        <a href={`${index + 1}.html`}>{bread}</a>
                    </li>
                ))}
            </ListTag>
        </nav>
    );
}

export default App;

// function App({bread01, bread02, bread03, bread04}) {
//     // console.log('샘플');
//     return (
//         <nav>
//             <ul>
//                 <li><a href="">{bread01}</a></li>
//                 <li><a href="">{bread02}</a></li>
//                 <li><a href="">{bread03}</a></li>
//                 <li><a href="">{bread04}</a></li>
//             </ul>
//         </nav>
//     );
// }

// export default App;