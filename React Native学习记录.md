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
53. 使用Mac开发react native，必须安装的依赖有：Node、Watchman、Xcode 和 CocoaPods。
54. react-native-cli创建新项目，`npx react-native init AwesomeProject`，不要在目录、文件名中使用中文、空格等特殊符号，空格会导致安装依赖报错；
55. 可以不安装yarn，使用npm run ios启动项目；也可以使用Xcode直接运行项目；
56. 集成到现有iOS原生应用：
  * 将现有项目拷贝到react native的ios目录下
  * 创建package.json文件，进入项目目录，安装react-native，react
  * 在Podfile文件中，指定所需要使用的"subspecs"，新建rn项目，并复制Podfile到本项目中
  * 加载打包后的js文件，或者访问本地js开发服务器
  * use RCTBridge initWithBundleURL to create a bridge and then use RCTRootView initWithBridge创建View
57. 集成到现有安卓原生应用：
  * 将现有项目拷贝到react native的android目录下
  * 创建package.json文件，进入项目目录，安装react-native，react
  * 在 app 中 build.gradle 文件中添加 React Native 和 JSC 引擎依赖
  * 自动连接，First add the following entry to settings.gradle，Next add the following entry at the very bottom of the app/build.gradle
  * 配置权限
  * 加载打包后的js文件，或者访问本地js开发服务器
  * 使用单例保存ReactInstanceManager对象；生成ReactRootView；activity生命周期回调函数和ReactInstanceManager绑定；
58. 集成到Android Fragment：
  * render your React Native component into a Fragment instead of a full screen React Native Activity
  * implement the ReactApplication interface in your main Application Java/Kotlin class
  * Add a FrameLayout for the React Native Fragment
  * Add a React Native Fragment to the FrameLayout
  * `Fragment reactNativeFragment = new ReactFragment.Builder()` creates the ReactFragment and `getSupportFragmentManager().beginTransaction().add()` adds the Fragment to the Frame Layout.
59. 网络连接，使用Fetch进行网络请求，fetch(url, {method: '', header: {}, body: {})；返回promise对象；
60. FlatList中，renderItem中的item是包装过的，需要通过item.item解析出原始数据；keyExtractor中的item是原始数据，可以直接获取ID；
61. 与网页环境有所不同，在RN应用中你可以访问任何网站，没有跨域的限制；
62. 大多数 React Native 应用来说，业务逻辑是运行在 JavaScript 线程上的。这是 React 应用所在的线程，也是发生 API 调用，以及处理触摸事件等操作的线程；
63. FlatList优化，List Item优化；
64. 分模块加载，使用require代替import，使用时在加载模块，只加载一次；
65. requestAnimationFrame(): 用来执行在一段时间内控制视图动画的代码；
setImmediate/setTimeout/setInterval(): 在稍后执行代码。注意这有可能会延迟当前正在进行的动画；
runAfterInteractions(): 在稍后执行代码，不会延迟当前进行的动画；
66. 从终端启动Android studio `open -a /Applications/Android\ Studio.app`
67. 安卓模拟器RR，CMD+M；iOS模拟器CMD+R，CMD+D；
68. 安卓原生模块：
  * 继承了ReactContextBaseJavaModule的 Java 类
  * 定义一些常量，供js使用
  * 导出一个方法给 JavaScript 使用，Java 方法需要使用注解@ReactMethod，方法的返回类型必须为void
  * 最后注册这个Java模块，在应用的 Package 类的createNativeModules方法中添加这个模块
  * 桥接到 JavaScript 的方法返回值类型必须是void。React Native 的桥接操作是异步的，使用回调来传递参数
69. 安卓回调函数，最后一个函数参数是成功回调，倒数第二个函数参数是失败回调；也可以使用Promise来简化；通过RCTDeviceEventEmitter发送事件给js，组件加载时添加观察者，组件卸载时已出观察者；
70. 安卓方法中的参数类型对照：
    Boolean -> Bool
    Integer -> Number
    Double -> Number
    Float -> Number
    String -> String
    Callback -> function
    ReadableMap/WritableMap -> Object
    ReadableArray -> Array
71. 如果你使用startActivityForResult调起了一个 activity 并想从其中获取返回结果，那么你需要监听onActivityResult事件。具体的做法是继承BaseActivityEventListener或是实现ActivityEventListener；
72. iOS原生模块：
  * 实现RCTBridgeModule，继承NSObject的子类
  * 类中包含RCT_EXPORT_MODULE()宏，指定模块名称
  * RCT_EXPORT_METHOD导出方法
  * 桥接到 JavaScript 的方法返回值类型必须是void。React Native 的桥接操作是异步的，使用回调来传递参数
73. iOS导出方法参数类型：
    string (NSString)
    number (NSInteger, float, double, CGFloat, NSNumber)
    boolean (BOOL, NSNumber)
    array (NSArray) 可包含本列表中任意类型
    object (NSDictionary) 可包含 string 类型的键和本列表中任意类型的值
    function (RCTResponseSenderBlock)
74. 也可以使用RCTConvert转换json对象为oc类型对象；
75. promise.then(onFulfilled[, onRejected]);then方法里面可以穿两个参数，成功回调和失败回调；promise只能被调用一次，promise.then/promise.reject；
76. RCT_REMAP_METHOD()宏，它可以指定 JavaScript 方法名可以和iOS里的方法名不一样；
77. iOS回调函数RCTResponseSenderBlock，接收一个数组参数，数组中第一个是错误对象，第二个是函数返回值；也可以使用Promise来回调；
78. 通过methodQueue指定原生模块在那个队列中运行；也可以在方法内部指定单个方法的运行队列；
79. 通过constantsToExport导出常量给js使用；requiresMainQueueSetup确定是否在主队列上运行；用`NS_ENUM`定义的枚举类型必须要先扩展对应的 RCTConvert 方法才可以作为函数参数传递。
80. 原生模块也可以给 JavaScript 发送事件通知。最好的方法是继承RCTEventEmitter，实现suppportEvents方法并调用self sendEventWithName:。
81. 安卓原生UI组件：
  * 原生视图需要被一个ViewManager的派生类（或者更常见的，SimpleViewManager的派生类）创建和管理。
  * 创建一个 ViewManager 的子类。
  * 实现createViewInstance方法。
  * 导出视图的属性设置器：使用@ReactProp（或@ReactPropGroup）注解。
  * 把这个视图管理类注册到应用程序包的createViewManagers里。
  * 实现 JavaScript 模块。
82. @ReactProp注解必须包含一个字符串类型的参数name。这个参数指定了对应属性在 JavaScript 端的名字。
83. 要导出给 JavaScript 使用的属性，需要申明带有@ReactProp（或@ReactPropGroup）注解的设置方法。方法的第一个参数是要修改属性的视图实例，第二个参数是要设置的属性值。
84. `Cannot run program “node”: error=2, No such file or directory` 需要从控制台启动Android Studio；
85. iOS原生UI组件：
  * 首先创建一个RCTViewManager的子类。
  * 添加RCT_EXPORT_MODULE()宏标记。
  * 实现-(UIView *)view方法。
86. 在js中引用原生组件时，记得要设置大小，不然不会显示；
87. android想rn发事件：reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(getId(), "topChange", params)绑定事件；manager类重写getExportedCustomBubblingEventTypeConstants方法，指定时间名称和导出事件名称；
88. rn想android发事件：重写getCommandsMap()方法返回要支持的事件；重写receiveCommand方法，处理接受到的事件；rn中调用UIManager.dispatchViewManagerCommand方法，发送事件给原生；
89. ios向rn发事件：添加RCTBubblingEventBlock类型的block，然后在 Manager上声明一个事件处理函数属性，将其作为所暴露出来的所有视图的委托，并调用本地视图的事件处理将事件转发至 rn；
90. rn向iOS发送事件：调用UIManager.dispatchViewManagerCommand方法，iOS导出原生方法；
91. 使用forwardRef传递ref到父组件，rn中发送事件需要获取到requireNativeComponent原生组件的ref；
92. setNativeProps直接设置视图属性，相当于操作真是DOM节点；
93. 如果你通过React.createClass方法自定义了一个组件，直接给它设置样式 prop 是不会生效的，你得把样式 props 层层向下传递给子组件，直到子组件是一个能够直接定义样式的原生组件。同理，我们也需要把setNativeProps传递给由原生组件封装的子组件。
94.