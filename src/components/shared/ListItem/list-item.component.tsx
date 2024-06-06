import { ReactNode } from "react";
import "./list-item.css";

interface IProps {
  icon: ReactNode;
  text: string;
  boldText?: boolean;
  fontSize?: string;
  endIcon?: ReactNode;
  onClick?: () => void;
  onClickEndIcon?: () => void;
}

const ListItem: React.FC<IProps> = ({
  icon,
  text,
  fontSize,
  boldText,
  endIcon,
  onClick,
  onClickEndIcon,
}) => {
  return (
    <div className="list-item" >
      <div className="list-item-content" onClick={onClick} >
        {icon}
        <span
          className="list-item-text"
          style={{
            fontWeight: boldText ? "bold" : undefined,
            fontSize: fontSize ? fontSize : undefined,
          }}
        >
          {text}
        </span>
      </div>
      {endIcon && <div onClick={onClickEndIcon} className="list-item-end-icon">{endIcon}</div>}
    </div>
  );
};

export default ListItem;
