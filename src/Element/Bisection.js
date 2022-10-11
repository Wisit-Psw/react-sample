import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import * as ReactDOM from "react-dom";
// import "./rootof.css";
import ApexChart from "./chart";
var formstyle = { marginLeft: "auto", marginRight: "auto" };
var Xm = [];
var Xl = [];
var Xr = [];
var Xloop = [];
class Bisection extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  myFunc() {
    const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
    var inputnum = document.getElementById("number").value;
    var inputroot = document.getElementById("rootofnumber").value;
    if (inputnum !== "" && inputroot !== "") {
      const Rootof = inputnum;
      const root = inputroot;
      var xl = 0;
      var xr = Rootof;
      var xm = (xl + xr) / 2;
      var countloop = 0;
      while (Math.abs(Math.pow(xm, root) - Rootof) >= 0.000001) {
        Xm.push(xm);
        Xl.push(xl);
        Xr.push(xr);
        Xloop.push(countloop++);
        xm = (xl + xr) / 2;
        
        if (Math.pow(xm, root) - Rootof > 0) {
          xr = xm;
        } else {
          xl = xm;
        }
      }

      showchart.render(
        <div>
          <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
        </div>
      );
      // document.getElementById("chart").innerHTML = "";
      Xm = [];
      Xl = [];
      Xr = [];
      Xloop = [];
    } else {
      document.getElementById("showans").innerHTML = "";
      document.getElementById("showsolt").innerHTML =
        "กรุณาป้อนข้อมูลให้ถูกต้อง";
    }
  }

  render() {
    console.log("render");
    return (
      <div className="boxStyles">
        {/* <div className="boxStyles2"> */}
        <div style={{ display: "flex", marginTop: "20px", height: "40%" }}>
          <div className="InputStyles">
            <Form style={{ padding: "20px" }}>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    Bisection Method
                  </Form.Label>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      margin: "0 auto",
                    }}
                  >
                    <Form.Control
                      id="number"
                      type="number"
                      step="1"
                      placeholder="Number"
                      style={formstyle}
                    />
                    <Form.Control
                      id="rootofnumber"
                      type="number"
                      step="1"
                      placeholder="Root of number"
                      style={formstyle}
                    />
                  </div>
                </Form.Group>
                <div id="showans" className="ansStyles"></div>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={this.myFunc}
                >
                  Submit form
                </button>
              </fieldset>
            </Form>
          </div>
          <div>
            <div id="showsolt" class="tablestyle">
              <table class="tablestyle"></table>
            </div>
          </div>
        </div>
        <div id="showchart">
        <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
        </div>
      </div>
    );
  }
}

export default Bisection;
