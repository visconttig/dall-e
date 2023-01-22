

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe,
    handleSurpriseMe}) => {

    return (
        <div>
            <div className="flex items-center mb-2 gap-2" >
                <label htmlFor={name} className="block text-sm font-medium text-gray-900" >
                    {labelName}
                </label>
                { isSurpriseMe && (
                    <button 
                        type="button"
                        onClick={handleSurpriseMe}
                        className="font-semibold text-xs bg-[#ececf1] px-1 
                        py-2 rounded-[5px] text-black" >
                        Surprise me!
                    </button>
                )}
            </div>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none 
                block w-full p-3" />
        </div>
    );
}

export default FormField;