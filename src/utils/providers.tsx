'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IProps {
    children: React.ReactNode
}

const queryClient = new QueryClient()

const Providers: React.FC<IProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers