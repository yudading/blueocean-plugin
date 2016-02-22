var jenkinsMods = require('jenkins-js-modules');

// Create and export the shared js-extensions instance. This
// will be accessible to bundles from plugins etc at runtime, allowing them to register
// extension point impls that can be rendered via the ExtensionPoint class.
var extensions = require('@jenkins-cd/js-extensions');
jenkinsMods.export('jenkins-cd', 'js-extensions', extensions);