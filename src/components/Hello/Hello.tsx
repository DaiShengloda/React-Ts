// src/components/Hello.tsx

import * as React from 'react';
import './hello.scss';
import { Button } from 'antd'

interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

/**
 * 函数组件
 * props
 */
// function Hellofun({ name, enthusiasmLevel = 1 }: Props) {
//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D');
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name! + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   );
// }

/**
 * 类组件
 * props、state
 */
class Hello extends React.Component<Props, object> {
    render() {
      const { 
            name, 
            enthusiasmLevel = 1,
            onIncrement,
            onDecrement
        } = this.props;
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      return (
        <div className="hello">
          <div className="greeting">
             Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
          <div>
                <Button type="primary" onClick={onIncrement}>+</Button>
                <Button type="primary" onClick={onDecrement}>-</Button>
        	</div>
        </div>
      );
    }
  }

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}