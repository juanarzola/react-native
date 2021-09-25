/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated by codegen project: GenerateModuleH.js
 */

#pragma once

#if ANDROID
#include <TurboModule.h>
#else
#include <ReactCommon/TurboModule.h>
#endif

namespace facebook {
namespace react {
class JSI_EXPORT flowSchemaCxxSpecJSI : public TurboModule {
protected:
  flowSchemaCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker);

public:
virtual bool setAnObject(jsi::Runtime &rt, const jsi::Object &object) = 0;
virtual jsi::Object getAnObject(jsi::Runtime &rt) = 0;

};

} // namespace react
} // namespace facebook