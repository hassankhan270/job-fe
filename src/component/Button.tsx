import classnames from 'classnames';
import { ImSpinner2 } from "react-icons/im";

interface ButtonType extends React.ComponentProps<'button'> {
  bold?: boolean;
  full?: boolean;
  btnText?: string;
  loading?: boolean;
  gradient?: boolean;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  preAppendIcon?: boolean;
  textSize?: 'sm' | 'base' | 'lg' | '2xl';
}

const Button: React.FC<ButtonType> = ({
  bold,
  icon,
  full,
  loading,
  btnText,
  gradient,
  preAppendIcon,
  className = '',
  textSize = 'base',
  children,
  ...rest
}) => (
  <button
    className={classnames(
      `my-3 h-12 rounded-full px-3 transition ease-in-out disabled:cursor-not-allowed disabled:opacity-50 text-${textSize} ${className}`
    )}
    {...rest}
  >
    {loading ? (
      <div className='flex-center'>
       <ImSpinner2 />

      </div>
    ) : (
      <>
        <div className='flex justify-center items-center gap-2'>
          {icon && preAppendIcon ? icon : null}
          {btnText ? btnText : null}
          {icon && !preAppendIcon ? icon : null}
        </div>
        {children}
      </>
    )}
  </button>
);

export default Button;
