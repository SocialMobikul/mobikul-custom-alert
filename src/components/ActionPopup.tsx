import {
  Modal,
  Text,
  TouchableOpacity,
  Pressable,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
  type GestureResponderEvent,
  View,
  Image,
  type ImageSourcePropType,
} from 'react-native';
import type { buttonProps } from './types';
import { styles } from './styles';

const ButtonOutline = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}: buttonProps) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const MobikulAlert = ({
  visible,
  onCancel,
  message = '',
  title = 'Do you want to proceed?',
  buttons = [
    {
      title: 'Cancel',
      callback: undefined,
    },
    {
      title: 'Ok',
      callback: undefined,
    },
  ],
  titleTextStyle = styles.titleStyle,
  messageTextStyle = styles.message,
  buttonTextStyle = styles.buttonTextStyle,
  buttonStyle = styles.okButton,
  iconVisible = true,
  iconSource = require('../assets/attentionIcon.png')
}: {
  visible: boolean;
  onPressleft?: () => void;
  onPressRight?: () => void;
  onCancel?: () => void;
  leftButtonTitle?: string;
  rightButtonTitle?: string;
  leftButtonHide?: boolean;
  message?: string;
  title?: string;
  buttons: {
    title: string;
    callback?: (e: GestureResponderEvent) => void | undefined;
  }[];
  titleTextStyle?: StyleProp<TextStyle>;
  messageTextStyle?: StyleProp<TextStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  iconVisible?: boolean;
  iconSource?: ImageSourcePropType;
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <Pressable style={styles.overlay} onPress={onCancel}>
        <Pressable style={[styles.popup]}>
          {iconVisible ? (
            <Image
              source={iconSource}
              style={styles.image}
            />
          ) : null}
          <Text style={[titleTextStyle]}>{title}</Text>
          <Text style={[messageTextStyle]}>{message}</Text>
          <View style={styles.buttonContainer}>
            {buttons.slice(0, 2).map((item, index) => (
              <ButtonOutline
                key={item.title + index}
                onPress={item.callback}
                title={item.title}
                textStyle={[buttonTextStyle]}
                buttonStyle={[buttonStyle]}
              />
            ))}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default MobikulAlert;
