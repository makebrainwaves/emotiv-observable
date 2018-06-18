# Emotiv Observable
Making Emotiv Cortex SDK for Node Reactive

*Note: this repo is a work in progress*

This is a simple example of how to create an RxJS observable of EEG data from an Emotiv Epoc headset using the Cortex SDK. The data format produced by the `createRawEmotivObservable` function is identical to that of [OpenBCI Observable](https://github.com/neurosity/openbci-observable) and [Muse JS](https://github.com/urish/muse-js) and is suitable for use with [EEG Pipes](https://github.com/neurosity/eeg-pipes). Eventually, this might be tightened up into a package that will make it easier for JS developers to get started 

## Authentication
**An active license from Emotiv is necessary to access raw data**

Licenses are tied to specific EmotivID accounts. To authenticate and access raw data with an active license you must follow these steps:
1. Ensure you have an EmotivID account with an active subscription for raw data access
2.  Download and install the Cortex SDK from Emotiv's website
3. Go to the 'Cortex Apps' section of your account page and generate a 'Client ID' and 'Client Secret'
4. Fill in the values for `username`, `password`, `client_id`, and `client_secret` in raw.js