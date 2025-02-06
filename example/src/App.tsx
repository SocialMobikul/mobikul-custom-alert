import { View, StyleSheet, Button, Alert } from 'react-native';
import { MobikulAlert } from 'mobikul-custom-alert';
import { useState } from 'react';
const buttonsData = [
  {
    title: 'OK',
    callback: () => Alert.alert('Button 1 clicked'),
  },
  {
    title: 'CANCEL',
    callback: () => Alert.alert('Button 2 clicked'),
  },
];
export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setVisible(true)} />
      <MobikulAlert
        buttons={buttonsData}
        visible={visible}
        onCancel={() => setVisible(!visible)}
        message="This is a mesasge"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  okButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
