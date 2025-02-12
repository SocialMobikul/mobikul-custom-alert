import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    gap: 20,
    borderRadius: 10,
    justifyContent: 'space-between', // Push buttons to the bottom
    alignItems: 'center',
    height: 'auto', // Set a fixed height for alignment
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  message: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#000',
  },
  cancelButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  okButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: "40%",
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    width: "100%",
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
