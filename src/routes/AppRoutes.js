// 'react-router-dom'은 라우팅을 위한 라이브러리
// 기본으로 설치가 안되어 있으니, 차후 설치 필요
// npm install react-router-dom 엔터
import {Routes, Route} from 'react-router-dom';

// ch02 장
// 기호 .는 현재폴더, .. 는 상위 폴더, /는 폴더 구분자
// import 앱이름 from '전체경로/파일명'
import AppLetConst from './../components/ch02.es6_syntax/let_const';
import AppTemplateString from './../components/ch02.es6_syntax/template_string';
import AppSubjectList from './../components/ch02.es6_syntax/make_subject_list';
import AppMakeFunction from './../components/ch02.es6_syntax/make_function';
import AppArrowFunction from './../components/ch02.es6_syntax/arrow_function';
import AppArrayMap from './../components/ch02.es6_syntax/array_map';
import AppSpreadOperator from './../components/ch02.es6_syntax/spread_operator';

import AppClassComponent from './../components/ch03.component/components01';
import AppFunctionComponent from './../components/ch03.component/components02';
import AppComponentSeparate from './../components/ch03.component/component_separate';

function AppRoutes(){
    return(
        <Routes>
            {/* element 속성에는 컴포넌트 자체가 아니라 JSX요소를 넣어야 함 */}
            <Route path='let_const' element={<AppLetConst />} />
            <Route path='template_string' element={<AppTemplateString />} />
            <Route path='make_subject_list' element={<AppSubjectList />} />
            <Route path='make_function' element={<AppMakeFunction />} />
            <Route path='arrow_function' element={<AppArrowFunction />} />
            <Route path='array_map' element={<AppArrayMap />} />
            <Route path='spread_operator' element={<AppSpreadOperator />} />

            <Route path='components01' element={<AppClassComponent />} />
            <Route path='components02' element={<AppFunctionComponent />} />
            <Route path='component_separate' element={<AppComponentSeparate />} />
        </Routes>
    );
};

export default AppRoutes;