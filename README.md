# react-native-animated-checkbox

Minimalistic and customizable <CheckBox /> component for React Native.
You can do things like plug in your own check Icon component, toggle the animation and change the style.

--------------------------------

[![Travis](https://img.shields.io/travis/jkomyno/react-native-animated-checkbox.svg)](https://travis-ci.org/jkomyno/react-native-animated-checkbox) [![npm](https://img.shields.io/npm/v/react-native-animated-checkbox.svg)](https://npmjs.com/package/react-native-animated-checkbox) [![npm](https://img.shields.io/npm/dm/react-native-animated-checkbox.svg)](https://npmjs.com/package/react-native-animated-checkbox) [![Issue Stats](https://img.shields.io/issuestats/i/github/jkomyno/react-native-animated-checkbox.svg)](http://github.com/jkomyno/react-native-animated-checkbox/issues)

# Installation

- `yarn add react-native-animated-checkbox`

Or, if you prefer using npm:

- `npm i -S react-native-animated-checkbox`

## Available Props

Check the [TypeScript type definition file](src/index.d.ts) for further info.

Prop          | Type   | Default   | Description
------------- | -------| --------- | -----------------------------------------
checked       | bool   | false     | if true, renders the check Icon component
animated      | bool   | true      | if true, animates to opacity of the Icon as `checked`'s value changes
duration      | number | 300       | animation duration. Considered only if `animated` === true
style         |        |           | style of the CheckBox parent container View. Check below for the default style definition
color         | string | '#F26F6F' | color of the icon, and default color of the parent's `borderColor` style
iconName      | string | 'check'   | `name` prop of react-native-vector-icons 
iconSize      | number | 15        | `size` prop of react-native-vector-icons
activeOpacity | number | 0.7       | `activeOpacity` prop of TouchableOpacity
onPress       | func   | null      | callback called when the CheckBox gets pressed.
children      | Node   | null      | optional Icon component if react-native-vector-icons/FontAwesome doesn't suit your needs.

```javascript
  const defaultStyle = {
    backgroundColor: 'transparent',
    margin: 2,
    padding: 1,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: this.props.color,
  };
```

## Example (TODO)

## Contributing

PRs are obviously welcome! :octocat:

## Available scripts

- **lint**: verify that the eslint configuration is respected

## License

[MIT](LICENSE)
