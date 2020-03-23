/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import  Loader from '../../components/Loader'

class Ocr extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if(this.props.ocrInfo){
      let ocrDetails = this.props.ocrInfo;
      return (
        <View style={styles.container}>
            <Text> Account : {ocrDetails.accountInfo.accountNumber} </Text>
            <Text> customer : {ocrDetails.accountInfo.customerName} </Text>
        </View>
      );
    }
    else
    {
      return (
        <View style={styles.container}>
        <Loader/>
        </View>
      );
    }
   
  }
}

const mapStateToProps = ({ homeReducer }) => {
  return {
    ocrInfo: homeReducer.ocrInfo,
    ocrInfoLoading: homeReducer.ocrInfoLoading,
  };
};

export default connect(
  mapStateToProps,
  {  },
)(Ocr);
