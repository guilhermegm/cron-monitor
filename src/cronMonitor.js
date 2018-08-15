const logOut = [];
const logErr = [];

const hookStdout = callback => {
  var originalWrite = process.stdout.write;

  process.stdout.write = (write => {
    return function(string, encoding, fd) {
      write.apply(process.stdout, arguments);
      callback(string, encoding, fd);
    };
  })(process.stdout.write);

  return () => {
    process.stdout.write = originalWrite;
  };
};

const hookStderr = callback => {
  var originalWrite = process.stderr.write;

  process.stderr.write = (write => {
    return function(string, encoding, fd) {
      write.apply(process.stderr, arguments);
      callback(string, encoding, fd);
    };
  })(process.stderr.write);

  return () => {
    process.stderr.write = originalWrite;
  };
};

hookStdout((string, encoding, fd) => {
  logOut.push(string);
});

hookStderr((string, encoding, fd) => {
  logErr.push(string);
});

var exec = require("child_process").exec;

process.on("exit", code => {
  exec(
    `node ${__dirname}/sendReport.js '${logOut.join("")}' '${logErr.join("")}' '${module.parent.filename.split('/').pop()}'`
  );
  console.log(code);
});
