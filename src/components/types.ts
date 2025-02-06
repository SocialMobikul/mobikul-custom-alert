import type {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type buttonProps = {
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
