/**
 * types.js
 * react-native-cross-platform-storage
 *
 * Created by Mike Grabowski on 12/12/16.
 * Copyright © 2016 Callstack.io. All rights reserved.
 *
 * @flow
 */

/**
 * Describes `AsyncStorage` interface as in React Native
 */
type AsyncStorage = {
  setItem: (key: string, value: string) => Promise<void>,
  getItem: (key: string) => Promise<?string>,
};
