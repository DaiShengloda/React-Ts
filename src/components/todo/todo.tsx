import { connect } from 'react-redux'
import { addTodo } from '../../store/todo/actions'
import React from 'react'
import { Button, Input } from 'antd'

const mapStateToProps = (state: any) => {
    return {
        todos: state.todos
    }
}
  
const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddTodo(value: string) {
            dispatch(addTodo(value))
      }
    }
}

interface Props {
    todos: []
    onAddTodo:(value: string) => void 
}
interface State {
    value: string
}
// props属性传参、state组件内部状态
class Todo extends React.Component<Props, State> {    

    constructor(props: Props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleAddTodo = () => {
        this.props.onAddTodo(this.state.value)
        this.setState({
            value: ''
        })
    }

    handleInputChange = (e: any) => {
        const { value } = e.target
        this.setState({
            value
        })
    }

    render () {
        return(
            <div>
                <Input value={this.state.value} placeholder="请输入清单项" onChange={this.handleInputChange}/>
                <Button onClick={this.handleAddTodo}>添加</Button>
                <ul>
                    {this.props.todos.map((todo: any) => (
                        <li>{todo.text}</li>
                    ))}
                </ul>
            </div>
        )
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)