import axios from "axios";
import * as actionTypes from "./types";

export const createProject = (project, history) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/api/project", project)
      .then(() => {
        history.push("/dashboard");
        dispatch(projectFail(null));
      })
      .catch((err) => {
        dispatch(projectFail(err));
      });
  };
};

export const projectFail = (error) => {
  const errorMessages = !error ? {} : error.response.data;
  return {
    type: actionTypes.GET_ERRORS,
    payload: errorMessages,
  };
};

export const getProjects = () => {
  return (dispatch) => {
    axios
      .get("/api/project/all")
      .then((res) => dispatch(getProjectsSuccess(res)));
  };
};

export const getProjectsSuccess = (res) => {
  return {
    type: actionTypes.GET_PROJECTS,
    payload: res.data,
  };
};

export const getProject = (id, history) => {
  return (dispatch) => {
    axios
      .get(`/api/project/${id}`)
      .then((response) => {
        dispatch(getProjectSuccess(response));
      })
      .catch(() => {
        history.push("/dashboard");
      });
  };
};

export const getProjectSuccess = (response) => {
  return {
    type: actionTypes.GET_PROJECT,
    payload: response.data,
  };
};

export const deleteProject = (id) => {
  return (dispatch) => {
    if (window.confirm("Are you sure? This will delete the project.")) {
      axios.delete(`/api/project/${id}`).then(() => {
        dispatch(deleteProjectSuccess(id));
      });
    }
  };
};

export const deleteProjectSuccess = (id) => {
  return {
    type: actionTypes.DELETE_PROJECT,
    payload: id,
  };
};
