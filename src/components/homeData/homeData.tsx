import { Table } from 'antd'
import * as React from 'react'
import { getHomeData } from '../../service/home'
import { ColumnProps } from 'antd/es/table'
import { Params, DataList } from './homeDataTypes'

const columns: ColumnProps<DataList>[] = [
    {
        key: 'statistic_date',
        title: '日期',
        dataIndex: 'statistic_date',
    },{
        key: 'total_money',
        title: '全店收入',
        dataIndex: 'total_money',
    },{
        key: 'pb_fact_money',
        title: '客户还款',
        dataIndex: 'pb_fact_money',
        render: (text, record ) =>  {
            return <span>{record.pb_fact_money}元，{record.pb_fact_count}笔</span>
        }
    }
]

interface Props {
    todos: []
}
interface State {
    tableData: [],
    params: Params
}

class HomeData extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            tableData: [],
            params: {
                action: "data_daily",
                data_type: 1,
                from_date: "2020-02-17",
                page: 0,
                statistic_type: 1,
                to_date: "2020-03-18",
            }
        }
    }

    componentDidMount() {
        getHomeData(this.state.params).then((res: any) => {
            const dataList = res.data_list
            this.setState({
                tableData: dataList
            })
        })
    }

    render() {
        return(
            <Table columns={columns} dataSource={this.state.tableData} rowKey="statistic_date"/>
        )
    }
}

export default HomeData