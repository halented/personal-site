'use client';
import { FormEvent } from 'react'

export function GuestbookForm() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        let postData = {name: `${formData.get('name')}`, message: `${formData.get('message')}`}
        console.log(postData);
      }

    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <label>Name: </label>
            <input type="text" name="name" className="rounded-md bg-lightBeige p-2" />
            <label>Message: </label>
            <textarea name="message" className="rounded-md bg-lightBeige p-2" />
            <button type="submit" className=" rounded-md m-2 p-2 self-center bg-gold text-blue">Submit</button>
        </form>
    )
}