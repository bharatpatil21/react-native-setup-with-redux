import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.uploadHeader}>
        <Icon style={styles.uploadHeaderIcon} type="FontAwesome" name="file-image-o" />
        <Text style={styles.uploadHeaderText}>You need to Upload your</Text>
        <Text style={styles.uploadHeaderSubText}>Electricity Bill</Text>
      </View>
      <View style={styles.cameraBlock}>
        <Icon style={styles.cameraButton} type="FontAwesome" name="camera">  <Text>Use Camera</Text></Icon>
      </View>
      <View style={styles.selectDocument}>
        <Text style={styles.orText}>-------------- or --------------</Text>
        <View style={styles.selectDocumentBtn}>
          <Icon style={styles.selectDocumentBtnIcon} type="FontAwesome" name="file-image-o" />
          <View>
            <Text style={styles.selectDocumentBtnText}>Select the document from Gallery</Text>
            <Text style={styles.selectDocumentBtnSubText}>(Only select PNG files)</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
