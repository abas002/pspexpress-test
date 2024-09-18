import React from 'react'
import * as UserApis from "@/hooks/api/user/api"
import UsersList from '../../../components/user/UsersList'


const ListPage = async () => {
    const usersList = await UserApis.getUsersList()

    return (
        <main className='py-12 px-8'>
            <UsersList usersList={usersList} />
        </main>
    )
}

export default ListPage