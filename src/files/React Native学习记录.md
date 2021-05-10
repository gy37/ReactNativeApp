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
    |Text|UITextView|TextView|<p>|Displays, styles, and nests strings of text and even handles touch events|
    |Image|UIImageView|ImageView|<img>|Displays different types of images
|
    |ScrollView|UIScrollView|ScrollView|<div>|A generic scrolling container that can contain multiple components and views|
    |TextInput|UITextField|EditText|<input type="text">|Allows the user to enter text
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
17. 
