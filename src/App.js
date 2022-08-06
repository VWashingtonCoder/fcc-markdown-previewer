import React from "react";
import Badge from "react-bootstrap/Badge"
import { marked } from "marked";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
  };
  
  updateMarkdown(markdown) {
    this.setState({ markdown });
  };

  render() {
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };

    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    }

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
            <div className="col-md-6 text-center">
                <h4>
                  <Badge className="badge bg-secondary">
                    Markdown Input
                  </Badge>
                </h4>
                <div className="mark-input">
                  <textarea 
                    className="input" 
                    style={inputStyle}
                    value={this.state.markdown}
                    onChange={(e) => {
                      this.updateMarkdown(e.target.value)
                    }}
                  >
                    {console.log(this.state.markdown)}
                  </textarea>
                </div>
            </div>

            <div className="col-md-6">
                <h4 className="text-center" >
                  <Badge className="badge bg-secondary">
                    Markdown Preview
                  </Badge>
                </h4>
                <div 
                  style={outputStyle} 
                  dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
                ></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
