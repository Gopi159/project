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


exports.getRecord = function (req, res) {
  var student;
  //findOne will get single data based on condition
  Student.findOne({ _id: req.params.id }, function (err, studentData) {
    student = studentData
    console.log(req.body["test_score"])
    student.test_score = req.body["test_score"]
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

exports.getHighestAvg = function (req, res) {
  Student.aggregate([
    {
      $group: {
        _id: { id: '$_id', name: '$name', email: '$email', test_score: '$test_score' },
        markAvg: { $avg: { $sum: ['$test_score.first_round', '$test_score.second_round', '$test_score.third_round'] } }
      }
    }, {
      $project: {
        Avg: { $divide: ['$markAvg', 3] }
      }
    },
    {
      $sort: {
        Avg: -1
      }
    }

  ], function (err, data) {
    if (err) {
      return res.status(500).send(err)
    }
    return res.send({
      success: true,
      data: data,
      highest_record: data.length > 0 ? data[0] : {}
    })
  })

}



