import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from './pages/book/book-list'
import BookItem from './pages/book/book-item'
import BookOrder from './pages/book/book-order'
import PaySuccess from './pages/book/pay-success'
import CourseMain from './pages/course/course-main'
import Exam from './pages/exam/exam-category'
import ExamList from './pages/exam/exam-list'
import ExamGuide from './pages/exam/exam-guide'
import ExamCourse from './pages/exam/exam-course'
import ExamCourseList from './pages/exam/exam-course-list'
import ExamCourseItem from './pages/exam/exam-course-item'
import ExamExamination from './pages/exam/exam-examination'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/exam'},
    {path: '/book', component: BookList},
    {path: '/book/:id', component: BookItem},
    {path: '/book/:id/order', component: BookOrder},
    {path: '/book/:id/order/pay-success', component: PaySuccess},
    {path: '/course', component: CourseMain},
    {path: '/exam', component: Exam},
    {path: '/exam/:eid', component: ExamList},
    {path: '/exam/:eid/guide', component: ExamGuide},
    {path: '/exam/:eid/course', component: ExamCourse},
    {path: '/exam/:eid/course/:cid', component: ExamCourseList},
    {path: '/exam/:eid/course/:cid/item/:iid', component: ExamCourseItem},
    {path: '/exam/:eid/examination', component: ExamExamination},
]

export default new VueRouter({
    routes
})