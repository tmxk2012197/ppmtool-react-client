import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import * as actions from "../../actions/index";

class AddProject extends Component {
  state = {
    projectName: "",
    projectIdentifier: "",
    description: "",
    startDate: "",
    endDate: "",
    errors: {},
  };

  //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault(); // pevent the form to reloading

    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };
    this.props.onCreateProject(newProject, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.projectName,
                      })}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                    {errors.projectName && (
                      <div className="invalid-feedback">
                        {errors.projectName}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectIdentifier,
                      })}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                    {errors.projectIdentifier && (
                      <div className="invalid-feedback">
                        {errors.projectIdentifier}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.description,
                      })}
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    ></textarea>
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.startDate,
                      })}
                      name="startDate"
                      value={this.state.startDate}
                      onChange={this.onChange}
                    />
                    {errors.startDate && (
                      <div className="invalid-feedback">{errors.startDate}</div>
                    )}
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.endDate,
                      })}
                      name="endDate"
                      value={this.state.endDate}
                      onChange={this.onChange}
                    />
                    {errors.endDate && (
                      <div className="invalid-feedback">{errors.endDate}</div>
                    )}
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  onCreateProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateProject: (project, history) =>
      dispatch(actions.createProject(project, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
