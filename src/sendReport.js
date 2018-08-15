const axios = require("axios");

const main = async () => {
  const success = !process.argv[3];

  try {
    await axios.post(
      `${process.env.OPEN_CRON_MONITOR_URL ||
        "http://localhost:2700"}/api/reports`,
      {
        endedAt: new Date().toISOString(),
        log: success ? process.argv[2] : process.argv[3],
        name: process.argv[4],
        startedAt: process.argv[5],
        success
      }
    );
  } catch (error) {
    console.log(error);
  }
};

main();
