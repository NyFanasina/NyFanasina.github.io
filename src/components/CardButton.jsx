function CardButton({ children }) {
    return (
        <button className="px-3 font-semibold border-[2.7px] bg-blue-900 text-white border-blue-900 rounded-full mx-px my-[2px]">
            {children}
        </button>
    )
}
export default CardButton