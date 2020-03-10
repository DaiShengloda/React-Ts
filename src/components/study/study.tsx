import React from 'react'

/**
 * 一、基础类型
 */
// * 1.1 模板字符串
let name: string = 'loda'
let age: number = 27
let msg: string = `Hello, ${ name } is ${ age } years old`
let arr: number[] = [1,2,3]
let arr2: Array<number> = [4,5,6]
/**
 * 1.2 元祖 Tuple
 *   已知数组的数量和值的类型
 */
let tuple: [string, number]
tuple = ['loda', 3,]
/**
 * 1.3 枚举
 */
enum Color {red=1, green, blue}
let c: Color = Color.green
let cName: string = Color[3]
msg = c + ' ' + cName
/**
 * 1.4 any类型和空值
 *   两者相反，任意值、表示没有任何类型；
 */
let aStr: any = 4
aStr = 'loda'
let unStr: void = undefined
let unNull: null = null
function err(): boolean {
    console.log('error message')
    return false
}
let obj: object = {}
// 1.5 类型断言
let one_str: any = 'loda'
let one_str_len: number = (one_str as string).length

/**
 * 二、变量声明
 * 最小特权原则
 * 尽量使用const
 */

 /**
  * 三、接口
  *  变量的复制应该严格按照接口定义的属性赋值：多或少都不行
  *  对象类型接口
  *  函数类型接口
  */
// 3.1 可选属性、只读属性
 interface InPerson {
    name: string,
    age?: number,
    readonly sex: string
 }
// 函数变量的接口类型；函数返回值的数据类型
function createPerson(message: InPerson): {name: string, age: number} {
    let person = {
        name: 'loda',
        age: 27
    }
    if(message.name){
        person.name = message.name
    }
    if(message.age){
        person.age = message.age
    }
    return person
}
let person = createPerson({name: 'jack',sex: '男',age: 30})
console.log(person)
// 3.2继承接口
interface InOne {
    name: string
}
interface InTwo {
    age: number
}
interface InThreen extends InOne, InTwo {
    man: boolean
}
let threen_str = {} as InThreen
threen_str.name = 'loda'
threen_str.age = 34
threen_str.man = true
// 3.3混合类型--接口中存在多种类型变量
interface Counter {
    named: string;
    fun(): void;
    (start: number): string;
  }
  
  function getCounter(): Counter {
    let counter = function(start: number) {} as Counter;
    counter.named = 'loda';
    counter.fun = () => {};
    return counter;
  }
let threen_c = getCounter()
threen_c(10)
threen_c.fun()
threen_c.named = 'jack'

/**
 * 四、类
 *   面向对象编程
 */
// 4.1继承
class Animate {
    // name变量声明和初始化合并在构造函数中一起
    constructor(private name: string) {}
    move(meters: number=0) {
        console.log(`${this.name}移动了${meters}米`)
    }
}

class Pig extends Animate {
    // 属于类定义实例时，直接传值
    constructor(name: string) {
        super(name)  //继承超类
    }
    // 子类中重写超类中的方法
    move(meters: number = 0) {
        console.log('pig')
        super.move(meters)
    }
}
let fourStr: Animate = new Pig('pig')
console.log(fourStr.move(60))
/**
 * 4.2共有、私有、受保护修饰符
 *   默认共有；
 *   私有变量、方法在实例外部无法访问
 */
// console.log(fourStr.name)
// 4.3只读属性 
class Tiger extends Animate {
    // 只读属性必需在声明时和constructor中被初始化
    readonly type: string; 
    readonly age: number = 27;
    constructor(theName: string, theType: string) {
        super(theName)  // super必须在this变量之前被调用
        this.type = theType
    }
}
// 4.4存储器
const fullNameMaxLength = 10;

class Employee {
    private _fullName: string = 'loda';

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
/**
 * 4.5静态属性
 *   定义在类上的属性，而不是实例上的属性；
 */
class Lion extends Animate {
    constructor(name: string) {
        super(name)
    };
    static origin = {wid: 2, hei: 4};
    calShape(scale: number = 1): number {
        let w = Lion.origin.wid
        let h = Lion.origin.hei
        return w*h*scale
    }
}
let fourLion = new Lion('狮子')
console.log(fourLion.calShape(2))
/**
 * 4.6 class作为interface使用
 */
class Cat {
    name: string = '';
}
let myCat: Cat = {name: 'cat'}
console.log(myCat.name)

/**
 * 五、函数
 */
// 5.1函数类型--参数类型、返回值类型
function fiveFun(x: number, y: number) {
    return x+y
}

let fiveFunTwo: (baseNumber: number, incraseNumber: number) => number = function(x: number, y: number): number {
    return x+y
}
// 5.2 剩余参数
function fiveFunThr(arg1: string, ...args: string[]): string {
    return arg1 + ',' + args.join(',')
}
console.log(fiveFunThr('loda','jack','rose'))
/**
 * 5.3this
 *   箭头函数会保存函数创建时的this值；
 *   显示的提供this参数，会在参数列表最前面，给this指定类型；
 */
interface FiveIntOne {
    name: string;
    num: number;
}

interface FiveIntTwo {
    names: string[];
    nums: number[];
    // 显示的在函数参数上指定this，函数体中可以获取使用。函数返回值类型。
    fun(this: FiveIntTwo): () => FiveIntOne;  
}

let fiveStr: FiveIntTwo = {
    names: ['loda', 'jack', 'rose'],
    nums: Array(15),
    fun: function(this: FiveIntTwo) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {name: this.names[pickedSuit], num: pickedCard % 13};
        }
    }
}
console.log(fiveStr.fun())
console.log(fiveStr.fun()())

/**
 * 六、泛型
 *   定义未来的数据类型
 *   使用自己的类型来使用组件
 */
// 6.1泛型函数、泛型变量T
function sixFun<T>(arg: T): T {
    return arg
}
console.log(sixFun('name:'+123))
// 6.2泛型类型、泛型接口
interface SixFace<T> {
    (arg: T): T
}
let sixFTwo: SixFace<string> = sixFun
console.log(sixFTwo('4dd'))
let sixFThree: <T>(arg: T) => T = sixFun
// 6.3泛型类
/**
 * 6.3泛型类
 * 泛型变量
 * 泛型接口
 * 泛型类
 */
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };
// 6.4泛型约束
interface SixFaceTwo {
    length: number
}
function sixFunTwo<T extends SixFaceTwo>(arg: T): T {
    console.log(arg.length)
    return arg
}
sixFunTwo({length: 18, value: 4})

/**
 * 七、枚举
 *   枚举是一种ts定义的常量，作为变量类型使用;
 *   数字枚举、字符串枚举;
 *   使用枚举的属性来访问枚举成员的值，使用枚举的名字来访问枚举类型；
 */
// 7.1s数字枚举
enum SevenEnum {
    One,
    // Two = '未知',
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
    // Three,
    // Four
}

function sevSay(name: string, age: SevenEnum): void {
    console.log(name+'的年龄为：'+age)
}
sevSay('loda',SevenEnum.Read)
//7.2运行时枚举
enum SevEnumT {
    X,
    Y,
    Z
}
function sevFT<T>(obj: {X: T}): T {
    console.log(obj.X)
    return obj.X
}
let sevA = sevFT(SevEnumT)
console.log(SevEnumT[sevA])

/**
 * 八、类型推论
 *   变量、函数的声明和初始化
 */
// 推断最适合的类型，如果没有就是用联合组合类型
let eightSO:any[] = [1, 2, 'loda', null]

class EigAnimal {
    constructor(name: string = 'human'){
        this.name = name
    }
    name: string
}

class EigDog extends EigAnimal {
    constructor(name: string){
        super(name)
    }
    age: number = 19
}

class EigCat extends EigAnimal {
    constructor(name: string){
        super(name)
    }
    food: string = 'fish'
}

function eigFnO(): EigAnimal[] {
    return [ new EigDog('dog'), new EigCat('cat'), new EigAnimal()]
}
console.log(eigFnO())


// 定义class
class Study extends React.Component<object, object> {
    render() {
        return(
            <div>{msg}</div>
        )
    }
}

export default Study