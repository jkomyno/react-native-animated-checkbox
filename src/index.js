import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  TouchableOpacity,
  View,
  ViewPropTypes,
  StyleSheet,
} from 'react-native';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import Icon from 'react-native-vector-icons/FontAwesome';
/* eslint-enable */

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultStyle: {
    backgroundColor: 'transparent',
    margin: 2,
    padding: 1,
    borderRadius: 0,
    borderWidth: 2,
  },
});

export default class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    animated: PropTypes.bool,
    duration: PropTypes.number,
    style: ViewPropTypes.style,
    color: PropTypes.string,
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    activeOpacity: PropTypes.number,
    children: PropTypes.node,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    animated: true,
    duration: 300,
    style: {},
    color: '#F26F6F',
    iconName: 'check',
    iconSize: 15,
    activeOpacity: 0.7,
    children: null,
    onPress: null,
  };

  constructor(props) {
    super(props);

    this.opacity = new Animated.Value(props.checked ? 1 : 0);
    this.setInstanceStyle(props);
    this.state = {
      pointerEvents: this.getPointerEvents(props.onPress),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onPress &&
      nextProps.onPress !== this.props.onPress
    ) {
      this.setState({
        pointerEvents: this.getPointerEvents(nextProps.onPress),
      });
    }
    if (nextProps.style !== this.props.style) { // probably doesn't work since it's not immutable
      this.setInstanceStyle(nextProps);
    }
  }

  componentDidUpdate(prevProps) {
    // animate on checked change
    if (prevProps.checked !== this.props.checked) {
      this.animateOpacity();
    }
  }

  onPress = () => {
    const {
      onPress,
      checked,
    } = this.props;

    if (onPress) {
      onPress(!checked);
    }
  }

  setInstanceStyle = (props) => {
    this.style = Object.assign({},
      Object.assign({}, styles.defaultStyle, {
        borderColor: props.color,
      }),
      props.style,
    );
  }

  getPointerEvents = (onPress) => {
    if (onPress) {
      return 'auto';
    }

    return 'none';
  }

  animateOpacity = () => {
    const {
      animated,
      duration,
      checked,
    } = this.props;

    if (animated) {
      Animated.timing(this.opacity, {
        toValue: checked | 0,
        duration,
        useNativeDriver: true,
      }).start();
    } else {
      this.opacity.setValue(checked | 0);
    }
  }

  render() {
    const {
      children,
      iconName,
      iconSize,
      color,
      activeOpacity,
    } = this.props;
    const IconComponent = children || (
      <Icon
        name={iconName}
        size={iconSize}
        color={color}
      />
    );

    return (
      <View
        style={this.style}
        pointerEvents={this.state.pointerEvents}
      >
        <TouchableOpacity
          onPress={this.onPress}
          activeOpacity={activeOpacity}
        >
          <Animated.View style={[
            styles.iconContainer, {
              opacity: this.opacity,
            }]}
          >
            {IconComponent}
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}
