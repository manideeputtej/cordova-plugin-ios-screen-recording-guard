var exec = require('cordova/exec');

exports.isRecording = function (success, error) {
    exec(success, error, "ScreenRecordingGuard", "isRecording", []);
};