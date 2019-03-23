import React, { Component } from 'react';
import CourseService from './services/CourseService';
import './Courses.css';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    this.setState(() => ({ courses: CourseService.getCourses() }));
  }

  MakeCourseCard(props){
    return(
     <div className="course-card">
         <div className="course-card card">
             <img className="card-img-top" src={props.course.imageUrl} alt="" />
             <div className="card-body">
                 <h4 className="card-title">{props.course.title}</h4>
                 <h6 className="card-subtitle mb-2 text-muted">{props.course.subtitle}</h6>
                 <p className="text-justify" style={{fontSize: '14px'}}>{props.course.description}</p>
             </div>
             <div className="card-footer">
                 <div className="clearfix">
                     <div className="float-left mt-1">
                         <p> Open Sessions: </p>
                     </div>
                     <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.course.availability}</div>
                 </div>
             </div>
         </div>
     </div>
    );
  }

  MakeCourseList(props) {
    return (
        <div className="card-deck">
            { props.courses.map(course => <this.MakeCourseCard key={course.id} course={course} />) }
        </div>
    );
  }

  render() {
      return (
          <div className="container-fluid" style={{marginLeft: '-15px'}}>
              <div className="d-flex flex-row">
                  <div className="col-sm-12">
                      <this.MakeCourseList courses={this.state.courses} />
                  </div>
              </div>
          </div>
      );
  }
}

export default Courses;