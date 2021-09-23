/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import {AppRegistry} from 'react-native';
import RNTesterApp from './RNTesterAppShared';
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

AppRegistry.registerComponent('RNTesterApp', () => RNTesterApp);

// Disable warning box on development mode

module.exports = RNTesterApp;
