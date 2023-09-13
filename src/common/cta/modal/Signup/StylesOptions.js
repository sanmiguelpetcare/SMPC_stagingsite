// Color styles for React-Select.Select tag 
export const colorStyles = {
    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({ 
        ...styles, 
        backgroundColor: isFocused ? "#F2F2F2" : "#e5e5e5",
        borderRadius: "12px",
        border: isFocused ? "1px solid #17479D" : "none",
        height: "45px",
        padding: "12px",
        margin: "5px 0px 0px 0px",
        alignContent: "center",
        outerWidth: "100%"
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: "600",
            fontSize: "14px",
            color: isSelected ? "#17479D" : isFocused ? "#F5821F" : "#525252",
            backgroundColor: "#FFF"
        }
    },
    input: (styles) => ({
        ...styles,
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "14px",
        color: "#000",
        height: "auto",
        overflow: "show"
    }),
    placeholder: (styles) => ({
        ...styles,
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "14px",
        fontWeight: "400",
        color: "#8F8F8F",
        height: "auto",
        opacity: "0.8",
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        display: "none"
    }),
    indicatorContainer: (styles) => ({
        ...styles,
        height: "auto"
    }),
    valueContainer: (styles) => ({
        ...styles,
        display: "flex",
        padding: "unset",
        height: "35px",
        alignContent: "center",
        flexWrap: "nowrap"
    }),
    singleValue: (styles) => ({
        ...styles,
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "14px",
        fontWeight: "400",
        color: "#000",
        height: "auto",
        marginRight: "0px"
    }),
    menuList: (styles) => ({
        ...styles,
        maxHeight: "150px",
        borderRadius: "12px"
    }),
    menu: (styles) => ({
        ...styles,
        borderRadius: "12px"
    }),
}