import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Banner Logo */}
      <Image 
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} 
        style={styles.banner}
        resizeMode="contain"
      />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Welcome to the Home Screen 🎉</Text>
        <Text style={styles.text}>
            My Reddit Clone. Scroll down to see more posts.
            (All posts are AI created.)
        </Text>

        <View style={styles.post}>
          <Text style={styles.postTitle}>🔥 Post 1: React Native is awesome!</Text>
          <Text style={styles.postContent}>
            React Native lets you build mobile apps using JavaScript. Pretty cool right?
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>💡 Post 2: Expo makes life easier</Text>
          <Text style={styles.postContent}>
            With Expo, you do not need to configure Xcode or Android Studio to get started.
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>🎨 Post 3: Styling in React Native</Text>
          <Text style={styles.postContent}>
            Use StyleSheet just like CSS, but remember properties are camelCase.
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>🚀 Post 4: Navigation is fun</Text>
          <Text style={styles.postContent}>
            React Navigation allows you to move between screens easily!
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>😎 Post 5: This feels like Reddit</Text>
          <Text style={styles.postContent}>
            Scroll to see posts, tap to navigate, and enjoy the mobile app vibes.
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>🔥 Post 6: Travel Story</Text>
          <Text style={styles.postContent}>
            I recently went hiking in the mountains 🏔️. The view was breathtaking!
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>💡 Post 7: Question of the Day</Text>
          <Text style={styles.postContent}>
            If you could learn any skill instantly, what would it be?
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>🎨 Post 8: Book Recommendation</Text>
          <Text style={styles.postContent}>
            Just finished “Atomic Habits” 📖. Highly recommend it!
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>🚀 Post 9: Gaming</Text>
          <Text style={styles.postContent}>
            Anyone else hyped for the next GTA? 🎮
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>😎 Post 10: Random Thought</Text>
          <Text style={styles.postContent}>
          Why do cats knock things over? 🐱
          </Text>
        </View>

        {/* Go Back Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  banner: {
    width: 90, 
    height: 90,  
    resizeMode: "contain",
    alignSelf: "center",
    margin: 10,
  },

  scrollContent: {
    padding: 10,
    paddingBottom: 80,
  },

  post: {
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  text: {
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
    textAlign: "center",
  },

  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  postContent: {
    fontSize: 14,
    color: "#444",
  },

  button: {
    backgroundColor: "#FF3B30",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});