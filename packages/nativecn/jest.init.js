// Initialize global mocks before jest-expo setup runs
const NativeModules = require('react-native/Libraries/BatchedBridge/NativeModules');
if (!NativeModules.UIManager) {
  NativeModules.UIManager = {};
}
