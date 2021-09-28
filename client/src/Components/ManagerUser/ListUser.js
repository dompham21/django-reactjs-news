import React, { useState } from 'react'
import { Table, Tag } from 'antd';
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom';
const { Column } = Table;


const data = [
{
    key: '1',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],

    age: 32,
    role: 'New York No. 1 Lake Park',
    status: "Active",
},
{
    key: '2',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 42,
    role: 'London No. 1 Lake Park',
    status: "Banned",
},
{
    key: '3',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 32,
    role: 'Sidney No. 1 Lake Park',
    status: "Active",

},
{
    key: '4',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 99,
    role: 'Sidney No. 1 Lake Park',
    status: "Active",

},
{
    key: '5',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 99,
    role: 'Sidney No. 1 Lake Park',
    status: "Active",

},
{
    key: '6',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 99,
    role: 'Sidney No. 1 Lake Park',
    status: "Active",

},
{
    key: '7',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 99,
    role: 'Sidney No. 1 Lake Park',
    status: "Active",

},
{
    key: '8',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 99,
    role: 'Sidney No. 1 Lake Park',
    status: "Active",

},
{
    key: '9',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 99,
    role: 'Sidney No. 1 Lake Park',
    status: "Active",

},
{
    key: '10',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 99,
    role: 'Sidney No. 1 Lake Park',
    status: "Active",

},
{
    key: '11',
    name: ['https://minimals.cc/static/mock-images/avatars/avatar_21.jpg','John Brown'],
    age: 99,
    role: 'Sidney No. 1 Lake Park',
    status: "Active",

},
];
function ListUser() {
    const [selectRow, setSelectRow] = useState([])
    const hasSelected = selectRow.length > 0;

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectRow(selectedRows);
        },
    };
    console.log(selectRow.length)
    return (
        <div>
            {
                hasSelected ? 
                <div className="has-select-row flex flex-ai-c">
                    <div>{selectRow.length} selected</div>
                    <span className="flex flex-ai-c flex-jc-c"><MdDelete/></span>
                </div> : null
            }
            <Table
                rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                }}
                dataSource={data}
            >
                <Column title="Name" dataIndex="name" key="name" className="col-name" ellipsis={true}
                    sorter={(a, b) => a.name - b.name}
                    showSorterTooltip={false}
                    render={(item) => (
                        <div className="col-name-item">
                            <img src={item[0]}/>
                            <div className="col-name-text">{item[1]}</div>
                        </div>
                            
                    )}
                />
                <Column title="Age" dataIndex="age" key="age" 
                    sorter={(a, b) => a.age - b.age} 
                    showSorterTooltip={false}

                />
                <Column title="Role" dataIndex="role" key="role" ellipsis={true}/>
                <Column title="Status" dataIndex="status" key="status" className="col-tag"
                    filters={
                        [
                            {
                              text: 'Active',
                              value: 'Active',
                            },
                            {
                              text: 'Banned',
                              value: 'Banned',
                            },
                          ]
                    }
                    onFilter={(value, record) => record.status.startsWith(value)}

                    render={(stt)=>(
                        <>
                            {
                                stt === "Active" ? 
                                <Tag color="green" >
                                    {stt}
                                </Tag>
                                :
                                <Tag color="red" >
                                    {stt}
                                </Tag>
                        }
                        </>
                        
                    )}
                />
                <Column title="Action" dataIndex="action" key="action" className="col-action flex flex-ai-c"
                    render={()=> (
                        <>
                            <Link to="/admin/user/edit"><span className="flex flex-ai-c flex-jc-c"><MdModeEdit/></span></Link>
                            <span className="flex flex-ai-c flex-jc-c"> <MdDelete/></span>
                        </>
                    )}
                />
            </Table>
        </div>
    )
}

export default ListUser
