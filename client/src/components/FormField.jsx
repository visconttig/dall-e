

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe,
    handleSurpriseMe}) => {

    return (
        <div>
            <div className="flex items-center mb-2 gap-2" >
                <label htmlFor={name} className="block text-sm font-medium text-gray-900" >
                    {labelName}
                </label>
            </div>
        </div>
    );
}

export default FormField;