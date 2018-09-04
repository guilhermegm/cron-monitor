# Cron Monitor

This is used to generate report for node scripts (or cron).
*It's in development.*

## Usage

First you have to start up the [open-cron-monitor](https://github.com/guilhermegm/open-cron-monitor) that is the web report.

Then set the following environment var that points to *open-cron-monitor*:

```
OPEN_CRON_MONITOR_URL=http://localhost:2700
```

And then, on your script.js just add:

```
const  cronMonitor  =  require('../src/cronMonitor')
```

*See examples folder*
