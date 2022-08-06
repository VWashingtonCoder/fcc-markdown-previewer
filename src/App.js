import React from "react";
import Badge from "react-bootstrap/Badge"

export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="badge bg-primary">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
                 
          <div className="row mt-4">
            <div className="col-md-6">
                <h4 className="text-center">
                  <Badge className="badge bg-secondary">
                    Markdown Input
                  </Badge>
                </h4>
            </div>

            <div className="col-md-6">
                <h4 className="text-center" >
                  <Badge className="badge bg-secondary">
                    Markdown Preview
                  </Badge>
                </h4>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
