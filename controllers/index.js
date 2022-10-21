// const axios = require("axios");
const dotenv = require("dotenv");
// const FormData = require("form-data");
const request = require("request");

dotenv.config();

exports.getHomePage = (req, res, next) => {
  res.render("index");
};

exports.postHomePage = async (req, res, next) => {
  try {
    let name = req.body.name;
    let code = req.body.code;
    let auth = req.headers["authorization"];
    // let token = `Bearer ${code}`;
    // let form = new FormData();
    // form.append("name", name);
    // form.append("code", code);
    let form = {
      name,
      code
    };
    // let response = await axios.post(process.env.URL, form, {
    //   headers: {
    //     ...form.getHeaders(),
    //     "Content-Length": form.getLengthSync(),
    //     "Authorization": auth //|| token
    //   },
    // });
    request.post(
      {
        url: process.env.URL,
        formData: form,
        headers: {
          Authorization: auth, //|| token
        },
      },
      function optionalCallback(err, httpResponse, body) {
        if (err) {
          return console.error("upload failed:", err);
        }
        return res.status(200).send(body);
      }
    );
    // return res.status(200).send(response.data);
  } catch (error) {
    throw new Error(error);
  }
};
