import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

function Projects() {
  let token = process.env.REACT_APP_GITHUB_TOKEN
  const [project, setProject] = useState([])
  const fetchProject = async () => {
    let projects = await axios.get("https://api.github.com/users/Pinto565/repos", {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    let projectData = []
    projects.data.map((data) => {
      if (data.fork === false && data.description !== null) {
        projectData.push(data)
      }
    })
    setProject(projectData)
  }
  useEffect(() => {
    fetchProject()
  }, [])


  return (
    <div>
      <div className="container">
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-center my-3">Projects</h1>
            <p className="text-center text-white fst-italic">The data displayed on this page is fetched from Github API</p>
            <hr />
            <div className="min-vw-100 d-flex flex-wrap">
              {
                project.map((data, index) => {
                  return (
                    <card className="border m-4 p-2" key={index}>
                      <div class="card-body w-100 px-3 my-3" style={{ width: "5rem" }}>
                        <h5 class="card-title text-capitalize">{data.name}</h5>
                        <p class="card-text my-1">{data.description}</p>
                        <a href={data.svn_url} class="card-link text-decoration-none badge bg-white text-black"
                          target="_blank"
                        >
                          Visit Github</a>
                      </div>
                    </card>
                  )
                })
              }
            </div>
            <hr />
            <div className="d-flex justify-content-center">
              <Link to="/">
                <p className="badge bg-white text-black fs-6">
                  Home
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Projects;
