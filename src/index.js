import React, { useRef, useLayoutEffect } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

const createStorage = () => {
  const items = {};
  return {
    getItem(qsName) {
      return items[qsName];
    },
    addItem(qsName, target) {
      if (items[qsName]) {
        console.warn('react-qs，组件qsName重复：', qsName);
      }
      items[qsName] = target;
    },
    removeItem(qsName) {
      Reflect.deleteProperty(items, qsName);
    }
  };
}

const storage = createStorage();

function qsConnect(component) {
  return (Component) => {
    const C = (props, ref) => {
      const { qsName = 'default', ...other } = props;
      const newRef = useRef();

      useLayoutEffect(() => {
        const target = component?.(newRef.current) || newRef.current;
        storage.addItem(qsName, target);
        return () => storage.removeItem(qsName);
      }, [qsName]);

      // 透传ref
      const saveRef = (el) => {
        typeof ref === 'function' && ref(el);
        newRef.current = el;
      };

      return (
        <Component {...other} ref={saveRef}/>
      )
    }

    C.displayName = `qsConnect(${Component.displayName || Component.name})`;
    C.WrappedComponent = Component;
    hoistNonReactStatics(C, Component);
    return React.forwardRef(C);
  }
}

function createProxy(qsName) {
  return new Proxy({}, {
    get(_, p) {
      return (...args) => {
        const component = storage.getItem(qsName);
        if (component && typeof component[p] === 'function') {
          return component[p].call(component, ...args);
        }
        if (component) {
          return component[p];
        }
        return undefined;
      };
    }
  })
}

// 选择器，可以先获取后执行
function qsSelector(qsName = 'default') {
  return createProxy(qsName);
}

// 选择器，只能实例化后在执行
function qsRef(qsName = 'default') {
  return storage.getItem(qsName);
}

export {
  qsConnect,
  qsSelector,
  qsRef,
}
