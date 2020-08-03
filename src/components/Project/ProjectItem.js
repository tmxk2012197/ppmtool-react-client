import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../../actions/index";

export default class ProjectItem extends Component {
  render() {
    const { project } = this.props;

    return (
      <div className="container">
        <div className="card card-body mb-3">
          <div className="row projects-card">
            <div className="col-2">
              <label>
                ID: <span className="mx-auto">{project.projectIdentifier}</span>
              </label>
            </div>
            <div className="col-lg-6 col-md-4 col-8 project-labels">
              <h3>{project.projectName}</h3>
              <p>{project.description}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <Link to={`/projectBoard/${project.projectIdentifier}`}>
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                  </li>
                </Link>
                <Link to={`/updateProject/${project.projectIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1"> Update Project Info</i>
                  </li>
                </Link>

                <li
                  className="list-group-item delete"
                  onClick={this.props.onDeleteProject}
                >
                  <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.prototype = {
  onDeleteProject: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProject: (id) => dispatch(actions.deleteProject(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectItem);
