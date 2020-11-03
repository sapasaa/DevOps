const supertest = require("supertest");

var server = supertest.agent("http://localhost:5000");

describe("SAMPLE unit test", () => {
    it("should return home page", (done) => {
        this.timeout(10000) // all tests in this suite get 10 seconds before timeout

        server
        .get("/")
        .expect("Content-type", /text/)
        .expect(200)
        .end(function (err,res) {
            done();
        });
    });
});