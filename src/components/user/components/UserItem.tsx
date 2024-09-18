import { UserInterface } from '@/hooks/api/user/types'
import React from 'react'

interface IProps {
    info: UserInterface
}
const UserItem: React.FC<IProps> = (props) => {
    return (
        <ul className='flex flex-col shadow-lg rounded-lg p-4 [&>*]:flex [&>*]:justify-between first:[&>li>span]:text-sm first:[&>li>span]:font-bold'>
            <li>
                <span>FullName:</span>
                <span>{props.info.name}</span>
            </li>
            <li><span>UserName:</span>
                <span>{props.info.username}</span>
            </li>
            <li><span>Email:</span>
                <span>{props.info.email}</span>
            </li>
            <li><span>Address:</span>
                <span>{props.info.address.city}</span>
            </li>
        </ul>
    )
}

export default UserItem