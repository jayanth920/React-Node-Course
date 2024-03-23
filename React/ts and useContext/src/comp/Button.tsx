type ButtonProps = {
    variance: "primary" | "secondary"
    children: string
} & Omit<React.ComponentProps<'button'>, "children">


const CustomButton = ({variance, children, ...rest}: ButtonProps) => {
  return (
    <div>
        <button className={`${variance}-button`} {...rest} >{children}</button>
    </div>
  )
}

export default CustomButton