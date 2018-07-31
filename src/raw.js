/*
 * Adapted from the Cortex example, this will return an RxJS observable of raw EEG data
 *
 */

const Cortex = require("../lib/cortex");
const { from, fromEvent } = require("rxjs");
const { mergeMap, map } = require("rxjs/operators");

function createRawEmotivObservable(client, auth, onEEG) {
  return from(
    client.ready
      .then(() => client.init(auth))
      .then(() => client.createSession({ status: "active" }))
      .then(() => subscribe({ streams: ["eeg"] }))
  ).pipe(
    mergeMap(subs => {
      if (!subs[0].eeg) throw new Error("failed to subscribe");
      return fromEvent(client, "eeg").pipe(map(onEEG));
    })
  );
}

if (require.main === module) {
  process.on("unhandledRejection", err => {
    throw err;
  });

  const verbose = process.env.LOG_LEVEL || 1;
  const options = { verbose };

  const client = new Cortex(options);
  // these values need to be filled to run example
  const auth = {
    username: "...",
    password: "...",
    client_id: "...",
    client_secret:
      "...",
    debit: 1
  };

  const onEEG = data => ({
    data: data.eeg,
    timestamp: data.time
  });

  const rawObservable = createRawEmotivObservable(client, auth, onEEG);

  rawObservable.subscribe(console.log);
}

module.exports = { createRawEmotivObservable };
