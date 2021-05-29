const express = require("express");
const Student = require('./model')

exports.postData = function (req, res) {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,

  })
  student.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ message: err })
    })
};
// exports.getData = function (req, res) {
//   Project.find().then(data => {
//     res.json(data)
//   })
//     .catch(err => {
//       res.json({ message: err })
//     })
// };

exports.getRecord = function (req, res) {
  var student;
  //findOne will get single data based on condition
  Student.findOne({ _id: req.params.id }, function (err, studentData) {
    student = studentData
    student.test_score = req.body.test_score
    student.save(function (err, data) {
      if (err) {
        return res.status(500).send(err)
      }
      return res.send({
        success: true,
        data: data
      })


    })
  })
};




