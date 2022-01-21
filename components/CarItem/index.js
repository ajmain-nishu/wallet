import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';
import importMetamax from '../Import/index'

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Create"}
          onPress={() => {
            
          }}
        />

        <StyledButton
          type="secondary"
          content={"Import"}
          onPress={() => {
            <importMetamax></importMetamax>
          }}
        />
      </View>

    </View>
  );
};

export default CarItem;
