import './layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='surprise-container h-full overflow-auto'>
            <div>{children}</div>
        </div>
    );
}