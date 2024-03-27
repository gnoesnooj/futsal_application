import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import SubmitButton from "@/components/atoms/submit_button/SubmitButton";
import Typography from "@/components/atoms/typography/Typography";
import { useNavigate } from "react-router-dom";

const Header = (props: HeaderPropsType) => {
  const { label, backArrow, headerButton, buttonLabel, toWhere } = props;
  const navigate = useNavigate();
  const onClickBackArrow = () => {
    navigate(-1);
  };
  const onClickButton = () => {
    if (toWhere) {
      navigate(toWhere);
    }
  };
  return (
    <div
    id="glassheader" 
    className="sticky top-0 z-10 bg-[#EBF6FF] rounded-xl p-1 m-3 mt-0">
      <div className="flex p-2">
        <div
          className={`p-1 ${backArrow ? "visible" : "invisible"} min-w-16 text-[1.4rem] cursor-pointer flex items-center`}
          onClick={onClickBackArrow}
        >
          <img src="/src/assets/imgs/backarrow.png" alt="back" className="w-[1.4rem] h-[1.4rem]" />
        </div>
        <div
          className={`flex-grow text-center ${label ? "visible" : "invisible"}`}
        >
          <Typography
            textSize="text-[1.6rem]"
            fontWeight="font-medium"
            textColor="text-mancity"
            label={label}
          />
        </div>
        <div
          className={`mt-auto ${headerButton ? "visible" : "invisible"} `}
          onClick={onClickButton}
        >
          <SubmitButton label={buttonLabel} />
        </div>
      </div>
      {/* <hr className="border-[#d9d9d9] border-[0.05rem] m-0" /> */}
    </div>
  );
};

export default Header;