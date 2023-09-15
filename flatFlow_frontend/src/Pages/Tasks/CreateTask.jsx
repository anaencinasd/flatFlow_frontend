

// export default function CreateTask() {
//   return (
//     <div>CreateTask</div>
//   )
// }

import { Component } from "react";
import TaskDataService from "../../../Config/Service/task.service";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeId_user = this.onChangeId_user.bind(this);
    this.onChangeId_status = this.onChangeId_status.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.newTask = this.newTask.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      id_user: "",
      id_status: "",
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeId_user(e) {
    this.setState({
      id_user: e.target.value
    });
  }

  onChangeId_status(e) {
    this.setState({
      id_status: e.target.value
    });
  }

  saveTask() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      id_user: this.state.id_user,
      id_status: this.state.id_status
    };

    TaskDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          id_user: response.data.id_user,
          id_status: response.data.id_status,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTask() {
    this.setState({
      id: null,
      title: "",
      description: "",
      id_user:"",
      id_status:"",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTask}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Tarea</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="id_user">¿A quién se la asignas?</label>
                <input
                  type="number"
                  className="form-control"
                  id="id_user"
                  required
                  value={this.state.id_user}
                  onChange={this.onChangeId_user}
                  name="id_user"
                />
              </div>
              <div className="form-group">
                <label htmlFor="id_status">Estado de la tarea</label>
                <input
                  type="number"
                  className="form-control"
                  id="id_status"
                  required
                  value={this.state.id_status}
                  onChange={this.onChangeId_status}
                  name="id_status"
                />
              </div>
  
              <button onClick={this.saveTask} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    }
  }
 
