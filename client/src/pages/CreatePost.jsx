import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";



const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        prompt: "",
        photo: ""
    });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        return;
    }

    const handleChange = (e) => {
        setForm({});
    }

    const handleSurpriseMe = () => {
        return;
    }

    return (
        <section className="max-w-7xl mx-auto"  >
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]" >Create</h1>
                <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]" >Create imaginative and visually stunning images through DALL-E AI and share them with the community</p>
            </div>

            <form className="mt-16 max-w-3xl"
                onSubmit={handleSubmit} >
                <div className="flex flex-col gap-5" >
                    <FormField
                        name="name"
                        labelName="Your name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        handleChange={handleChange} />
                    <FormField
                        name="prompt"
                        labelName="Prompt"
                        type="text"
                        placeholder="This is a placeholder text"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe />
                </div>

            </form>
        </section>
    );
}

export default CreatePost;