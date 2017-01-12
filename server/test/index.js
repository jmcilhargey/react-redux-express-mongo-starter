import http from "http";
import assert from "assert";
import project from "../../config/project.config";

import "../index.js";

describe("Node server", () => {
  it("should return status 200", (done) => {
    http.get(`http://${ project.host }:${ project.port }`, (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
