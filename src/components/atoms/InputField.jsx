const InputField = (props) => {
  return (
    <div>
      <input
        // placeholder="white"
        className="h-[46px] border-white bg-transparent border w-full placeholder:text-white px-4"
        {...props}
      />
    </div>
  );
};

export default InputField;
