import {Constant} from '../../config';

class DynamicValue {
  constructor(light, dark) {
    this[Constant.Themes.lightTheme] = light;
    this[Constant.Themes.darkTheme] = dark;
  }
}
export default DynamicValue;
