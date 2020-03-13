import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontFamily: 'Open Sans Bold'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.8
  },
  email: {
    width: 300,
    marginTop: 15,
  },
  password: {
    width: 300,
    marginTop: 15,
  },
  formAlign: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 30,
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    shadowOpacity: 0
  },
  loginBtn: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 5,
    flexDirection: "row"
  },
  loginBtnText: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 17
  },
  forgotPasswordText: {
    position: 'absolute',
    left: 30,
    textTransform: 'capitalize',
    color: 'white'
  }
});

export default styles;
