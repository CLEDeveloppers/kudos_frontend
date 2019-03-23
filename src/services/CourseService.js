import courses from './courses.json';

export default class CourseService {
    static getCourses() {
        return courses ? courses : [];
    }
}