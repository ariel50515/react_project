//1104
import UserPage from './ex-1104-1/UserPage'
import BS5Test from './ex-1104-2/BS5Test'

//1103
import ImageDemo from './ex-1103-1/ImageDemo'
import UserDemo from './ex-1103-2/UserDemo'

//1102
import HTML5ValidForm from './ex-1102-1/HTML5ValidForm'
import Lifecycle from './ex-1102-2/Lifecycle'
import User from './ex-1102-3/User'
import FileUploadSample from './ex-1102-4/FileUploadSample'

//1101
import MultipleInput from './ex-1101-1/MultipleInput'

//1031
import BMI from './ex-1031-1/BMI'
import BirthSelect from './ex-1031-2/BirthSelect'
import TodoApp from './ex-1031-3/TodoApp'

//1028
import InputDemo from './1025-1028/ex-1028-1/InputDemo'
import HTML5Form from './1025-1028/ex-1028-2/HTML5Form'

//1027
// export default的話，可以在導入(import)時直接改名稱
import Parent from './1025-1028/ex-1027-1/Parent'
import ParentPropTypes from './1025-1028/ex-1027-2/Parent'
import ParentDataFlow from './1025-1028/ex-1027-3/Parent'

//1026
import JsxValue from './1025-1028/ex-1026-1/JsxValue'
import StudentList from './1025-1028/ex-1026-2/StudentList'
import Demo from './1025-1028/ex-array/Demo'
import Menu from './1025-1028/ex-menu/Menu'

//1025
import Counter from './1025-1028/ex-1025-2/Counter'

export const examples = [
  {
    name: '1104-2 Bootstrap5測試',
    path: '/ex-1104-2/BS5Test.js',
    component: BS5Test,
  },
  {
    name: '1104-1 從伺服器載入資料，分頁',
    path: '/ex-1104-1/UserPage.js',
    component: UserPage,
  },
  {
    name: '1103-2 從伺服器載入資料，搜尋&分頁',
    path: '/ex-1103-2/UserDemo.js',
    component: UserDemo,
  },
  {
    name: '1103-1 圖片使用說明',
    path: '/ex-1103-1/ImageDemo.js',
    component: ImageDemo,
  },
  {
    name: '1102-4 上傳圖片',
    path: '/ex-1102-4/FileUploadSample',
    component: FileUploadSample,
  },
  {
    name: '1102-3 從伺服器載入資料',
    path: '/ex-1102-3/User.js',
    component: User,
  },
  {
    name: '1102-2 生命周期方法',
    path: '/ex-1102-2/Lifecycle.js',
    component: Lifecycle,
  },
  {
    name: '1102-1 HTML表單元素認證',
    path: '/ex-1102-1/HTML5Form.js',
    component: HTML5ValidForm,
  },
  {
    name: '1101-1 多個表單元素共用單一state',
    path: '/ex-1101-1/MultipleInput.js',
    component: MultipleInput,
  },
  {
    name: '1031-3 Todo待辨事項',
    path: '/ex-1031-3/TodoApp.js',
    component: TodoApp,
  },
  {
    name: '1031-2 出生年月日下拉選單',
    path: '/ex-1031-1/BirthSelect.js',
    component: BirthSelect,
  },
  {
    name: '1031-1 BMI線上計算表單',
    path: '/ex-1031-1/BMI.js',
    component: BMI,
  },
  {
    name: '1028-2 各種可控的表單元件',
    path: '/ex-1028-2/HTML5Form.js',
    component: HTML5Form,
  },
  {
    name: '1028-1 可控與不可控表單元件',
    path: '/ex-1028-1/InputDemo.js',
    component: InputDemo,
  },
  {
    name: '1027-3 三種資料流',
    path: '/ex-1027-3/Parent.js',
    component: ParentDataFlow,
  },
  {
    name: '1027-2 PropTypes',
    path: '/ex-1027-2/Parent.js',
    component: ParentPropTypes,
  },
  {
    name: '1027-1 props屬性',
    path: '/ex-1027-1/Parent.js',
    component: Parent,
  },
  {
    name: '1026 練習題-選單項目狀態',
    path: '/menu/Menu.js',
    component: Menu,
  },
  {
    name: '1026-3 物件陣列狀態處理練習',
    path: '/array/Demo.js',
    component: Demo,
  },
  {
    name: '1026-2 學生列表清單(map與key)',
    path: '/ex-1026-2/StudentList.js',
    component: StudentList,
  },
  {
    name: '1026-1 JSX中的值與表達式',
    path: '/ex-1026-1/JsxValue.js',
    component: JsxValue,
  },
  {
    name: '1025-1 計數器',
    path: '/ex-1025-2/Counter.js',
    component: Counter,
  },
]
