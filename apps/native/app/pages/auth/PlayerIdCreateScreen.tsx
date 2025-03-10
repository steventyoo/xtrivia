import { FontNames } from "@app/theme/fonts";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Keyboard, KeyboardEvent, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@app/components/Logo";
import { Colors } from "@app/theme/colors";
import AuthCTAButton from "@app/components/buttons/AuthCTAButton";
import SpiritAnimalSelector from "@app/components/templates/SpiritAnimalSelector";
import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "@app/navigation/RootStack";
import { useAuth } from "@app/hooks/AuthProvider";
import { supabase } from "@app/services/supabase";

const PlayerIdCreateScreen = () => {

  const { authUserId, updateAuthProfile } = useAuth()

  const navigation = useNavigation<NavigationProp<RootStackParamsList>>()

  const [bottomHeight, setBottomHeight] = useState(80)
  const [playerId, setPlayerId] = useState('');
  const [selectedSpiritAnimal, setSelectedSpiritAnimal] = useState('dog')
  const [processing, setProcessing] = useState(false)

  const handleComplete = async () => {

    setProcessing(true)

    const { data, error } = await supabase
      .from('profiles')
      .upsert(
        [{ id: authUserId, username: playerId, avatar: selectedSpiritAnimal }],
        { onConflict: 'id' }
      );

    setProcessing(false)

    if (error) {      
      console.error('Upsert error:', error);
      return null;
    } else {
      updateAuthProfile?.(data)
      navigation.dispatch(StackActions.replace('Main'))
    }
  }
  
  useEffect(() => {
    function onKeyboardDidShow(e: KeyboardEvent) {
      setBottomHeight(e.endCoordinates.height + 20)      
    }

    function onKeyboardDidHide() {
      setBottomHeight(60)
    }

    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Logo containerStyle={styles.logoContainer} iconSize={35} textSize={30} />
      <View>
        <Text style={styles.titleText}>
          player id
        </Text>
        <Text style={styles.subTitleText}>
          are you eager, sly or mischievous?
        </Text>
        <View style={styles.inputView}>
          <Text style={styles.inputCaption}>
            create player id
          </Text>
          <TextInput
            style={styles.input}
            value={playerId}
            onChangeText={setPlayerId}
          />          
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputCaption}>
            select your spirit animal
          </Text>
          <SpiritAnimalSelector
            containerStyle={{ marginTop: 10 }}
            onAnimalSelected={setSelectedSpiritAnimal}
          />
        </View>              
      </View>
      <View style={{...styles.actionView, bottom: bottomHeight}}>
        <AuthCTAButton
          type="primary"
          text="complete"
          onPress={handleComplete}
          disabled={playerId.length < 1}
          loading={processing}
          containerStyle={styles.cta}
        />
      </View>
    </SafeAreaView>
  )
}

export default PlayerIdCreateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    marginTop: 20,
    alignSelf: 'center'
  },
  titleText: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'center',
    color: 'black'
  },
  subTitleText: {
    fontFamily: FontNames.Inconsolata,
    fontSize: 16,
    marginHorizontal: 60,
    marginTop: 40,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 18,
  },
  inputView: {
    marginTop: 30,
    marginHorizontal: 60,    
  },
  inputCaption: {
    fontSize: 12,
    color: 'black'
  },
  input: {
    marginTop: 5,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  codeFieldRoot: {
    marginTop: 30,
    marginHorizontal: 60,
  },
  cell: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray[92],
    borderRadius: 5,
  },
  focusCell: {
    backgroundColor: Colors.gray[95],
  },
  cellText: {
    fontSize: 24,
  },
  actionView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,    
  },
  cta: {
    marginHorizontal: 60
  }
})