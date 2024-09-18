'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from './get-query-client'
import React from 'react'

interface IProps {
    children: React.ReactNode
}


const Providers: React.FC<IProps> = ({ children }) => {
    const queryClient = getQueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers