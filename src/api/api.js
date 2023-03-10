const express = require("express");
const fs = require("fs");

const conn = require('./dataBaseConnect')

conn.connection.query("SELECT * FROM catalog",
  function(err, results) {
    console.log(err);
    console.log(results);
});