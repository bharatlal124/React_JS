// ./src/List.js
import { Component } from "react";
import Course from "./components/Course";
import { courses } from "./data";
// import { Container } from "./resuable.styled";
import { Container } from "./reusable.styled.js";


class List extends Component {

  render() {
    const { isCourseinBag, handleAdd, handleRemove } = this.props;
    return (
      <Container flex='3' className="list">
        {courses.map((v) => (
          <Course
            key={v.id}
            video={v}
            onAdd={handleAdd}
            onRemove={handleRemove}
            isInBag={isCourseinBag(v.id)}
          />
        ))}
      </Container>
    );
  }
}

export default List;
