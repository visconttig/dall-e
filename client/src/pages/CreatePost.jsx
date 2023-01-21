import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPromt } from "../utils";
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


    return (
        <section  >

        </section>
    );
}

export default CreatePost;