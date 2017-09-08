declare module 'react-native-animated-checkbox' {
  import {
    PureComponent,
    ViewPropTypes,
  } from 'react';
  
  export interface CheckBoxProps {
    /**
     * if true, renders the check Icon component
     */
    checked: boolean = false,
    /**
     * if true, animates to opacity of the Icon as `checked`'s value changes
     */
    animated: boolean = true,
    /**
     * animation duration. Considered only if `animated` === true
     */
    duration: number = 300,
    /**
     * style of the CheckBox parent container View
     */
    style?: ViewPropTypes.style,
    /**
     * color of the icon, and default color of the parent's `borderColor` style
     */
    color: string = '#F26F6F',
    /**
     * `name` prop of react-native-vector-icons
     */
    iconName: string = 'check',
    /**
     * `size` prop of react-native-vector-icons
     */
    iconSize: number = 15,
    /**
     * callback called when the CheckBox gets pressed.
     */
    activeOpacity: number = 0.7,
    /*
     * `activeOpacity` prop of TouchableOpacity
     */
    onPress?: (checked: boolean) => void,
    /**
     * optional Icon component if react-native-vector-icons/FontAwesome doesn't
     * suit your needs.
     */
    children?: any,
  }

  declare class CheckBox extends PureComponent<CheckBoxProps> {}

  export default CheckBox;
}
