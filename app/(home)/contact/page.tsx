function Page() {
    return (
        <div className="[&>*]:w-24 [&>*]:pb-10 flex flex-col items-center text-left">
            <div className='pl-2'>Github</div>
            <div className='pl-10'>LinkedIn</div>
            <div className='pl-24'>Email</div>
            <div className='pl-10'>Phone</div>
            <div className='pl-2'>Blog</div>
        </div>
    );
}

export default Page;  

// github, linkedin, email, phone, dev.to? intsa?