import { Dimensions } from 'react-native';

export const DevSize = () => {
  return Dimensions.get('window');
}

export const Navigate = (ctx, screen) => {
  ctx.props.navigation.navigate(screen);
}

export const Rand = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
