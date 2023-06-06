import * as React from "react";
import { dummyCerita } from "../assets/media/cerita";
import { dummyMusik } from "../assets/media/musik";
import { LinearGradient } from "expo-linear-gradient";
import { View, ScrollView, Text, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { Colors } from "../constant/styles";
import { useNavigation } from "@react-navigation/core";
import { getAnakDataFromServer } from "../redux/actions/user-action";

export default function Home() {
  const navigation = useNavigation();
  const ceritaBaru = [];

  const windowWidth = Dimensions.get("window").width;

  console.log("windowWidth", windowWidth / 2);

  dummyCerita.map((cerita) =>
    cerita.episodes.filter((episode) =>
      episode.hasOwnProperty("isNew") ? ceritaBaru.push(episode) : null
    )
  );

  return (
    <LinearGradient
      colors={["#FFFFFF", "#DAFAFF"]}
      style={{
        height: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{
            paddingTop: 10,
          }}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("VideoDetails", {
                videoId: "N_oiwAuCpVQ",
              })
            }
          >
            <Image
              source={require("../assets/images/marica-thumbnail.png")}
              resizeMode="cover"
              resizeMethod="resize"
              style={{
                width: windowWidth - 32,
                height: 200,
                borderRadius: 16,
              }}
            />
          </Pressable>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Nunito-Bold",
              color: Colors.slate500,
              marginTop: 24,
            }}
          >
            Cerita Baru
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 16,
              padding: 16,
            }}
          >
            {ceritaBaru.map((ceritaKu) => (
              <View
                key={ceritaKu.title}
                style={{
                  flexDirection: "row",
                  gap: 16,
                }}
              >
                <Pressable
                  onPress={() =>
                    navigation.navigate("VideoDetails", {
                      videoId: ceritaKu.youtubeId,
                    })
                  }
                >
                  <View
                    style={{
                      width: windowWidth / 2 - 24,
                      height: 160,
                      padding: 16,
                      borderRadius: 16,
                      backgroundColor: Colors.cyan100,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                      overflow: "hidden",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Nunito-Medium",
                        color: Colors.cyan800,
                        textAlign: "center",
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1000,
                        backgroundColor: Colors.slate100,
                        padding: 8,
                        height: 60,
                        borderRadius: 16,
                      }}
                    >
                      {ceritaKu.title.length > 35
                        ? ceritaKu.title.slice(0, 35) + "..."
                        : ceritaKu.title}
                    </Text>
                    <Image
                      source={ceritaKu.thumbnail}
                      resizeMode="contain"
                      resizeMethod="resize"
                      style={{
                        width: 480,
                        height: 160,
                      }}
                    />
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
          <View
            style={{
              height: 50,
              width: "100%",
            }}
          ></View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = {
  scrollContainer: {
    padding: 16,
  },
};
