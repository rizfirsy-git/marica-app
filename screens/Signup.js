import React from "react";
import { Colors } from "../constant/styles";
import { userRegistration } from "../utils/auth";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text } from "react-native";
import RegisterForm from "../components/forms/RegisterForm";

const Signup = ({ navigation }) => {
  const [isAuthenticating, setIsAuthenticating] = React.useState(false);
  const registrationHandler = async ({ email, password }) => {
    console.log("email", email);
    setIsAuthenticating(true);
    // await userRegistration();
    navigation.navigate("TermCondition");
    setIsAuthenticating(false);
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#DAFAFF"]} style={styles.bgGradient}>
      <Image
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        resizeMethod="resize"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      />
      <View style={styles.top}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            width: 181,
            height: 76,
          }}
        />
        <Text style={styles.text}>
          Media belajar sambil bermain yang relevan untuk anak-anak.
        </Text>
      </View>
      <View style={styles.formContainer}>
        {isAuthenticating ? (
          <Text>Tunggu sebentar...</Text>
        ) : (
          <RegisterForm onAuthenticate={registrationHandler} />
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgGradient: {
    position: "relative",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    gap: 64,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: Colors.slate500,
    maxWidth: 250,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
    fontFamily: "Nunito-Medium",
  },
  formContainer: {
    flex: 2,
    width: "100%",
    padding: 16,
  },
});

export default Signup;
