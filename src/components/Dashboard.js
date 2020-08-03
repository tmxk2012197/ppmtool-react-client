import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import * as actions from "../actions/index";

class Dashboard extends Component {
  componentDidMount() {
    this.props.onGetProjects();
  }

  render() {
    const projectList = this.props.projects.map((p) => {
      return <ProjectItem key={p.id} project={p} />;
    });

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              {projectList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  projects: PropTypes.array.isRequired,
  onGetProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.project.projects,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProjects: () => dispatch(actions.getProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
