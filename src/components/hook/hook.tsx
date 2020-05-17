import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

function Hook() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);

    // 相当于class组件中的，componentDidMount和componentDidUpdate
    useEffect(() => {
        setCount(100)
        console.log(`You clicked ${count} times`)
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>
                Click me
            </Button>
        </div>
    );
}

export default Hook;