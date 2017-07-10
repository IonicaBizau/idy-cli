#!/usr/bin/env node
"use strict";

const Tilda = require("tilda")
    , idy = require("idy")
    ;

new Tilda(`${__dirname}/../package.json`, {
    args: [
        {
            name: "length"
          , default: 7
          , desc: "The length of the string"
        }
    ]
}).main(action => {
    console.log(idy(action.args.length));
});
