import { InputHTMLAttributes, forwardRef } from "react"

interface inputProps extends InputHTMLAttributes<HTMLInputElement>{
    title?: string
    labelClassname?: string
}

const Input = forwardRef<HTMLInputElement, inputProps>((props, ref) => {
    const { title, labelClassname, ...inputProps } = props;

    return (
    <>
        <label className={labelClassname}>{title}</label>
        <input required ref={ref} {...inputProps} />
    </>
    );
});
//quando usamos essa estrutura acima é necessário passar o nome do componente aqui embaixo:
Input.displayName = 'Input';
export default Input;