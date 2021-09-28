import React from 'react'
import { List } from 'antd';
import ListPostItem from './ListPostItem';

const data = [
    {
        key: 0,

    },
    {
        key: 1,

    },
    {
        key: 2,

    },
    {
        key: 3,

    },
    {
        key: 4,

    },
    {
        key: 5,

    },
    {
        key: 6,

    },
    {
        key: 7,

    },
    {
        key: 8,

    },
    {
        key: 9,

    },
    {
        key: 10,

    }
]
function ListPost() {
    
    return (
        <List
            pagination={{
                onChange: page => {
                console.log(page);
                },
                pageSize: 12,
            }}
            grid={{ gutter: 24, column: 4 }}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <ListPostItem />
                </List.Item>
            )}
        />
    )
}

export default ListPost
