# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

THIS_DIR := $(call my-dir)

include $(REACT_ANDROID_DIR)/Android-prebuilt.mk

# SampleNativeModule
include $(REACT_COMMON_DIR)/react/nativemodule/samples/platform/android/Android.mk

# start evernote
CONTEXT := evernote
#$(warning $(CONTEXT) $(THIS_DIR)) 
EVERNOTE_MODULE_PATH := $(THIS_DIR)/generated
EVERNOTE_MODULE_JNI_PATH := $(EVERNOTE_MODULE_PATH)/jni
include $(EVERNOTE_MODULE_PATH)/jni/Android.mk
# end Evernote

LOCAL_PATH := $(THIS_DIR)

include $(CLEAR_VARS)
LOCAL_MODULE := rntester_appmodules
# Note: Build the react-native-codegen output along with other app-specific C++ files.
LOCAL_C_INCLUDES := $(LOCAL_PATH) $(GENERATED_SRC_DIR)/codegen/jni $(EVERNOTE_MODULE_JNI_PATH)
LOCAL_SRC_FILES := $(wildcard $(LOCAL_PATH)/*.cpp) $(wildcard $(GENERATED_SRC_DIR)/codegen/jni/*.cpp)
LOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH) $(GENERATED_SRC_DIR)/codegen/jni
LOCAL_SHARED_LIBRARIES := libfbjni libglog libfolly_json libyoga libreact_nativemodule_core libturbomodulejsijni librrc_view libreact_render_core libreact_render_graphics libreact_codegen_rncore 
LOCAL_STATIC_LIBRARIES := libsampleturbomodule react_codegen_evernoteturbomodule
LOCAL_CFLAGS := \
  -DLOG_TAG=\"ReactNative\"
LOCAL_CFLAGS += -fexceptions -frtti -std=c++17 -Wall
include $(BUILD_SHARED_LIBRARY)
