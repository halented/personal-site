import SurpriseNav from '@/app/ui/common/SurpriseNav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SurpriseNav />
            <div>{children}</div>
        </div>
    );
}