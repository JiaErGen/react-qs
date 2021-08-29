### react-qs
React跨组件选择器

#### 安装
```
npm install react-qs --save
```

### api
```js
import { qsConnect, qsSelector, qsRef } from 'react-qs';
```

### react-qs
react-qs用来存储组件的功能逻辑，不用层层传递也能调用。
比如目前有 TablePro组件，有刷新表格和重置功能等

#### 1.需要在 TablePro 声明处使用 qsConnect
方法来连接组件和 react-qs 的通信
```js
import { qsConnect } from 'react-qs';

@qsConnect()
class Index extends PureComponent {
  onRefresh = () => {
    
  }
  
  render() {
    ...
  }
}
```

#### 2.然后在组件渲染的时候需要传入参数 qsName
这个用来区分组件的唯一性，react-qs 用来判断查找哪个是哪个组件
```js
render(){
  return (
    <div>
      <TablePro
        qsName="userList" // 用于查询是当前组件
        columns={this.columns}
        service={userList}
      />
      <TablePro
        qsName="userList1" // 用于查询是当前组件
        columns={this.columns}
        service={userList}
      />
    </div>
  )
}
```

#### 3.组件调用
通过 qsSelector 方法拿到组件，qsName，然后即可调用
```js
import { qsSelector } from 'react-qs';

const Index = () => {
  // 这个地方拿到对应的 qsName 声明的组件地方，直接在使用处调用就ok，
  // 不用层层传递，但是必须组件提前有在渲染
  // 这个地方的 refreshTable 对应第1步的 qsConnect参数的返回值，默认返回组件
  const { onRefresh } = qsSelector('userList');
  
  // 这里有个删除逻辑，然后直接调用就能刷新表格
  userDelete = async ({ id }) => {
    await userDelete({ id });
    await onRefresh(); // qsRef('userList').onRefresh();
  };
  ...
}
```

## qsSelector & qsRef 不同
### qsSelector
可以先取值，后面代码在使用，但是 qsSelector 只能取方法，不能取属性，qsRef 可以全部取
```js
import { qsSelector } from 'react-qs';

function App() {
  const { onRefresh } = qsSelector('userList');
  return (
    <div>
      <button 
        onClick={() => {
          // 使用
          console.log(onRefresh());
        }}
      >
        测试
      </button>
      <TablePro
        qsName="userList" // 用于查询是当前组件
      />
    </div>
  );
}
```

### qsRef
必须等组件实例化后在使用
```js
import { qsRef } from 'react-qs';

function App() {
  return (
    <div>
      <button 
        onClick={() => {
          // 使用
          console.log(qsRef('userList').onRefresh());
        }}
      >
        测试
      </button>
      <TablePro
        qsName="userList" // 用于查询是当前组件
      />
    </div>
  );
}
```