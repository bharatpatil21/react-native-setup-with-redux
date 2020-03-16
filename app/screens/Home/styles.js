import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadHeader: {
    backgroundColor: '#162A53',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    height: '60%',
    width: '100%'
  },
  uploadHeaderIcon: {
    marginBottom: 20,
    fontSize: 70,
    color: "#ffffff" 
  },
  uploadHeaderText: {
    color: '#ffffff',
    fontSize: 15
  },
  uploadHeaderSubText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: "bold"
  },
  cameraBlock: {
    marginTop: -30,
    backgroundColor: '#F79E33',
    width: '60%',
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  cameraButton: {
    fontSize: 18,
    color: '#ffffff',
  },
  selectDocument: {
    backgroundColor: '#FDFDFD',
    flexDirection: 'column',
    alignItems: 'center',
    height: '40%',
    width: '100%'
  },
  orText: {
    color: '#cecccc',
    marginTop: 20
  },
  selectDocumentBtn: {
    width: '90%',
    borderRadius: 7,
    marginTop: 50,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#cecccc',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  selectDocumentBtnIcon: {
    paddingRight: 10,
    fontSize: 30,
    color: '#162A53'
  },
  selectDocumentBtnText: {
    color: '#162A53',
    fontSize: 16
  },
  selectDocumentBtnSubText: {
    color: '#cecccc',
    fontSize: 10
  }
});

export default styles;
