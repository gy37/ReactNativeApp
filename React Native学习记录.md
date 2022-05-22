### React Native学习记录

*React Native跨平台开发，自己一直做的iOS开发，之前了解过Android开发，最新修改了React的代码，万事俱备，开始学习React Native。作为跨平台技术的React Native，值得学习，毕竟也存在这么久了，有一定的用户基础，社区，文档什么的都比较完善。相比Flutter全新的语言，全新的技术，从React Native开始入手学习跨平台技术也挺好的。*

1. 运行报错`'event2/event-config.h' file not found`
  把podfile中use_flipper!改成use_flipper!({ 'Flipper-Folly' => '2.3.0' })，
  然后删除Podfile.lock，然后重新 pod install
2. 使用`yarn ios --device "shenyu's iPhone"`命令，直接运行项目到手机上。
  报错的话，先执行`sudo npm install -g ios-deploy --unsafe-perm=true`命令，全局安装ios-deploy，再重新运行上面的命令
3. React Native主要的核心组件：
    |React Native|iOS|Android|Web|说明|
    |---|---|---|---|---|
    |View|UIView|ViewGroup|不可滑动的div|A container that supports layout with flexbox, style, some touch handling, and accessibility controls|
    |Text|UITextView|TextView|`<p>`|Displays, styles, and nests strings of text and even handles touch events|
    |Image|UIImageView|ImageView|`<img>`|Displays different types of images|
    |ScrollView|UIScrollView|ScrollView|`<div>`|A generic scrolling container that can contain multiple components and views|
    |TextInput|UITextField|EditText|`<input type="text">`|Allows the user to enter text
|
4. 使用`open -a "Simulator.app" --args -CurrentDeviceUDID "A926ABD9-016F-4760-BF10-AED6A05F29E1"`打开模拟器。也可以使用`yarn ios --simulator "iPhone 8"`运行ios模拟器
5. `const Cat = () => {};`一个函数定义的组件，函数的返回值被渲染成一个React元素，使用export default导出这个组件，方便在其他地方引用。
6. jsx语法糖，实际上是调用了`React.createElement`方法，生成元素。
7. 设置组件的props时需要用到双花括号{{}}。在jsx中引用js的值需要用花括号{}包裹起来，js对象也需要用花括号{}包裹起来，所以是两层花括号
8. props用来配置组件第一次渲染，state用来管理随时间或者用户操作变化的数据。
9. 使用usestate来为组件声明状态。[<取值>, <设值>] = useState(<初始值>)。设置state时，相关组件会自动刷新，重新渲染
10. FastList类似plain tableview，SectionList类似group tableview
11. Platform.OS和Platform.Version检测系统和版本，Platform.select区分不同的环境
12. 可以用不同的平台的扩展名来适配组件，BigButton.ios.js和BigButton.android.js，import BigButton from './BigButton';会根据平台自动加载对应的组件。
13. 打开安卓模拟器，`emulator -avd Pixel_3a_API_30_x86`使用改命令即可
14. react-native上的flexDirection和css中的flex类似，但是flexDirection的默认值是column而不是row，而flex也只能指定一个数字值。
15. flexDirection布局方向（row, column），alignItems布局垂直方向的对齐方式（flex-start, center, flex-end），justifyContent布局方向的对齐方式（flex-start, center, flex-end, space-between, space-around）
16. flex数字，表示占比。父视图需要设置大小或者flex之后才能使用
17. flex 属性决定元素在主轴上如何填满可用区域。整个区域会根据每个元素设置的 flex 属性值被分割成多个部分。
18. flexDirection默认column方向
19. 使用npm全局安装react-devtools失败，改用yarn成功
20. alignItems: stretch填充，不要设置在交叉轴方向上的值才能生效
21. alignSelf: 重写父节点的alignItems，自定义元素在交叉轴方向的排列
22. 设置flexWrap: "wrap"之后，align-content才能生效，有多行内容时在交叉轴方向上的排列
23. relative相对于原始文字进行定位，上左下右设置，在文档流中，不会影响其他元素；absolute相对于设置有relative或absolute属性的父元素进行定位，如果没有就相对于根元素定位，元素脱离文档流，会影响其他元素
24. 引用图片source={require('./my-icon.png')}
25. `<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={{width: 400, height: 400}} />`使用网络图片；`<Image source={require('./my-icon.png')} />`使用本地图片
26. useRef设置ref属性，可以是节点或者变量，通过ref来获取，类似全局变量，结构是{current：''}
27. react hooks，可以在函数组件中使用class中的特性，保存状态，声明周期，减少不必要的渲染等
28. 但正是由于useEffect里面的内容在每次render结束后都会执行，可能有时候内部的内容并没有发生变化，这时就会产生冗余的render。这时候就需要引入依赖，由写程序的人来告诉react我这个useEffect依赖了外部的那些参数，只有这些参数发生变化的时候才去执行我里面的函数。
```
  useEffect(() => {
      document.title = 'Hello, ' + name;
  }, [name]); // Our deps
```
这个effect的依赖项是name这个变量，只有当name发生变化的时候才去执行里面的函数
29. 动画有Animated.Value，Animated.timing动画方式，Animated.View
30. 使用require引用图片包括尺寸信息。如果需要动态设置图片大小， style 属性设置`{ width: null, height: null }`即可。网络图片需要手动指定图片的尺寸
31. Animated简洁的实现各种个样的动画和交互方式，Animated仅封装了 6 个可以动画化的组件：View、Text、Image、ScrollView、FlatList和SectionList
32. [React Hooks指南](https://zhuanlan.zhihu.com/p/92211533)
33. `const [state, setState] = useState({counter: 0})`，返回一个状态以及能修改这个状态的setter，mounte之后欧只能通过setter修改这个状态;
useEffect(effect: Function, deps?: Array)，处理函数组件中的副作用，如一步操作、延迟操作等，可以替代class组件中的componentDidMount、componentDidUpdate等生命周期方法;
useContext用于在函数组件内部获取context存储的状态，useContext的实现比较简单，只是读取挂载在context对象上的_currentValue值并返回；
`const [state, dispatch] = useReducer(reducer, {count: initialCount, step: 10});`,useReducer用于管理复杂的数据结构，基本实现了redux的核心功能；
34. 如果把 props 理解为定制组件渲染的参数， 那么state就像是组件的私人数据记录。状态用于记录那些随时间或者用户交互而变化的数据。状态使组件拥有了记忆！
35. Platform.select根据不同平台返回不同的组件
```
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid')
})();
```
36. 安装依赖卡顿报错，链接手机热点后很快安装完成
37. 项目路径不能包含空格，不然可能会导致位置错误；如果更换项目路径，需要删掉yarn.lock/package-lock.json和node_moudules，Podfile.lock和Pod；
38. react-navigatioin：Stack.Navigator，initialRouteName指定初始路由，screenOptions指定全局页面配置；Stack.Screen，name路由名称，component组件，options页面配置信息；
39. 使用context进行页面之间传值；
40. 组件可以获取到navigation即组件所在的导航，route当前路由；navigation.navigate用于页面跳转；navigation.push跳转页面，不判断是否存在；navigation.goBack返回；navigate('Home')和navigation.popToTop()返回首页；
41. navigation.navigate('RouteName', { paramName: 'value' })传递参数；使用route.params获取参数；navigation.setParams页面内修改参数；initialParams设置页面初始参数；参数应该尽量少；
42. 自定义header，设置页面的options或者导航的screenOptions来设置；页面options可以是对象也可以是函数，函数有navigation和route参数；
43. headerLeft和headerRight设置导航栏左右按钮；headerBackTitle, headerBackTitleStyle, 和 headerBackImageSource可以单独设置返回按钮属性；
44. Button组件样式固定，可以用TouchableOpacity或者TouchableNativeFeedback来定制需要的按钮；
45. 设置scrollview高度，通过包裹view，设置view的属性来实现；
46. const styles = StyleSheet.create({});声明styles样式对象，在组件中通过引用该对象的key来使用对象；样式名称改为驼峰命名的；
47. View, Text, Image, ScrollView, FlatList, SectionList支持动画；Animated.timing使用easing动画；Animated.spring弹性物理动画；Animated.decay由快到慢动画；Animated.Value定义单个动画值；Animated.ValueXY定义动画向量值；
48. Animated.parallel组合动画；value.interpolate动画值映射，inputRange中的值映射为outputRange的值；通过动画值映射可以实现一个值控制多个属性动画；你可以通过设置extrapolate、extrapolateLeft或extrapolateRight属性来限制输出区间。默认值是extend（允许超出），不过你可以使用clamp选项来阻止输出值超过outputRange。
49. Animated.event手势动画，根据滚动或者滑动手势事件设置动画值；
50. useRef返回可变的ref对象，该对象只有一个current属性；返回的ref对象在整个生命周期内不变；更新值时不会重新渲染，和useState不同；使用useRef定义变量，保证获取到最新的数据；
51. 动画组件，动画属性值，动画开始时机；
52. LayoutAnimation 全局配置创建和更新渲染动画；