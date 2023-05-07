import * as React from "react";
import { Image, View, ScrollView, Text } from "react-native";
import { Colors } from "../constant/styles";

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Image
          source={require("../assets/images/bubu.png")}
          resizeMode="cover"
          resizeMethod="resize"
          style={{
            width: 350,
            height: 200,
            borderRadius: 16,
          }}
        />
        <View
          style={{
            paddingTop: 24,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Nunito-SemiBold",
              color: Colors.slate700,
            }}
          >
            Cerita baru
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              marginTop: 8,
            }}
          >
            <Image
              source={require("../assets/images/bubu.png")}
              resizeMode="cover"
              resizeMethod="resize"
              style={{
                width: 334 / 2,
                height: 334 / 2,
                borderRadius: 16,
              }}
            />
            <Image
              source={require("../assets/images/bubu.png")}
              resizeMode="cover"
              resizeMethod="resize"
              style={{
                width: 334 / 2,
                height: 334 / 2,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
        <View
          style={{
            paddingTop: 24,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Nunito-SemiBold",
              color: Colors.slate700,
            }}
          >
            Direkomendasikan
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 8,
            }}
          >
            {[1, 2, 3, 4].map((index) => (
              <Image
                key={index}
                source={require("../assets/images/bubu.png")}
                resizeMode="cover"
                resizeMethod="resize"
                style={{
                  width: 334 / 2,
                  height: 334 / 2,
                  borderRadius: 16,
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  scrollContainer: {
    padding: 16,
  },
};
