// 특정 페이지로 이동을 하기 위한 링크 
import {Link} from 'react-router-dom';
// 개발자가 작성한 외부 모듈의 일부를 임포트 함 
import AppRouters from './routes/AppRoutes';
import {menuData} from './routes/menuData';

// 이 문서의 스타일은 App.css가 담당
import './style/App.css';

function App(){
    return(
        <div className="App">
            <h1>React Example Navigation</h1>

            <table border="1">
                <tr>
                    <th>제02장</th>
                    <th>제03장</th>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li><Link to='/let_const'>let & const</Link></li>
                            <li><Link to='/template_string'>탬플릿 문자열</Link></li>
                            <li><Link to='/make_subject_list'>과목 목록 표시</Link></li>
                            <li><Link to='/make_function'>함수 만들기</Link></li>
                            <li><Link to='/arrow_function'>화살표 함수</Link></li>
                            <li><Link to='/array_map'>배열 함수(map)</Link></li>
                            <li><Link to='/spread_operator'>전개 연산자</Link></li>
                        </ul>
                    </td>
                    <td>b</td>
                </tr>
            </table>

             {/* 라우터 모음 */}
             <AppRouters />
        </div>
    );  
}

export default App ;