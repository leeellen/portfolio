import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:lee.ellen0814@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div className="h-screen relative max-w-7xl flex flex-col text-center md:text-left md:flex-row px-10 mx-auto justify-evenly items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need. <span className="underline decoration-[#fb3131]/50">Lets Talk.</span>
                </h4>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                        <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                    </div>
                    <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
                    <textarea {...register('message')} placeholder="Message" className="contactInput" />

                    <button className="bg-[#fb3131] py-5 px-10 rounded-md  font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    );
}
