import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import useKeyboardStatus from "../customHook/useKeyboardStatus ";
import { userData } from "../data/user";

export default function Login() {
  const [visible, setVisible] = useState(true);
  const [userErr, setUserErr] = useState(false);
  const [secretErr, setSecretErr] = useState(false);
  const isKeyboardVisible = useKeyboardStatus();
  const [user, setUser] = useState("");
  const [secret, setSecret] = useState("");

  const badField = () => {
    return (
      <View className="absolute -top-5">
        <Text className="text-red-500 text-xs">Preencha este campo!</Text>
      </View>
    );
  };

  const handleCloseKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleAcess = () => {
    if (!user) {
      return setUserErr(true);
    } else setUserErr(false);

    if (!secret) {
      return setSecretErr(true);
    } else setSecretErr(false);

    if (user === userData.user && secret === userData.password) {
      return Alert.alert("foi sal");
    } else return Alert.alert("ERROR");
  };

  return (
    <View className="relative flex-1">
      <Image
        source={require("../assets/wave.png")}
        className={`absolute -bottom-96 z-10 transition-transform duration-300 ease-in-out
        ${isKeyboardVisible ? " hidden" : ""}`}
      />
      <Image
        source={require("../assets/wave.png")}
        className="absolute rotate-180 -top-[340px] -left-40 z-10"
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            handleCloseKeyboard();
          }}
        >
          <View
            className="bg-gray-50 -mt-12 pt-6 px-14 flex-1 justify-center"
            style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
          >
            <View className="w-full justify-center items-center my-10">
              <Image
                source={require("../assets/logo.png")}
                className="w-40 h-40 object-cover"
              />
            </View>
            <View>
              <Text className="text-2xl font-medium text-center text-gray-600 mb-5">
                Acesse sua conta
              </Text>
            </View>
            <View className="gap-y-5">
              <View className="flex-row border-2 border-gray-300 rounded-xl px-2 py-3 relative">
                {userErr ? badField() : ""}
                <Feather name="user" size={24} color="purple" />
                <TextInput
                  placeholder="Usuario"
                  className="pl-3 w-[90%]"
                  keyboardAppearance="dark"
                  onChangeText={(text) => setUser(text)}
                />
              </View>
              <View className="flex-row border-2 border-gray-300 rounded-xl px-2 py-3 relative">
                {secretErr ? badField() : ""}
                <Feather name="lock" size={24} color="purple" />
                <TextInput
                  placeholder="Senha"
                  className="pl-3 w-[83%]"
                  keyboardAppearance="dark"
                  secureTextEntry={visible}
                  onChangeText={(pass) => setSecret(pass)}
                />
                <Pressable
                  style={{ position: "absolute", right: 10, top: 12 }}
                  onPress={() => setVisible(!visible)}
                >
                  {visible ? (
                    <Feather name="eye" size={24} color="purple" />
                  ) : (
                    <Feather name="eye-off" size={24} color="purple" />
                  )}
                </Pressable>
              </View>
              <Pressable className="">
                <Text className="text-right -my-2 text-xs text-gray-700">
                  Esqueceu a senha ?
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  handleAcess();
                }}
                className="bg-purple-600 w-full py-4 justify-center items-center rounded-xl active:bg-purple-700"
              >
                <Text className="text-white font-bold">Entrar</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <StatusBar style="light" />
      </KeyboardAvoidingView>
    </View>
  );
}
