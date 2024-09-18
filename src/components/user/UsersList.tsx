'use client'

import { useUser } from '@/hooks'
import { UseUsersResponse } from '@/hooks/api/user/types'
import React from 'react'
import UserItem from './components/UserItem'
import ReloadIcon from "@/assets/images/reload.svg"
import Image from 'next/image'

interface IProps {
    usersList: UseUsersResponse
}

const UsersList: React.FC<IProps> = (props) => {
    const useFetchUsers = useUser.useGetUsersList(props.usersList)

    return (
        <div className='flex flex-col gap-8'>
            <button onClick={() => useFetchUsers.refetch()} className='flex justify-center items-center gap-2 p-2 px-4 bg-amber-400 rounded-xl w-fit'
                disabled={useFetchUsers.isFetching}
            >
                <p>Refecth Data</p>
                <Image src={ReloadIcon} width={16} height={16} alt='reload' className='rotate-90' />
            </button>
            {useFetchUsers.isFetching
                ? <div className='flex justify-center py-12'>Fetching Data .......</div>
                : <ul className='grid grid-cols-3 gap-4'>
                    {useFetchUsers.data?.map(user => <UserItem key={user.id} info={user} />)}
                </ul>
            }
        </div>
    )
}

export default UsersList