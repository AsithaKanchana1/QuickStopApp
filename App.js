import React, { useEffect, useState } from 'react'; // used to create Timmer 
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
//Befor Running app on youre development envirement please install followings 
// //node -v
// npm install -g expo-cli
// expo --version
// npm install -g react-native-cli

// Once all dependencies installed then inside project folder run followin command 

// npm install
// npm install react-native-vector-icons

export default function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>QuickStop</Text>

        <View style={styles.timeDisplay}>
          <Text style={styles.timeText}>
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
            {("0" + Math.floor((time / 10) % 100)).slice(-2)}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          {running ? (
            <TouchableOpacity
              style={[styles.button, styles.stopButton]} // Stop button color and style
              onPress={() => setRunning(false)}
            >
              <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.startButton]} // Start button color and style
              onPress={() => setRunning(true)}
            >
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[styles.button, styles.resetButton]} // Reset button color and style
            onPress={() => {
              setTime(0);
              setRunning(false);
            }}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.linksContainer}>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => openLink('https://github.com/Asithakanchana1')}>
            <Icon name="github" size={30} color="#4a90e2" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/asitha-kanchana-35aa531a8/')}>
            <Icon name="linkedin" size={30} color="#0077b5" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.facebook.com/your-profile')}>
            <Icon name="facebook" size={30} color="#3b5998" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://buymeacoffee.com/asitha')}>
            <Icon name="coffee" size={30} color="#ff7f50" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 350,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  timeDisplay: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timeText: {
    fontSize: 65,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    paddingTop :20,
  },
  button: {
    paddingVertical: 12,
    width: '80%',
    borderRadius: 45,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  startButton: {
    backgroundColor: '#4a90e2',
  },
  stopButton: {
    backgroundColor: '#ff4747',
  },
  resetButton: {
    backgroundColor: '#7ed321',
  },
  linksContainer: {
    // margingTop :200,
    paddingTop: 100,
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  icon: {
    marginHorizontal: 15,
    margingTop :20,
  },
});
