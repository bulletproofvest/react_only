// 'react-router-dom'은 라우팅을 위한 라이브러리
// 기본으로 설치가 안되어 있으니, 차후 설치 필요
// npm install react-router-dom 엔터
import { Routes, Route } from 'react-router-dom';

// ch02 장
// 기호 .는 현재폴더, .. 는 상위 폴더, /는 폴더 구분자
// import 앱이름 from '전체경로/파일명'
// ch01 장
import AppMakeArray01 from './../components/ch01.react_basic/make_array_01';
import AppMathObject01 from './../components/ch01.react_basic/math_object_01';
import AppIfExercise from './../components/ch01.react_basic/if_exercise';
import AppSwitchExercise from './../components/ch01.react_basic/switch_exercise';
import AppTypeOfNumber from './../components/ch01.react_basic/typeof_number';

import AppFormExam from './../components/ch01.react_basic/form_exam';
import AppListExam from './../components/ch01.react_basic/list_exam';
import AppTableExam from './../components/ch01.react_basic/table_exam';

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
import AppFileSeparator from './../components/ch03.component/file_separator';
import AppUseProps from './../components/ch03.component/use_props';
import AppMakeTable01 from './../components/ch03.component/array_and_table_01';
import AppMakeTable02 from './../components/ch03.component/array_and_table_02';

import AppClickEvent from './../components/ch04.event_handling/click_event';
import AppChangeEvent from './../components/ch04.event_handling/change_event';
import AppMouseEvent from './../components/ch04.event_handling/mouse_event';
import AppKeyEvent from './../components/ch04.event_handling/key_event';
import AppComboChange from './../components/ch04.event_handling/combo_change';
import AppSubmitEvent from './../components/ch04.event_handling/submit_event';

import AppUseState01 from './../components/ch05.hooks/use_state_01';
import AppUseState02 from './../components/ch05.hooks/use_state_02';
import AppUseState03 from './../components/ch05.hooks/use_state_03';
import AppUseState04 from './../components/ch05.hooks/use_state_04';
import AppUseEffect01 from './../components/ch05.hooks/use_effect_01';
import AppUseEffect02 from './../components/ch05.hooks/use_effect_02';
import AppUseEffect03 from './../components/ch05.hooks/use_effect_03';

import AppCafe01 from './../components/ch06.bootstrap/coffee_bread_01/main';
import AppCafe02 from './../components/ch06.bootstrap/coffee_bread_02/main';
import AppCafe03 from './../components/ch06.bootstrap/coffee_bread_03/main';
import AppCafe04 from './../components/ch06.bootstrap/coffee_bread_04/main';
import AppCafe05 from './../components/ch06.bootstrap/coffee_bread_05/main';
import AppCafe06 from './../components/ch06.bootstrap/coffee_bread_06/main';
import AppCafe07 from './../components/ch06.bootstrap/coffee_bread_07/main';
import AppCafe10 from './../components/ch06.bootstrap/coffee_bread_10/main';

function AppRoutes() {
    return (
        <Routes>
            {/* element 속성에는 컴포넌트 자체가 아니라 JSX요소를 넣어야 함 */}
            <Route path='/' element={<AppLetConst />} />

            {/* 제01장 */}
            <Route path='/make_array_01' element={<AppMakeArray01 />} />
            <Route path='/math_object_01' element={<AppMathObject01 />} />
            <Route path='/if_exercise' element={<AppIfExercise />} />
            <Route path='/switch_exercise' element={<AppSwitchExercise />} />
            <Route path='/typeof_number' element={<AppTypeOfNumber />} />

            <Route path='/form_exam' element={<AppFormExam />} />
            <Route path='/list_exam' element={<AppListExam />} />
            <Route path='/table_exam' element={<AppTableExam />} />

            <Route path='/let_const' element={<AppLetConst />} />
            <Route path='/template_string' element={<AppTemplateString />} />
            <Route path='/make_subject_list' element={<AppSubjectList />} />
            <Route path='/make_function' element={<AppMakeFunction />} />
            <Route path='/arrow_function' element={<AppArrowFunction />} />
            <Route path='/array_map' element={<AppArrayMap />} />
            <Route path='/spread_operator' element={<AppSpreadOperator />} />

            <Route path='/components01' element={<AppClassComponent />} />
            <Route path='/components02' element={<AppFunctionComponent />} />
            <Route path='/component_separate' element={<AppComponentSeparate />} />
            <Route path='/file_separator' element={<AppFileSeparator />} />
            <Route path='/use_props' element={<AppUseProps />} />
            <Route path='/array_and_table_01' element={<AppMakeTable01 />} />
            <Route path='/array_and_table_02' element={<AppMakeTable02 />} />

            <Route path='/click_event' element={<AppClickEvent />} />
            <Route path='/change_event' element={<AppChangeEvent />} />
            <Route path='/mouse_event' element={<AppMouseEvent />} />
            <Route path='/key_event' element={<AppKeyEvent />} />
            <Route path='/combo_change' element={<AppComboChange />} />
            <Route path='/submit_event' element={<AppSubmitEvent />} />

            <Route path='/use_state_01' element={<AppUseState01 />} />
            <Route path='/use_state_02' element={<AppUseState02 />} />
            <Route path='/use_state_03' element={<AppUseState03 />} />
            <Route path='/use_state_04' element={<AppUseState04 />} />
            <Route path='/use_effect_01' element={<AppUseEffect01 />} />
            <Route path='/use_effect_02' element={<AppUseEffect02 />} />
            <Route path='/use_effect_03' element={<AppUseEffect03 />} />

            <Route path='/coffee_bread_01' element={<AppCafe01 />} />
            <Route path='/coffee_bread_02' element={<AppCafe02 />} />
            <Route path='/coffee_bread_03' element={<AppCafe03 />} />
            <Route path='/coffee_bread_04' element={<AppCafe04 />} />
            <Route path='/coffee_bread_05' element={<AppCafe05 />} />
            <Route path='/coffee_bread_06' element={<AppCafe06 />} />
            <Route path='/coffee_bread_07' element={<AppCafe07 />} />
            <Route path='/coffee_bread_10' element={<AppCafe10 />} />
        </Routes>
    );
};

export default AppRoutes;